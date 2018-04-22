import * as React from "react"
import * as ReactDOM from "react-dom"
import { BrowserRouter } from "react-router-dom"

import "./index.css"

import App from "./components/App/App"
import registerServiceWorker from "./registerServiceWorker"
import { appStore } from "./stores/AppStore"

ReactDOM.render(
  <BrowserRouter>
      <App store={appStore} />
  </BrowserRouter>,
  document.getElementById("root") as HTMLElement
)
registerServiceWorker()
