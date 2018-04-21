import * as React from "react"
import * as ReactDOM from "react-dom"

import App from "./components/App/App"
import "./index.css"
import registerServiceWorker from "./registerServiceWorker"
import { appStore } from "./stores/AppStore"

ReactDOM.render(
  <App store={appStore} />,
  document.getElementById("root") as HTMLElement
)
registerServiceWorker()
