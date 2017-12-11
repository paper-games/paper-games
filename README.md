# Paper Games
[![CircleCI](https://circleci.com/gh/paper-games/paper-games.svg?style=svg)](https://circleci.com/gh/paper-games/paper-games)
[![Coverage Status](https://coveralls.io/repos/github/paper-games/paper-games/badge.svg?branch=master)](https://coveralls.io/github/paper-games/paper-games?branch=master)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
<a href="https://zenhub.com"><img src="https://raw.githubusercontent.com/ZenHubIO/support/master/zenhub-badge.png"></a>

[Paper Games](http://paper-games.github.io/paper-games) an free and open source webapp built for Game Masters.

The goal of Paper Games is to provide a set of tools to help Game Masters run in-person sessions of Pen and Paper RPGs like [Pathfinder](http://paizo.com/pathfinderRPG) and [Dungeons and Dragons](http://dnd.wizards.com/). 

## Getting Started

Paper Games is a [React](https://reactjs.org/) application written in [Typescript](https://www.typescriptlang.org/), and bootstrapped with [`create-react-app-typescript`](https://github.com/wmonk/create-react-app-typescript). 

```bash
# Install Yarn
npm instal -g yarn

# Clone paper-games
git clone git@github.com:paper-games/paper-games.git

# Install Dependencies
cd paper-games
yarn install

# Run the Tests
yarn test

# Start the App
yarn start
```

## Roadmap

### Version 1.0: Basic Initiative Tracker
  - [X] A serverless initiative tracker
  - [X] ---Local Only---
    - [X] All user data stored in `localStorage`
    - [X] No authentication
  - [X] Single Encounter
  - [X] Add/Remove Characters from the Initiative Order
  - [X] Character
    - [X] Name
    - [X] Initiative
  - [X] Initiatve Order is automatically sorted
  
### Future Features
* Initiative
  * Turns tracking
    * Current Character
  * Round Tracking
* Characters
  * Health Tracking
    * Set Max HP when adding a character
    * Set current HP from initiative list
    * Grey out unconscious characters
    * Skip unconscious character's turns
* Roll Initiative (Optional)
  * Add Character's initiative bonus
  * Set automatically with d20 + bonus 
* Multi-add Characters
  * Provide count when adding Characters
* Roll Hit Points
  * Define any number of hit dice `x dS + mod` e.g. `1 d8 + 3`
  * Set max hp for each character automatically

### Tentative Ideas
* Character Config
  * Save a Character config for re-use
  * Add `n` copies of Character from a config
* Monster Manual 
  * Have a set of pre-defined monster's included