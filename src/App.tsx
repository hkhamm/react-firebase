import { observer } from "mobx-react"
import * as React from "react"
import "./App.css"

import { AppStore } from "./store"

interface Props {
    store: AppStore
}

@observer
export default class App extends React.Component<Props, {}> {

    public render() {
        return (
            <div>
                <label>Count {this.props.store.count}</label>
                <button id={"increment"} onClick={() => this.props.store.count++}>Increment</button>
            </div>
        )
    }

}
