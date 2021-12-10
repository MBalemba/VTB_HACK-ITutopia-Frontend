import {makeAutoObservable, toJS} from "mobx";
import {
    addCard,
    addDepartment,
    addWorker,
    AllDepartments,
    AllWorkers,
    currentAdminCheck,
    departmentsWorkersCards, expenseSchedule, topSpendingCategories, transactionHistory
} from "../http/UserApi";

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
        ]

        this._allDepartments = [
            {
                "account_id": 0,
                "id": 0,
                "name": ""
            }
        ]

        this._expenseSchedule = null
        this._topSpendingCategories = {
            maxSum: null,
            list: [],
        }
        this._transactionHistory = []
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
        return toJS(this._allTree)
    }

    getAllWorkers() {
        return AllWorkers().then(({data}) => {

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

                return Promise.resolve()
            })
            .catch(({response}) => {
                return Promise.reject()
            })
    }

    addWorker(data){
        return addWorker(data)
            .then(({data}) => {

                return Promise.resolve()
            })
            .catch(({response}) => {
                return Promise.reject()
            })
    }
    addCard(data){
        return addCard(data)
            .then(({data}) => {
                return Promise.resolve()
            })
            .catch(({response}) => {
                return Promise.reject()
            })
    }




    //transactions


    expenseSchedule(queryObj ={}) {

        let j = 0;
        let str;


        for(let i in queryObj){
            j++
        }

        if(j===0){
            str=''
        }



        return expenseSchedule(str).then(({data}) => {

             this._expenseSchedule = data


            return Promise.resolve()
        })
            .catch(({response}) => {

                return Promise.reject()
            })
    }

    topSpendingCategories(queryObj={}) {

        let j = 0;
        let str;


        for(let i in queryObj){
            j++
        }

        if(j===0){
            str=''
        }

        return topSpendingCategories(queryObj).then(({data}) => {
            this._topSpendingCategories = data
            return Promise.resolve()
        })
            .catch(({response}) => {

                return Promise.reject()
            })
    }

    transactionHistory(queryObj = {}) {

        let j = 0;
        let str;


        for(let i in queryObj){
            j++
        }

        if(j===0){
            str=''
        }



        return transactionHistory(queryObj).then(({data}) => {

            this._transactionHistory = [...this._transactionHistory, ...data]
            return Promise.resolve()
        })
            .catch(({response}) => {

                return Promise.reject()
            })
    }


    get getExpenseSchedule(){
        return this._expenseSchedule
    }

    get getTopSpendingCategories(){
        return toJS(this._topSpendingCategories)
    }

    get getTransactionHistory(){
        return toJS(this._transactionHistory)
    }

}
