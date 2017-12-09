import * as PropTypes from "prop-types"
import * as React from "react"

// CSS
import "./App.css"

// Utilities
import { Logger } from "../../tracking/error-logger"
import { EventTracker } from "../../tracking/event-tracker"

// Interfaces
import { AppState } from "../../db"
import { Character } from "../../models/Character"

// Components
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"
import { InitiativeTracker } from "../InitiativeTracker/index"

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
  componentDidCatch(e: Error) {
    this.props.logger.error(e)
  }
  getChildContext() {
    let { logger, tracker } = this.props
    return { logger, tracker }
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
          <InitiativeTracker characters={this.props.state.characters} />
        </div>
      </MuiThemeProvider>
    )
  }
}
