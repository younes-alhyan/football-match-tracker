const {
  baseUrl,
  apiKey,
  formatTime,
  season,
  colors,
  leagues,
} = require("./utils");

// Today's date in the format YYYY-MM-DD
const today = new Date().toISOString().split("T")[0];

leagues.forEach((league) => {
  fetch(`${baseUrl}/fixtures?date=${today}&league=${league.id}&season=${season}`, {
    method: "GET",
    headers: {
      "x-apisports-key": apiKey,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(
        `\n${colors.fg.cyan}${colors.bright}Matches for ${league.name} :${colors.reset}`
      );
      if (data.response.length > 0) {
        data.response.forEach((fixture) => {
          const homeTeam = fixture.teams.home.name;
          const awayTeam = fixture.teams.away.name;
          const status = fixture.fixture.status.short;
          const scoreHome = fixture.goals.home;
          const scoreAway = fixture.goals.away;
          const time = formatTime(fixture.fixture.date);

          if (status === "FT") { // Match is finished
            console.log(
              `${colors.fg.green}- ${homeTeam} ${scoreHome} vs ${scoreAway} ${awayTeam}${colors.reset}`
            );
            console.log(
              `${colors.fg.yellow}  Time: ${time}${colors.reset}`
            );
          } else {
            console.log(
              `${colors.fg.green}- ${homeTeam} vs ${awayTeam}${colors.reset}`
            );
            console.log(
              `${colors.fg.yellow}  Time: ${time}${colors.reset}`
            );
          }
        });
      } else {
        console.log(
          `${colors.fg.red}${colors.bright}No matches found for ${league.name} today.${colors.reset}`
        );
      }
    })
    .catch((error) =>
      console.error(
        `${colors.fg.red}Error fetching fixtures: ${error}${colors.reset}`
      )
    );
});
