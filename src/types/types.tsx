import { RouteComponentProps } from "react-router"

import { AppStore } from "../stores/AppStore"

export interface ComponentProps extends RouteComponentProps<{}> {
    store?: AppStore
}
