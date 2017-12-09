import { Character } from "./models/Character"
import { Logger } from "./tracking/error-logger"

export interface AppState {
  characters: Character[]
}

const DEFAULT_APP_DATA: AppState = {
  characters: [
    { name: "Skeleton 1", initiative: 10 },
    { name: "Skeleton 2", initiative: 8 },
    { name: "Skeleton 3", initiative: 15 },
    { name: "Samjo Santo", initiative: 8 },
  ],
}

export function loadState(logger: Logger): AppState {
  let itemJSON = localStorage.getItem("paper-games")

  try {
    if (itemJSON) {
      return JSON.parse(itemJSON)
    }
  } catch (e) {
    logger.error(e, { info: "Failed to load state from localStorage." })
  }

  return DEFAULT_APP_DATA
}
