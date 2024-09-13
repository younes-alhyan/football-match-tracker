\# Project: Football Match Tracker

\## Overview

This project is a command-line tool that fetches and displays football
match data, including live matches, past and upcoming fixtures, and team
information from the API-SPORTS.io football API. It is designed to
provide football enthusiasts with real-time updates and detailed
information about their favorite teams and leagues.

\## Features

\- \*\*Display Today\'s Matches\*\*: Shows fixtures for the current day
for various leagues (e.g., Premier League, La Liga, Serie A). - \*\*Live
Matches\*\*: Fetches and displays currently live matches. - \*\*Team
Fixtures\*\*: Allows the user to select a team and see both past and
upcoming matches. - \*\*Colorful Console Output\*\*: Uses ANSI escape
codes for colorizing text for improved readability. - \*\*Command-line
Interface\*\*: Provides a CLI to choose options and fetch data
interactively.

\## Prerequisites

\- \*\*Node.js\*\*: Ensure Node.js is installed on your system. -
\*\*API Key\*\*: You need an API key from
\[API-SPORTS.io\](https://www.api-football.com/) to fetch football data.
Store the API key in a \`.env\` file.

\## Installation

1\. Clone the repository:

\`\`\`bash git clone
https://github.com/your-repo/football-match-tracker.git cd
football-match-tracker \`\`\`

2\. Install dependencies:

\`\`\`bash npm install \`\`\`

3\. Create a \`.env\` file in the root of your project with your API
key:

\`\`\` API_KEY=your_api_key_here \`\`\`

4\. Run the tool by executing the Bash script:

\`\`\`bash ./matches.sh \`\`\`

\## Directory Structure

\`\`\` . ├── matches.js \# Script for fetching today\'s matches ├──
live.js \# Script for fetching live matches ├── teams.js \# Script for
displaying past and upcoming fixtures for a selected team ├── utils.js
\# Utility functions and constants ├── matches.sh \# Bash script to run
the tool ├── .env \# Environment variables └── README.md \# Project
documentation \`\`\`

\## Usage

You can use the \`matches.sh\` Bash script to interact with the tool.
There are options for fetching different types of data:

\`\`\`bash \# Display today\'s matches ./matches.sh

\# Display live matches ./matches.sh -l

\# Display upcoming fixtures for a specific team ./matches.sh -t \`\`\`

\### Command-line Options

\- \`-l\`: Fetch live matches. - \`-t\`: Choose a team and display past
and upcoming fixtures.

\### Example Output

\*\*Today\'s Matches:\*\*

\`\`\`bash Matches for Premier League : - Manchester United vs Chelsea
Time: Saturday, 14 September 2024, 17:30

Matches for La Liga : No matches found for La Liga today. \`\`\`

\*\*Live Matches:\*\*

\`\`\`bash Premier League: Manchester United 1 - 0 Chelsea (Second Half)
\`\`\`

\*\*Team Fixtures:\*\*

\`\`\`bash 1: Manchester United 2: Real Madrid \... Choose a Team (or
type 0 to exit): 1

Last Match: Manchester United 3 vs 1 Chelsea Time: Saturday, 7 September
2024, 17:00

Upcoming Fixtures: 1 - Manchester United vs Liverpool on Sunday, 14
September 2024, 17:30 \`\`\`

\## Configuration

\### \`.env\` File

The \`.env\` file contains the API key for interacting with the API:

\`\`\` API_KEY=your_api_key_here \`\`\`

\### Color Customization

The \`utils.js\` file contains ANSI escape codes for coloring the
console output. You can customize the colors by modifying the \`colors\`
object in \`utils.js\`.
