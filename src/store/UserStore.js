import {makeAutoObservable, toJS} from "mobx";
import {
    expenseScheduleByWorker, getAllTypeOfCards, getAllTypeOfCardsByWorker,
    getInfoOfCardsByWorkerId,
    getWorkerInfo, lockUnlockCard, perpetualCardBlocking,
    setLimitOnCard, topSpendingCategoriesByWorker, topSpendingCategoriesUser, transactionHistoryByWorkerId,
    transactionHistoryUser,
    transferToCard
} from "../http/UserApi";
import {createQuery} from "../utils/CreateQuery";


export default class UserStore {

    constructor() {
        this._workerInfo = {
            "account": 0,
            "departmentType": "string",
            "name": "string",
            "patronymic": "string",
            "surname": "string"
        }
        this._infoOfCards = [
            {
                "account": 5000,
                "autoUpdate": true,
                "card_number": '****************',
                "currency": "RUB",
                "id": 1,
                "limit": 0,
                "payment_system": "VISA",
                "purpose_of_creation": "Поезда в метро",
                "remains": 0,
                "status": "ACTIVE",
                "term": 0,
                "type": "Транспорт",
                "worker_id": 1
            },
        ]


        this._isFecthing = {
            isFetchCardsInfo: true,
        }


        this._expenseSchedule = []
        this._topSpendingCategories = {
            maxSum: null,
            list: [],
        }
        this._transactionHistory = []

        this._typeOfCards = []
        this._topSpendingCategories = {
            maxSum: null,
            list: [],
        }
        this._transactionHistory = []

        makeAutoObservable(this)
    }

    getWorkerInfo(id) {
        return getWorkerInfo(id).then(({data}) => {
            this._workerInfo = {...data}


            return Promise.resolve()
        }).catch(() => {
            return Promise.reject()
        })
    }

    get workerInfo() {
        return toJS(this._workerInfo)
    }


    getInfoOfCards(id) {

        return getInfoOfCardsByWorkerId(id).then(({data}) => {

            this._infoOfCards = [...data]
            return Promise.resolve()
        }).catch(() => {
            return Promise.reject()
        })
    }

    get infoOfCards() {
        return toJS(this._infoOfCards)
    }

    transferToCard(data) {
        return transferToCard(data).then(() => {


            return Promise.resolve()
        }).catch(() => {


            return Promise.resolve()
        })
    }

    setLimitOnCard(data) {
        return setLimitOnCard(data).then(() => {


            return Promise.resolve()
        }).catch(() => {


            return Promise.resolve()
        })
    }

    lockUnlockCard(id) {
        return lockUnlockCard(id).then(() => {


            return Promise.resolve()
        }).catch(() => {


            return Promise.resolve()
        })
    }

    perpetualCardBlocking(id) {
        return perpetualCardBlocking(id).then(() => {

            return Promise.resolve()
        }).catch(() => {


            return Promise.resolve()
        })
    }

    CreateInitialCardObj() {
        this._infoOfCards = [
            {
                "account": 5000,
                "autoUpdate": true,
                "card_number": '****************',
                "currency": "RUB",
                "id": 1,
                "limit": 0,
                "payment_system": "VISA",
                "purpose_of_creation": "Поезда в метро",
                "remains": 0,
                "status": "ACTIVE",
                "term": 0,
                "type": "Транспорт",
                "worker_id": 1
            },
        ]
    }

    get isFetching() {
        return toJS(this._isFecthing)
    }

    changeIsFetching(obj) {
        this._isFecthing = {...this._isFecthing, ...obj}
    }


    //Transaction


    topSpendingCategoriesUser(queryObj = {}) {

        let j = 0;
        let str = '';


        for (let i in queryObj) {
            if (j === 0) {
                str += '?' + i + '=' + queryObj[i]
            } else {
                str += '&' + i + '=' + queryObj[i]
            }


            j++

        }

        if (j === 0) {
            str = ''
        }

        return topSpendingCategoriesUser(str).then(({data}) => {
            this._topSpendingCategories = data
            return Promise.resolve()
        })
            .catch(({response}) => {

                return Promise.reject()
            })
    }

    transactionHistoryUser(queryObj = {},) {

        let j = 0;
        let str = '';


        for (let i in queryObj) {
            if (j === 0) {
                str += '?' + i + '=' + queryObj[i]
            } else {
                str += '&' + i + '=' + queryObj[i]
            }


            j++

        }

        if (j === 0) {
            str = ''
        }


        return transactionHistoryUser(str).then(({data}) => {

            this._transactionHistory = [...this._transactionHistory, ...data]
            return Promise.resolve()
        })
            .catch(({response}) => {

                return Promise.reject()
            })
    }


    get getTopSpendingCategories() {
        return toJS(this._topSpendingCategories)
    }

    get getTransactionHistory() {
        return toJS(this._transactionHistory)
    }



    // transactions


    expenseSchedule(queryObj = {}) {




        let str = createQuery(queryObj)

        debugger

        return expenseScheduleByWorker(str).then(({data}) => {
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

        return topSpendingCategoriesByWorker(str).then(({data}) => {
            debugger
            this._topSpendingCategories = data
            return Promise.resolve()
        })
            .catch(({response}) => {

                return Promise.reject()
            })
    }

    allTypeOfCards(id) {
        return getAllTypeOfCardsByWorker().then(({data}) => {
            debugger
            this._typeOfCards = data
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

        return transactionHistoryByWorkerId(str).then(({data}) => {

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


}