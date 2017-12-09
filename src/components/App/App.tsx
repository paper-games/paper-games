import * as PropTypes from "prop-types"
import * as React from "react"
import "./App.css"
import { Logger } from "../../tracking/error-logger"
import { EventTracker } from "../../tracking/event-tracker"
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"
import { InitiativeOrder } from "../InitiativeOrder"
import { Character } from "../../models/Character"
import { AppState } from "../../db"

interface Props {
  logger: Logger
  tracker: EventTracker
  state: AppState
}

interface State {
  characters: Character[]
}

export class App extends React.Component<Props, State> {
  static childContextTypes = {
    tracker: PropTypes.any,
    logger: PropTypes.any,
  }
  state = this.props.state
  componentDidCatch(e: Error) {
    this.props.logger.error(e)
  }
  getChildContext() {
    let { logger, tracker } = this.props
    return { logger, tracker }
  }
  removeCharacter = (targetCharacter: Character) => {
    this.setState(({ characters }) => ({
      characters: characters.filter(character => character.uuid !== targetCharacter.uuid),
    }))
  }
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <div className="App-header">
            <h1>Paper Games</h1>
            <h2>Initiative Order</h2>
          </div>
          <p className="App-intro" />
          <InitiativeOrder characters={this.state.characters} removeCharacter={this.removeCharacter} />
        </div>
      </MuiThemeProvider>
    )
  }
}
