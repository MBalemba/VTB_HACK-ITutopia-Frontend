import {makeAutoObservable, toJS} from "mobx";
import {
    getInfoOfCardsByWorkerId,
    getWorkerInfo,
    setLimitOnCard, topSpendingCategoriesUser,
    transactionHistoryUser,
    transferToCard
} from "../http/UserApi";


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


        this._isFecthing={
            isFetchCardsInfo: true,
        }

        this._expenseSchedule = null
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

    transferToCard(data){
        return transferToCard(data).then(()=>{


            return Promise.resolve()
        }).catch(()=>{


            return Promise.resolve()
        })
    }

    setLimitOnCard(data){
        return setLimitOnCard(data).then(()=>{


            return Promise.resolve()
        }).catch(()=>{


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

    changeIsFetching(obj){
        this._isFecthing = {...this._isFecthing, ...obj}
    }


    //Transaction


    topSpendingCategoriesUser(queryObj={}) {

        let j = 0;
        let str='';


        for(let i in queryObj){
            if(j===0){
                str+='?'+ i+ '='+ queryObj[i]
            } else {
                str+='&'+ i+ '='+ queryObj[i]
            }


            j++

        }

        if(j===0){
            str=''
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
        let str='';


        for(let i in queryObj){
            if(j===0){
                str+='?'+ i+ '='+ queryObj[i]
            } else {
                str+='&'+ i+ '='+ queryObj[i]
            }


            j++

        }

        if(j===0){
            str=''
        }



        return transactionHistoryUser(str).then(({data}) => {

            this._transactionHistory = [...this._transactionHistory, ...data]
            return Promise.resolve()
        })
            .catch(({response}) => {

                return Promise.reject()
            })
    }


    get getTopSpendingCategories(){
        return toJS(this._topSpendingCategories)
    }

    get getTransactionHistory(){
        return toJS(this._transactionHistory)
    }


}