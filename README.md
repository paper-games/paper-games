# Paper Games
[![CircleCI](https://circleci.com/gh/paper-games/paper-games.svg?style=svg)](https://circleci.com/gh/paper-games/paper-games)
[![Coverage Status](https://coveralls.io/repos/github/paper-games/paper-games/badge.svg?branch=master)](https://coveralls.io/github/paper-games/paper-games?branch=master)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
<a href="https://zenhub.com"><img src="https://raw.githubusercontent.com/ZenHubIO/support/master/zenhub-badge.png"></a>

[Paper Games](http://paper-games.github.io/paper-games) an free and open source webapp built for Game Masters.

## Roadmap

### Version 1.0: Basic Initiative Tracker
  * A serverless initiative tracker
  * Local Only
    * All user data stored in `localStorage`
    * No authentication
  * Single Encounter
  * Add/Remove Characters from the Initiative Order
  * Character
    * Name
    * Initiative
  * Initiatve Order is automatically sorted
  
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