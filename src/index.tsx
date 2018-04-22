import { Provider } from "mobx-react"
import * as React from "react"
import * as ReactDOM from "react-dom"
import { BrowserRouter } from "react-router-dom"

import "./index.css"

import App from "./components/App/App"
import registerServiceWorker from "./registerServiceWorker"
import { appStore } from "./stores/AppStore"

ReactDOM.render(
    <Provider store={appStore}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById("root") as HTMLElement
)
registerServiceWorker()
