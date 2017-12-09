import * as React from "react"
import { Table, TableHeader, TableRow, TableHeaderColumn, TableBody, TableRowColumn } from "material-ui"

export interface Character {
  name: string
  initiative: number
}

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
          {this.props.characters.sort(byInitiative).map(character => (
            <TableRow key={character.name} selectable={false}>
              <TableRowColumn> {character.initiative} </TableRowColumn>
              <TableRowColumn> {character.name} </TableRowColumn>
            </TableRow>
          ))}
        </TableBody>
      </Table>
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
