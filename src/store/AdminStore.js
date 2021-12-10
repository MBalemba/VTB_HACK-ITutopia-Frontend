import {makeAutoObservable, toJS} from "mobx";
import {
    addCard,
    addDepartment,
    addWorker,
    AllDepartments,
    AllWorkers, currentAdminCheck,
    departmentsWorkersCards,
    expenseSchedule,
    fiveGeneralInformation,
    getAllTypeOfCards,
    topSpendingCategories,
    transactionHistory
} from "../http/UserApi";
import {createQuery} from "../utils/CreateQuery";

export default class AdminStore {

    constructor() {
        this._currentCheck = {
            account_number: ['****', '****', '****', '****', '****'],
            currency: "RUB",
            current_account: '0',
        }

        this._FiveGeneralInf = {
            "allocated_funds": 0,
            "amountOfCards": 0,
            "amountOfWorkers": 0,
            "monthlyExpenses": 0,
            "total_balance": 0
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

        this._allWorkers = []

        this._allDepartments = [
            {
                "account_id": 0,
                "id": 0,
                "name": ""
            }
        ]

        this._expenseSchedule = []
        this._topSpendingCategories = {
            maxSum: null,
            list: [],
        }
        this._transactionHistory = []

        this._typeOfCards = []


        //pagination

        this.currentPage = 0;
        this.buttonDisabled = false
        this.isfetchingAdditionalData = false

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


    getAllTree(str = '') {
        return departmentsWorkersCards(str)
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

            this._allDepartments = [
                ...data
            ]
            return Promise.resolve()
        })
            .catch(({response}) => {

                return Promise.reject()
            })
    }

    get allDepartments() {
        return toJS(this._allDepartments)
    }


    fiveGeneralInformation() {
        return fiveGeneralInformation().then(({data}) => {

            this._FiveGeneralInf = data
            return Promise.resolve()
        })
            .catch(({response}) => {

                return Promise.reject()
            })
    }


    get getFiveGeneralInformation(){
        return toJS(this._FiveGeneralInf)
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

    addWorker(data) {
        return addWorker(data)
            .then(({data}) => {

                return Promise.resolve()
            })
            .catch(({response}) => {
                return Promise.reject()
            })
    }

    addCard(data) {
        return addCard(data)
            .then(({data}) => {
                return Promise.resolve()
            })
            .catch(({response}) => {
                return Promise.reject()
            })
    }


    //transactions


    expenseSchedule(queryObj = {}) {

        let str = createQuery(queryObj)

        debugger

        return expenseSchedule(str).then(({data}) => {
            debugger
            this._expenseSchedule = data


            return Promise.resolve()
        })
            .catch(({response}) => {

                return Promise.reject()
            })
    }

    topSpendingCategories(queryObj = {}) {

        let str = createQuery(queryObj)

        return topSpendingCategories(str).then(({data}) => {
            debugger
            this._topSpendingCategories = data
            return Promise.resolve()
        })
            .catch(({response}) => {

                return Promise.reject()
            })
    }

    transactionHistory(queryObj = {}, clear = true) {

        if(clear){
            this.currentPage = 0
        }

        let str = createQuery(queryObj)

        if(str!==''){
            str= str + '&page=' + this.currentPage
        } else{
            str = '?page=' + this.currentPage
        }

        return transactionHistory(str).then(({data}) => {

            if(data[0]=== null && this.currentPage === 0 ){
                this._transactionHistory = []
                this.buttonDisabled = true
                return Promise.resolve()
            }

            this.buttonDisabled = false


            if (clear) {
                this.currentPage = 1
                this._transactionHistory = data
            } else {

                if(data[0]=== null){
                    this.buttonDisabled = true
                    return Promise.resolve()
                }
                    this._transactionHistory = [...this._transactionHistory, ...data]
                    this.currentPage = this.currentPage + 1


            }


            return Promise.resolve()
        })
            .catch(({response}) => {

                return Promise.reject()
            })
    }


    allTypeOfCards() {
        return getAllTypeOfCards().then(({data}) => {
            debugger
            this._typeOfCards = data
            return Promise.resolve()
        })
            .catch(({response}) => {

                return Promise.reject()
            })
    }

    get getTypeOfCards(){
        return this._typeOfCards.map(el=>({value: el, label: el}))
    }

    get getButtonDisabled(){
        return this.buttonDisabled
    }


    get getExpenseSchedule() {
        return toJS(this._expenseSchedule)
    }

    get getTopSpendingCategories() {
        return toJS(this._topSpendingCategories)
    }

    get getTransactionHistory() {
        return toJS(this._transactionHistory)
    }


    get getCurrentPage() {
        return this.currentPage
    }

}
