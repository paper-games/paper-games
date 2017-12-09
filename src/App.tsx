import * as PropTypes from "prop-types"
import * as React from "react"
import "./App.css"
import { Logger } from "./tracking/error-logger"
import { EventTracker } from "./tracking/event-tracker"

const logo = require("./logo.svg")

interface Props {
  logger: Logger
  tracker: EventTracker
}

class App extends React.Component<Props, {}> {
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
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Paper Games</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
      </div>
    )
  }
}

export default App
