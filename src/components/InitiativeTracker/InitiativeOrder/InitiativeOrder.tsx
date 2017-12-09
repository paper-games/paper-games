import * as React from "react"
import { Table, TableHeader, TableRow, TableHeaderColumn, TableBody, TableRowColumn, FlatButton } from "material-ui"
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
        <Table selectable={false}>
          <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
            <TableRow>
              <TableHeaderColumn style={initColStyle}>Init</TableHeaderColumn>
              <TableHeaderColumn style={nameColStyle}>Name</TableHeaderColumn>
              <TableHeaderColumn style={actionColStyle}>Actions</TableHeaderColumn>
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
      </div>
    )
  }
}

class CharacterRow extends React.Component<{ character: Character; remove: (character: Character) => void }, {}> {
  render() {
    let { character, remove } = this.props
    return (
      <TableRow key={character.name} selectable={false}>
        <TableRowColumn style={initColStyle}> {character.initiative} </TableRowColumn>
        <TableRowColumn style={nameColStyle}> {character.name} </TableRowColumn>
        <TableRowColumn style={actionColStyle}>
          <FlatButton onClick={() => remove(character)} secondary={true}>
            Remove
          </FlatButton>
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
