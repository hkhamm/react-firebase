import * as firebase from "firebase"
import "firebase/firestore"
import { autorun, observable } from "mobx"

import { apiKey } from "../config"

type Firestore = firebase.firestore.Firestore
type DocumentSnapshot = firebase.firestore.DocumentSnapshot
type DocumentReference = firebase.firestore.DocumentReference

export class AppStore {

    @observable public count: number = 0

    constructor() {

        firebase.initializeApp({
            apiKey,
            authDomain: "hello-react-f7f06.firebaseapp.com",
            projectId: "hello-react-f7f06"
        })

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
