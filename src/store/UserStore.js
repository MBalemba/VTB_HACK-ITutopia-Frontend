import {makeAutoObservable, toJS} from "mobx";
import {getInfoOfCardsByWorkerId, getWorkerInfo} from "../http/UserApi";


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
                "card_number": '6523124895742365',
                "currency": "RUB",
                "id": 1,
                "limit": 95000,
                "payment_system": "VISA",
                "purpose_of_creation": "Поезда в метро",
                "remains": 12740,
                "status": "ACTIVE",
                "term": 20,
                "type": "Транспорт",
                "worker_id": 1
            },
            {
                "account": 5000,
                "autoUpdate": true,
                "card_number": '6523124895742365',
                "currency": "RUB",
                "id": 1,
                "limit": 95000,
                "payment_system": "VISA",
                "purpose_of_creation": "Поезда в метро",
                "remains": 12740,
                "status": "ACTIVE",
                "term": 20,
                "type": "Транспорт",
                "worker_id": 1
            }
        ]




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
            debugger
            this._infoOfCards = [...data]
            return Promise.resolve()
        }).catch(() => {
            return Promise.reject()
        })
    }

    get infoOfCards() {
        return toJS(this._infoOfCards)
    }


}