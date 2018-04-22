import * as firebase from "firebase"
import { User } from "firebase"
import { observer } from "mobx-react"
import * as React from "react"

import { ComponentProps } from "../../types/types"

@observer
export default class Counter extends React.Component<ComponentProps, {}> {

    constructor(props: ComponentProps) {
        super(props)
        this.increment = this.increment.bind(this)
        this.decrement = this.decrement.bind(this)
    }

    public render() {
        const currentUser: User | null = firebase.auth().currentUser
        const displayName: string = currentUser && currentUser.displayName ? currentUser.displayName : ""
        return (
            <div>
                <div style={{
                    float: "right",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <button onClick={() => firebase.auth().signOut()}>
                        Sign Out {displayName}
                    </button>
                </div>
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
                        <div><button onClick={this.increment}>Increment</button></div>
                        <div><button onClick={this.decrement}>Decrement</button></div>
                    </div>
                </div>
            </div>
        )
    }

    private increment() {
        this.props.store.count++
    }

    private decrement() {
        if (this.props.store.count > 0) {
            this.props.store.count--
        }
    }

}
