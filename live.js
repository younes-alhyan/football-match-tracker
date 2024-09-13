const { apiKey, baseUrl, leagues, colors } = require('./utils');

const fetchLiveMatches = async () => {
  try {
    const response = await fetch(`${baseUrl}/fixtures?live=all`, {
      method: "GET",
      headers: {
        "x-apisports-key": apiKey,
      },
    });
    const data = await response.json();
    const liveMatches = data.response.filter(fixture => leagues.find(league => league.id === fixture.league.id));

    if (liveMatches.length > 0) {
      liveMatches.forEach((fixture) => {
        const leagueName = leagues.find(league => league.id === fixture.league.id).name;
        const homeTeam = fixture.teams.home.name;
        const awayTeam = fixture.teams.away.name;
        const scoreHome = fixture.goals.home;
        const scoreAway = fixture.goals.away;
        const status = fixture.fixture.status.long;

        console.log(
          `${colors.fg.cyan}${colors.bright}${leagueName}${colors.reset}: ${colors.fg.green}${homeTeam} ${scoreHome}${colors.reset} - ${colors.fg.red}${scoreAway} ${awayTeam}${colors.reset} (${colors.fg.yellow}${status}${colors.reset})`
        );
      });
    } else {
      console.log(`${colors.fg.red}${colors.bright}No live matches found for the specified leagues.${colors.reset}`);
    }
  } catch (error) {
    console.error(`${colors.fg.red}Error fetching live scores: ${error}${colors.reset}`);
  }
};

fetchLiveMatches();
