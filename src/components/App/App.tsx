import { observer } from "mobx-react"
import * as React from "react"
import "./App.css"

import { AppStore } from "../../stores/AppStore"

interface Props {
    store: AppStore
}

@observer
export default class App extends React.Component<Props, {}> {

    private store: AppStore

    constructor(props: Props) {
        super(props)
        this.store = props.store
        this.increment = this.increment.bind(this)
        this.decrement = this.decrement.bind(this)
    }

    public render() {
        return (
            <div style={{
                width: "50%",
                margin: "auto",
                paddingTop: "2rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}>
                <div>
                    <label>Count {this.store.count}</label>
                    <div><button onClick={this.increment}>Increment</button></div>
                    <div><button onClick={this.decrement}>Decrement</button></div>
                </div>
            </div>
        )
    }

    private increment() {
        this.store.count++
    }

    private decrement() {
        if (this.store.count > 0) {
            this.store.count--
        }
    }

}
