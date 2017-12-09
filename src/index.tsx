import * as React from "react"
import * as ReactDOM from "react-dom"
import { App } from "./components/App"
import registerServiceWorker from "./registerServiceWorker"
import "./index.css"
import { createLogger } from "./tracking/error-logger"
import { initializeEventTracking } from "./tracking/event-tracker"

let logger = createLogger()
let tracker = initializeEventTracking()

ReactDOM.render(<App logger={logger} tracker={tracker} />, document.getElementById("root") as HTMLElement)

registerServiceWorker()
