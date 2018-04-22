import * as firebase from "firebase"
import { User } from "firebase"
import { inject, observer } from "mobx-react"
import * as React from "react"
import { withRouter } from "react-router"

import { AppStore } from "../../stores/AppStore"
import { ComponentProps } from "../../types/types"

@inject((props: ComponentProps) => ({...props}))
@observer
class Counter extends React.Component<ComponentProps, {}> {

    private store: AppStore

    constructor(props: ComponentProps) {
        super(props)
        this.store = this.props.store!
        this.increment = this.increment.bind(this)
        this.decrement = this.decrement.bind(this)
        this.signOut = this.signOut.bind(this)
    }

    public render() {
        const currentUser: User | null = firebase.auth().currentUser
        const displayName: string = currentUser && currentUser.displayName ? currentUser.displayName : ""
        return (
            <div>
                <div style={{float: "right"}}>
                    <button onClick={this.signOut}>
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
                        <label>Count {this.store.count}</label>
                        <div><button onClick={this.increment}>Increment</button></div>
                        <div><button onClick={this.decrement}>Decrement</button></div>
                    </div>
                </div>
            </div>
        )
    }

    private signOut() {
        firebase.auth().signOut().then(() => {
            this.props.history!.push("/")
        })
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

export default withRouter(Counter)
