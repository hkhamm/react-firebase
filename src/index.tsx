import * as React from "react"
import * as ReactDOM from "react-dom"

import App from "./App"
import "./index.css"
import registerServiceWorker from "./registerServiceWorker"
import { store } from "./store"

ReactDOM.render(
  <App store={store} />,
  document.getElementById("root") as HTMLElement
)
registerServiceWorker()
