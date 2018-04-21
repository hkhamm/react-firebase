import { observer } from "mobx-react"
import * as React from "react"
import "./App.css"

import { AppStore } from "./store"

interface Props {
    store: AppStore
}

@observer
export default class App extends React.Component<Props, {}> {

    constructor(props: Props) {
        super(props)
        this.onIncrement = this.onIncrement.bind(this)
        this.onDecrement = this.onDecrement.bind(this)
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
                    <label>Count {this.props.store.count}</label>
                    <div><button onClick={this.onIncrement}>Increment</button></div>
                    <div><button onClick={this.onDecrement}>Decrement</button></div>
                </div>
            </div>
        )
    }

    private onIncrement() {
        this.props.store.count++
    }

    private onDecrement() {
        if (this.props.store.count > 0) {
            this.props.store.count--
        }
    }

}
