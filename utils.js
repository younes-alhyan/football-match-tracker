//require API KEY from .env file
require("dotenv").config();
const apiKey = process.env.API_KEY;

//Base url
const baseUrl = "https://v3.football.api-sports.io";

// Function to format time to HH:MM in Moroccan timezone
const formatTime = (isoString) => {
  return new Intl.DateTimeFormat("en-GB", {
    weekday: "long", // e.g., "Monday"
    day: "2-digit", // e.g., "05"
    month: "long", // e.g., "August"
    year: "numeric", // e.g., "2024"
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "Africa/Casablanca",
  }).format(new Date(isoString));
};

// ANSI escape codes for coloring
const colors = {
  reset: "\x1b[0m",
  bright: "\x1b[1m",
  dim: "\x1b[2m",
  underscore: "\x1b[4m",
  blink: "\x1b[5m",
  reverse: "\x1b[7m",
  hidden: "\x1b[8m",

  fg: {
    black: "\x1b[30m",
    red: "\x1b[31m",
    green: "\x1b[32m",
    yellow: "\x1b[33m",
    blue: "\x1b[34m",
    magenta: "\x1b[35m",
    cyan: "\x1b[36m",
    white: "\x1b[37m",
    crimson: "\x1b[38m", // Scarlet
  },
  bg: {
    black: "\x1b[40m",
    red: "\x1b[41m",
    green: "\x1b[42m",
    yellow: "\x1b[43m",
    blue: "\x1b[44m",
    magenta: "\x1b[45m",
    cyan: "\x1b[46m",
    white: "\x1b[47m",
    crimson: "\x1b[48m",
  },
};

//Season
const season = 2024;

// Mapping of league IDs to league names
const leagues = [
  { id: 39, name: "Premier League" },
  { id: 140, name: "La Liga" },
  { id: 135, name: "Serie A" },
  { id: 78, name: "Bundesliga" },
  { id: 61, name: "Ligue 1" },
  { id: 2, name: "UEFA Champions League" },
  { id: 3, name: "UEFA Europa League" },
];

const teams = [
  { name: "Manchester United", id: 33 },
  { name: "Liverpool", id: 40 },
  { name: "Arsenal", id: 42 },
  { name: "Chelsea", id: 49 },
  { name: "Manchester City", id: 50 },
  { name: "Borussia Dortmund", id: 165 },
  { name: "Atletico Madrid", id: 530 },
  { name: "Real Madrid", id: 541 },
  { name: "AC Milan", id: 489 },
  { name: "Juventus", id: 496 },
  { name: "Barcelona", id: 529 },
];

module.exports = {
  apiKey,
  baseUrl,
  formatTime,
  colors,
  season,
  leagues,
  teams,
};
