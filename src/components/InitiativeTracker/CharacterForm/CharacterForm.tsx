import * as React from "react"
import { Character } from "../../../models/Character"
import { Input, Button } from "material-ui"

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
  }
  setName = (e: any) => this.setState(() => ({ name: e.target.value }))
  setInitiative = (e: any) => this.setState(() => ({ initiative: Number(e.target.value) }))

  render() {
    return (
      <div
        style={{
          width: "90%",
          margin: "20px 5% 30px 5%",
          paddingBottom: "1.5rem",
          textAlign: "center",
          display: "inline-block",
        }}
      >
        <form onSubmit={this.submit} style={{ marginLeft: "auto", marginRight: "auto" }}>
          <h2>Add Character</h2>
          <Input name="name" value={this.state.name} onChange={this.setName} />
          <Input name="initiative" type="number" value={String(this.state.initiative)} onChange={this.setInitiative} />
          <Button onClick={this.submit} style={{ marginLeft: "20px" }}>
            Add
          </Button>
        </form>
      </div>
    )
  }
}
