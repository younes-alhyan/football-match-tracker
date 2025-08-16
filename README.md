# ⚽ Football Match Tracker

**Stay updated with live scores, fixtures, and team schedules—all from your terminal!** 🖥️


## 🚀 Features

* 📅 **Today's Matches** – See all fixtures for the day across popular leagues (Premier League, La Liga, Serie A, etc.)
* 🔴 **Live Matches** – Track ongoing matches in real-time
* 🏟️ **Team Fixtures** – View past and upcoming matches for your favorite teams
* 🌈 **Colorful Console Output** – ANSI escape codes for improved readability
* 💻 **Interactive CLI** – Choose options and fetch data directly from the terminal


## 🛠️ Prerequisites

* **Node.js** – Ensure Node.js is installed
* **API Key** – Get one from [API-SPORTS.io](https://www.api-football.com/) and store it in a `.env` file


## 📦 Installation

```bash
git clone https://github.com/itachi-555/football-match-tracker.git
cd football-match-tracker
npm install
```

Create a `.env` file in the project root:

```env
API_KEY=your_api_key_here
```

Run the tool:

```bash
./matches.sh
```


## 🗂️ Directory Structure

```text
.
├── matches.js      # Fetch today's matches
├── live.js         # Fetch live matches
├── teams.js        # Past & upcoming team fixtures
├── utils.js        # Utility functions & console colors
├── matches.sh      # Bash script to run the tool
├── .env            # Environment variables
└── README.md       # Project documentation
```


## 🎮 Usage

### Display today's matches

```bash
./matches.sh
```

### Display live matches

```bash
./matches.sh -l
```

### Display team fixtures

```bash
./matches.sh -t
```

**Command-line Options:**

* `-l` → Fetch live matches
* `-t` → Choose a team and see past/upcoming fixtures


## 🖌️ Customization

* Modify `utils.js` to change **console colors** using ANSI escape codes


## ⚠️ Notes

* Ensure `.env` contains a valid API key
* Make sure Node.js is installed and up to date


## 📬 Feedback & Contributions

Contributions, issues, and feature requests are welcome! Open a PR or an issue on GitHub. 🚀
