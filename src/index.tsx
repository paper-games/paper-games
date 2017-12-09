import * as React from "react"
import * as ReactDOM from "react-dom"
import App from "./App"
import registerServiceWorker from "./registerServiceWorker"
import "./index.css"
import { createLogger } from "./error-logger"

let logger = createLogger()

ReactDOM.render(<App logger={logger} />, document.getElementById("root") as HTMLElement)

registerServiceWorker()
