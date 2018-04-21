import * as firebase from "firebase"
import "firebase/firestore"
import { autorun, observable } from "mobx"

import { config } from "../config"

type Firestore = firebase.firestore.Firestore
type DocumentSnapshot = firebase.firestore.DocumentSnapshot
type DocumentReference = firebase.firestore.DocumentReference

export class AppStore {

    @observable public count: number = 0

    constructor() {
        firebase.initializeApp(config)
        const firestore: Firestore = firebase.firestore()
        const database: DocumentReference = firestore.collection("default").doc("default")
        database.get().then((snapshot: DocumentSnapshot) => {
            this.count = snapshot.get("count")
            autorun(() => {
                database.set({
                    count: this.count
                })
            })
        })
    }

}

export const appStore = new AppStore()
