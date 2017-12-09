import * as React from "react"
import { Table, TableHeader, TableRow, TableHeaderColumn, TableBody, TableRowColumn, FlatButton } from "material-ui"
import { Character } from "../../models/Character"

interface Props {
  characters: Character[]
  removeCharacter(character: Character): void
}

interface State {
  //
}

export class InitiativeOrder extends React.Component<Props, State> {
  render() {
    return (
      <Table selectable={false}>
        <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
          <TableRow>
            <TableHeaderColumn>Init</TableHeaderColumn>
            <TableHeaderColumn>Name</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody displayRowCheckbox={false}>
          {this.props.characters
            .sort(byInitiative)
            .map((character, i) => (
              <CharacterRow key={character.uuid} character={character} remove={this.props.removeCharacter} />
            ))}
        </TableBody>
      </Table>
    )
  }
}

class CharacterRow extends React.Component<{ character: Character; remove: (character: Character) => void }, {}> {
  render() {
    let { character, remove } = this.props
    return (
      <TableRow key={character.name} selectable={false}>
        <TableRowColumn> {character.initiative} </TableRowColumn>
        <TableRowColumn> {character.name} </TableRowColumn>
        <TableRowColumn>
          <FlatButton onClick={() => remove(character)} secondary>
            Remove
          </FlatButton>{" "}
        </TableRowColumn>
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
