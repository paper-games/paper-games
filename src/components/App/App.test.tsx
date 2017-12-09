import * as React from "react"
import * as ReactDOM from "react-dom"
import { App } from "./App"
import { Logger } from "../../tracking/error-logger"
import { EventTracker } from "../../tracking/event-tracker"

const logger: Logger = new Logger()
const tracker: EventTracker = new EventTracker()

it("renders without crashing", () => {
  const div = document.createElement("div")

  ReactDOM.render(<App logger={logger} tracker={tracker} state={{ characters: [] }} />, div)
})
