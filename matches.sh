#!/bin/bash

# Path to the directory
path='/home/user/Documents/vscode/tools/matches/'

# Default script
script="matches.js"

# Check for command-line arguments
while getopts ":lt" opt; do
  case ${opt} in
    l )
      script="live.js"
      ;;
    t )
      script="teams.js"
      ;;
    \? )
      echo "Invalid option: -$OPTARG" 1>&2
      exit 1
      ;;
    : )
      echo "Invalid option: -$OPTARG requires an argument" 1>&2
      exit 1
      ;;
  esac
done
shift $((OPTIND -1))

# Change to the directory
cd "$path" || { echo "Failed to change directory to $path"; exit 1; }

# Execute the appropriate Node.js script
node "$script"
