import { observable } from "mobx"

export class AppStore {
    @observable public count: number = 0
}

export const appStore = new AppStore()