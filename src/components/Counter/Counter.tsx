import * as firebase from "firebase"
import { User } from "firebase"
import { inject, observer } from "mobx-react"
import * as React from "react"
import { withRouter } from "react-router"

import Button from "material-ui/Button"
import Icon from "material-ui/Icon"
import IconButton from "material-ui/IconButton"
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
                    <Button onClick={this.signOut}>Sign Out {displayName}</Button>
                </div>
                <div style={{
                    paddingTop: "2rem",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <div>
                        <IconButton children={<Icon>remove_circle</Icon>} onClick={this.decrement} />
                        <label>Count {this.store.count}</label>
                        <IconButton children={<Icon>add_circle</Icon>} onClick={this.increment} />
                    </div>
                </div>
            </div>
        )
    }

    private signOut() {
        firebase.auth().signOut().then(() => {
            this.props.history.push("/")
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
