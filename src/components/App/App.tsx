import * as firebase from "firebase"
import { Unsubscribe, User } from "firebase"
import { inject, observer } from "mobx-react"
import * as React from "react"
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"
import { Route, Switch, withRouter } from "react-router"

import { AppStore } from "../../stores/AppStore"
import { ComponentProps } from "../../types/types"
import Counter from "../Counter/Counter"

@inject((props: ComponentProps) => ({...props}))
@observer
class App extends React.Component<ComponentProps, {}> {

    private unregisterAuthObserver: Unsubscribe
    private store: AppStore

    constructor(props: ComponentProps) {
        super(props)
        this.store = this.props.store!
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
            {!this.store.isSignedIn ? (
                <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()}/>
                ) : (
                <Switch>
                    <Route path="/" component={Counter} />
                </Switch>
            )}
            </React.Fragment>

        )
    }

    public componentDidMount() {
        this.unregisterAuthObserver = firebase.auth().onAuthStateChanged(
            (user: User) => this.store.isSignedIn = !!user
        )
    }

    public componentWillUnmount() {
        this.unregisterAuthObserver()
    }

}

export default withRouter(App)
