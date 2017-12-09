import * as React from "react"
import { Table, TableHeader, TableRow, TableHeaderColumn, TableBody, TableRowColumn } from "material-ui"

export interface Character {
  name: string
  initiative: number
}

interface Props {
  characters: Character[]
}

export class InitiativeOrder extends React.Component<Props, {}> {
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
          {this.props.characters.map(character => (
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
