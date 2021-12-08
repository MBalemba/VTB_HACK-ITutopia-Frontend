import {makeAutoObservable, toJS} from "mobx";
import {currentAdminCheck} from "../http/UserApi";

export default class AdminStore {

    constructor() {
        this._currentCheck = {
            account_number: ['****', '****', '****', '****'],
            currency: "RUB",
            current_account: '0',
        }
        makeAutoObservable(this)
    }


    getCurrentCheck() {
        return currentAdminCheck()
            .then(({data}) => {
                debugger
                this._currentCheck = {
                    account_number: [data.account_number.slice(0, 4), data.account_number.slice(4, 8), data.account_number.slice(8, 12), data.account_number.slice(12, 16), data.account_number.slice(16, 20)],
                    currency: data.currency,
                    current_account: data.current_account,
                }
                return Promise.resolve()
            })
            .catch(({response}) => {
                debugger
                return Promise.reject()
            })
    }

    get currentCheck() {
        return toJS(this._currentCheck)
    }


}
