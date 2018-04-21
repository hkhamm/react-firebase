import * as React from "react"
import * as ReactDOM from "react-dom"

import { AppStore } from "../../stores/AppStore"
import App from "./App"

it("renders without crashing", () => {
    const div = document.createElement("div")
    const store = new AppStore()
    ReactDOM.render(<App store={store} />, div)
    ReactDOM.unmountComponentAtNode(div)
})
