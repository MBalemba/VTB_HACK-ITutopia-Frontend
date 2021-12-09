import {makeAutoObservable, toJS} from "mobx";
import {addDepartment, AllDepartments, AllWorkers, currentAdminCheck, departmentsWorkersCards} from "../http/UserApi";

export default class AdminStore {

    constructor() {
        this._currentCheck = {
            account_number: ['****', '****', '****', '****', '****'],
            currency: "RUB",
            current_account: '0',
        }

        this._allTree = [
            {
                "amountOfCards": 0,
                "id": 0,
                "name": "string",
                "workers": [
                    {
                        "cards": [
                            {
                                "account": 0,
                                "card_number": "string",
                                "id": 0,
                                "payment_system": "string",
                                "status": "string",
                                "type": "string"
                            }
                        ],
                        "id": 0,
                        "name": "string",
                        "patronymic": "string",
                        "surname": "string"
                    }
                ]
            }
        ]

        this._allWorkers = [
            {
                "department_id": 0,
                "id": 0,
                "name": "string",
                "patronymic": "string",
                "surname": "string"
            }
        ]

        this._allDepartments = [
            {
                "account_id": 0,
                "id": 0,
                "name": "string"
            }
        ]

        makeAutoObservable(this)
    }


    getCurrentCheck() {
        return currentAdminCheck()
            .then(({data}) => {

                this._currentCheck = {
                    account_number: [data.account_number.slice(0, 4), data.account_number.slice(4, 8), data.account_number.slice(8, 12), data.account_number.slice(12, 16), data.account_number.slice(16, 20)],
                    currency: data.currency,
                    current_account: data.current_account,
                }
                return Promise.resolve()
            })
            .catch(({response}) => {

                return Promise.reject()
            })
    }

    get currentCheck() {
        return toJS(this._currentCheck)
    }


    getAllTree() {
        return departmentsWorkersCards()
            .then(({data}) => {
                debugger
                this._allTree = [
                    ...data
                ]
                return Promise.resolve()
            })
            .catch(({response}) => {

                return Promise.reject()
            })
    }


    get allTree() {
        debugger
        return toJS(this._allTree)
    }

    getAllWorkers() {
        return AllWorkers().then(({data}) => {
            debugger
            this._allWorkers = [
                ...data
            ]
            return Promise.resolve()
        })
            .catch(({response}) => {

                return Promise.reject()
            })
    }

    get allWorkers() {
        return this._allWorkers
    }

    getAllDepartments() {
        return AllDepartments().then(({data}) => {
            debugger
            this._allDepartments= [
                ...data
            ]
            return Promise.resolve()
        })
            .catch(({response}) => {

                return Promise.reject()
            })
    }

    get allDepartments() {
        return this._allDepartments
    }


    addDepartment(data) {
        return addDepartment(data)
            .then(({data}) => {
                debugger
                return Promise.resolve()
            })
            .catch(({response}) => {
                return Promise.reject()
            })
    }


}
