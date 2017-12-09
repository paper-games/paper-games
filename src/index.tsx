import * as React from "react"
import * as ReactDOM from "react-dom"
import { App } from "./components/App"
import registerServiceWorker from "./registerServiceWorker"
import "./index.css"
import { createLogger } from "./tracking/error-logger"
import { initializeEventTracking } from "./tracking/event-tracker"
import { loadState } from "./db"

const logger = createLogger()
const tracker = initializeEventTracking()
const initialState = loadState(logger)

const targetEl: Element | null = document.getElementById("root") as HTMLElement

ReactDOM.render(<App logger={logger} tracker={tracker} state={initialState} />, targetEl)

registerServiceWorker()
