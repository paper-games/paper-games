import * as React from "react"
import { Character } from "../../../models/Character"
import { Button, TextField } from "material-ui"

interface Props {
  submit(character: Character): void
}
interface State {
  name: string
  initiative: number
}

export class CharacterForm extends React.Component<Props, State> {
  nameInput: any
  state = {
    name: "",
    initiative: 10,
  }
  submit = (e: any) => {
    e.preventDefault()
    this.props.submit(new Character(this.state))
    this.setState({ name: "", initiative: 0 }, () => {
      this.nameInput.focus()
    })
  }
  setName = (e: any) => {
    let { value } = e.target
    this.setState(() => ({ name: value }))
  }
  setInitiative = (e: any) => {
    let { value } = e.target
    this.setState(() => ({ initiative: Number(value) }))
  }

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
          <TextField
            inputRef={ref => (this.nameInput = ref)}
            fullWidth={true}
            margin="normal"
            label="Name"
            name="name"
            value={this.state.name}
            onChange={this.setName}
          />
          <TextField
            margin="normal"
            label="Initiative"
            name="initiative"
            type="number"
            fullWidth={true}
            value={String(this.state.initiative)}
            onChange={this.setInitiative}
          />
          <Button onClick={this.submit} style={{ marginLeft: "20px" }}>
            Add
          </Button>
        </form>
      </div>
    )
  }
}
