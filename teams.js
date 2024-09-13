const {
  apiKey,
  baseUrl,
  formatTime,
  season,
  teams,
  colors,
} = require("./utils");
const readline = require("readline");

// Create an interface to read from the console
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const colorText = (text, color) => `${color}${text}${colors.reset}`;

const getUserInput = (prompt) => {
  return new Promise((resolve) => {
    rl.question(prompt, (answer) => {
      resolve(answer);
    });
  });
};

// Fetch next fixtures for a team
const getNextFixtures = async (teamId) => {
  try {
    const limit = 10; // Number of fixtures you want to retrieve

    const response = await fetch(
      `${baseUrl}/fixtures?team=${teamId}&next=${limit}&season=${season}`,
      {
        method: "GET",
        headers: {
          "x-apisports-key": apiKey,
        },
      }
    );

    const data = await response.json();
    return data.response;
  } catch (error) {
    console.error(colorText("Error fetching fixtures:", colors.fg.red), error);
    return [];
  }
};

// Fetch past fixtures for a team
const getPastFixtures = async (teamId) => {
  try {
    const limit = 1; // Number of past fixtures you want to retrieve

    const response = await fetch(
      `${baseUrl}/fixtures?team=${teamId}&last=${limit}&season=${season}`,
      {
        method: "GET",
        headers: {
          "x-apisports-key": apiKey,
        },
      }
    );

    const data = await response.json();
    return data.response;
  } catch (error) {
    console.error(colorText("Error fetching past fixtures:", colors.fg.red), error);
    return [];
  }
};

const displayFixtures = async (teamId) => {
  try {
    const fixtures = await getNextFixtures(teamId);
    const pastFixtures = await getPastFixtures(teamId);

    if (pastFixtures.length > 0) {
      const lastFixture = pastFixtures[0];
      const homeTeam = lastFixture.teams.home.name;
      const awayTeam = lastFixture.teams.away.name;
      const scoreHome = lastFixture.goals.home;
      const scoreAway = lastFixture.goals.away;
      const time = formatTime(lastFixture.fixture.date);

      console.log(
        `${colors.fg.red}Last Match:${colors.reset}`
      );
      console.log(
        `${colors.fg.green}${homeTeam} ${scoreHome} vs ${scoreAway} ${awayTeam}${colors.reset}`
      );
      console.log(
        `${colors.fg.yellow}  Time: ${time}${colors.reset}`
      );
    } else {
      console.log(
        `${colors.fg.red}No past matches found for this team.${colors.reset}`
      );
    }

    console.log(`\n${colors.fg.cyan}${colors.bright}Upcoming Fixtures:${colors.reset}`);
    fixtures.forEach((fixture, index) => {
      const time = formatTime(fixture.fixture.date);

      const homeTeamColor = colors.fg.magenta;
      const awayTeamColor = colors.fg.cyan;
      const timeColor = colors.fg.yellow;
      const indexColor = colors.bg.blue + colors.fg.white; // Background color for index

      console.log(
        `${indexColor}${index + 1}${colors.reset} - ` +
          `${homeTeamColor}${fixture.teams.home.name}${colors.reset} vs ` +
          `${awayTeamColor}${fixture.teams.away.name}${colors.reset} ` +
          `on ${timeColor}${time}${colors.reset}`
      );
    });
  } catch (error) {
    console.error(colorText("Error:", colors.fg.red), error);
  }
};

const getTeamIndex = async () => {
  teams.forEach((team, index) => {
    console.log(colorText(`${index + 1}: ${team.name}`, colors.fg.green));
  });

  const choice = await getUserInput(
    colorText("Choose a Team (or type 0 to exit): ", colors.fg.yellow)
  );
  const index = parseInt(choice, 10);

  if (index <= 0 || index > teams.length || isNaN(index)) {
    return -1;
  }
  return index - 1;
};

const main = async () => {
  let running = true;

  while (running) {
    const teamIndex = await getTeamIndex();
    if (teamIndex === -1) {
      running = false;
      console.log(colorText("Exiting...", colors.fg.red));
    } else {
      const team = teams[teamIndex];
      await displayFixtures(team.id);
      await getUserInput(
        colorText("Press Enter to continue...", colors.fg.blue)
      );
    }
  }

  rl.close();
};

main();
