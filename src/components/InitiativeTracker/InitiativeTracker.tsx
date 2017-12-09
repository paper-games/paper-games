import * as React from "react"
import { Character } from "../../models/Character"
import { CharacterForm } from "./CharacterForm"
import { InitiativeOrder } from "./InitiativeOrder"

interface Props {
  characters: Character[]
}

interface State {
  characters: Character[]
}

export class InitiativeTracker extends React.Component<Props, State> {
  state = {
    characters: [...this.props.characters],
  }
  removeCharacter = (targetCharacter: Character) => {
    this.setState(({ characters }) => ({
      characters: characters.filter(character => character.uuid !== targetCharacter.uuid),
    }))
  }
  addCharacter = (character: Character) => {
    this.setState(({ characters }) => ({ characters: [...characters, character] }))
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
