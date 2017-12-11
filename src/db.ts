import { Character } from "./models/Character"
import { Logger } from "./tracking/error-logger"

export interface AppState {
  characters: Character[]
}

const LOCAL_STORAGE_KEY: string = "paper-games"

const DEFAULT_APP_DATA: AppState = {
  characters: [],
}

export function loadState(logger: Logger): AppState {
  let itemJSON = localStorage.getItem(LOCAL_STORAGE_KEY)

  try {
    if (itemJSON) {
      return JSON.parse(itemJSON)
    }
  } catch (e) {
    logger.error(e, { info: "Failed to load state from localStorage." })
  }

  return DEFAULT_APP_DATA
}

export function saveState(state: AppState, logger: Logger): void {
  let itemJSON = JSON.stringify(state)

  localStorage.setItem(LOCAL_STORAGE_KEY, itemJSON)
}
