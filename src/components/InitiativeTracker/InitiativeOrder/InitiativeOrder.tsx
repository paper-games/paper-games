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
            {this.props.characters
              .sort(byInitiative)
              .map((character, i) => (
                <CharacterRow key={character.uuid} character={character} remove={this.props.removeCharacter} />
              ))}
          </TableBody>
        </Table>
      </div>
    )
  }
}

class CharacterRow extends React.Component<{ character: Character; remove: (character: Character) => void }, {}> {
  render() {
    let { character, remove } = this.props
    return (
      <TableRow key={character.name}>
        <TableCell style={initColStyle}> {character.initiative} </TableCell>
        <TableCell style={nameColStyle}> {character.name} </TableCell>
        <TableCell style={actionColStyle}>
          <Button onClick={() => remove(character)}>Remove</Button>
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
