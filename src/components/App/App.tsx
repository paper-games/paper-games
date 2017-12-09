import * as PropTypes from "prop-types"
import * as React from "react"
import "./App.css"
import { Logger } from "../../tracking/error-logger"
import { EventTracker } from "../../tracking/event-tracker"
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"
import { InitiativeOrder, Character } from "../InitiativeOrder"

interface Props {
  logger: Logger
  tracker: EventTracker
}

const characters: Character[] = [
  { name: "Skeleton 1", initiative: 10 },
  { name: "Skeleton 2", initiative: 8 },
  { name: "Skeleton 3", initiative: 15 },
  { name: "Samjo Santo", initiative: 8 },
]

export class App extends React.Component<Props, {}> {
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
          <InitiativeOrder characters={characters} />
        </div>
      </MuiThemeProvider>
    )
  }
}
