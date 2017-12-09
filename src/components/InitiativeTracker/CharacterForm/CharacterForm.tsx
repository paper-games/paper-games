import * as React from "react"
import { Character } from "../../../models/Character"
import { TextField, RaisedButton } from "material-ui"

interface Props {
  submit(character: Character): void
}
interface State {
  name: string
  initiative: number
}

export class CharacterForm extends React.Component<Props, State> {
  state = {
    name: "",
    initiative: 10,
  }
  submit = (e: any) => {
    e.preventDefault()
    this.props.submit(new Character(this.state))
    this.setState(() => ({ name: "", initiative: 10 }))
  }
  setName = (_e: any, name: string) => this.setState(() => ({ name }))
  setInitiative = (_e: any, initiative: string) => this.setState(() => ({ initiative: Number(initiative) }))

  render() {
    return (
      <form onSubmit={this.submit}>
        <TextField floatingLabelText="Name" name="name" value={this.state.name} onChange={this.setName} />
        <TextField
          floatingLabelText="Initiative"
          name="initiative"
          type="number"
          value={String(this.state.initiative)}
          onChange={this.setInitiative}
        />
        <RaisedButton onClick={this.submit} style={{ marginLeft: "20px" }}>
          Add
        </RaisedButton>
      </form>
    )
  }
}
