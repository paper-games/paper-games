import * as React from "react"
import { Table, TableHead, TableRow, TableBody, TableCell, Button } from "material-ui"
import { Character } from "../../../models/Character"

interface Props {
  characters: Character[]
  removeCharacter(character: Character): void
}

interface State {
  //
}

const initColStyle = { width: "10%" }
const nameColStyle = { width: "60%" }
const actionColStyle = { width: "30%" }

export class InitiativeOrder extends React.Component<Props, State> {
  render() {
    const { characters } = this.props
    return (
      <div>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell style={initColStyle}>Init</TableCell>
              <TableCell style={nameColStyle}>Name</TableCell>
              <TableCell style={actionColStyle}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {characters.length ? (
              characters
                .sort(byInitiative)
                .map((character, i) => (
                  <CharacterRow key={character.uuid} character={character} remove={this.props.removeCharacter} />
                ))
            ) : (
              <Placeholder />
            )}
          </TableBody>
        </Table>
      </div>
    )
  }
}

const Placeholder = () => (
  <TableRow>
    <TableCell colSpan={3} style={{ textAlign: "center" }}>
      <em>Use the form above to add a character to the list.</em>
    </TableCell>
  </TableRow>
)

class CharacterRow extends React.Component<{ character: Character; remove: (character: Character) => void }, {}> {
  render() {
    let { character, remove } = this.props
    return (
      <TableRow key={character.name}>
        <TableCell style={initColStyle}> {character.initiative} </TableCell>
        <TableCell style={nameColStyle}>
          <h3>{character.name}</h3>
        </TableCell>
        <TableCell style={actionColStyle}>
          <Button color="accent" onClick={() => remove(character)}>
            Remove
          </Button>
        </TableCell>
      </TableRow>
    )
  }
}

function byInitiative(a: Character, b: Character) {
  if (a.initiative < b.initiative) {
    return 1
  }
  if (a.initiative > b.initiative) {
    return -1
  }
  return 0
}
