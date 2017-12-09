import * as React from "react"
import "./App.css"
import { Logger } from "./error-logger"

const logo = require("./logo.svg")

interface Props {
  logger: Logger
}

class App extends React.Component<Props, {}> {
  componentDidCatch(e: Error) {
    this.props.logger.error(e)
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
