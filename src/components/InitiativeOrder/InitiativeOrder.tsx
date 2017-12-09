import * as React from "react"
import { Table, TableHeader, TableRow, TableHeaderColumn, TableBody, TableRowColumn } from "material-ui"
import { Character } from "../../models/Character"

interface Props {
  characters: Character[]
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
            .map((character, i) => <CharacterRow key={i} character={character} />)}
        </TableBody>
      </Table>
    )
  }
}

class CharacterRow extends React.Component<{ character: Character }, {}> {
  render() {
    let { character } = this.props
    return (
      <TableRow key={character.name} selectable={false}>
        <TableRowColumn> {character.initiative} </TableRowColumn>
        <TableRowColumn> {character.name} </TableRowColumn>
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
