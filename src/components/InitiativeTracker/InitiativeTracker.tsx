import * as React from "react"
import { Character } from "../../models/Character"
import { CharacterForm } from "./CharacterForm"
import { InitiativeOrder } from "./InitiativeOrder"
import { EventTracker } from "../../tracking/event-tracker"
import { saveState } from "../../db"
import { Logger } from "../../tracking/error-logger"

interface Props {
  tracker: EventTracker
  logger: Logger
  characters: Character[]
}

interface State {
  characters: Character[]
}

enum InitiativeTrackerEvents {
  ADD_CHARACTER = "@initiative-tracker/ADD_CHARACTER",
  REMOVE_CHARACTER = "@initiative-tracker/REMOVE_CHARACTER",
}

export class InitiativeTracker extends React.Component<Props, State> {
  state = {
    characters: [...this.props.characters],
  }
  saveState = () => saveState(this.state, this.props.logger)
  removeCharacter = (targetCharacter: Character) => {
    this.setState(
      ({ characters }) => ({
        characters: characters.filter(character => character.uuid !== targetCharacter.uuid),
      }),
      this.saveState
    )

    this.props.tracker.track(InitiativeTrackerEvents.REMOVE_CHARACTER, { character: targetCharacter })
  }
  addCharacter = (character: Character) => {
    this.setState(({ characters }) => ({ characters: [...characters, character] }), this.saveState)

    this.props.tracker.track(InitiativeTrackerEvents.ADD_CHARACTER, { character })
  }
  render() {
    return (
      <div>
        <CharacterForm submit={this.addCharacter} />
        <InitiativeOrder characters={this.state.characters} removeCharacter={this.removeCharacter} />
      </div>
    )
  }
}
