import * as firebase from "firebase"
import { Unsubscribe, User } from "firebase"
import { observer } from "mobx-react"
import * as React from "react"
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"
import { Route, Switch } from "react-router"

import { ComponentProps } from "../../types/types"
import Counter from "../Counter/Counter"

@observer
export default class App extends React.Component<ComponentProps, {}> {

    private unregisterAuthObserver: Unsubscribe

    constructor(props: ComponentProps) {
        super(props)
    }

    public render() {
        const uiConfig = {
            signInFlow: "popup",
            signInSuccessUrl: "/counter",
            signInOptions: [
                firebase.auth.GoogleAuthProvider.PROVIDER_ID
            ]
        }
        return (
            <React.Fragment>
            {!this.props.store.isSignedIn ? (
                <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()}/>
                ) : (
                <Switch>
                    <Route path="/" component={() => {
                        return <Counter store={this.props.store} />
                    }} />
                </Switch>
            )}
            </React.Fragment>

        )
    }

    public componentDidMount() {
        this.unregisterAuthObserver = firebase.auth().onAuthStateChanged(
            (user: User) => this.props.store.isSignedIn = !!user
        )
    }

    public componentWillUnmount() {
        this.unregisterAuthObserver()
    }

}
