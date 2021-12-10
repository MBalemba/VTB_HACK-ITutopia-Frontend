import {$authHost, $authHostRefresh, $host} from "./index";



export const login = async (login, password) => {
    const response = await $host.post('login', {email: login, password: password})

    return response
}


export const refresh = async () => {
    const response = await $authHostRefresh.post('refreshToken')
    return response
}

export const currentAdminCheck = async () => {
    const response = await $authHost.get('start/currentAccount')
    return response
}





export const departmentsWorkersCards = async () => {
    const response = await $authHost.get('/start/getDepartmentsWorkersCards')
    return response
}

export const AllWorkers = async () => {
    const response = await $authHost.get('/start/getAllWorkers')
    return response
}

export const AllDepartments = async () => {
    const response = await $authHost.get('start/getAllDepartments')
    return response
}

export const getWorkerInfo = async (id) => {
    const response = await $authHost.get('worker/getWorkerInfo'+`?worker_id=${id}`)
    return response
}
export const getInfoOfCardsByWorkerId = async (id) => {
    const response = await $authHost.get('/worker/getInfoOfCardsByWorkerId'+`?worker_id=${id}`)
    return response
}



export const blablabla = async (id) => {
    const response = await $authHost.get('/createTransactions')
    return response
}


export const addDepartment = async (data) => {
    const response = await $authHost.post('start/addDepartment', data)
    return response
}

export const addWorker = async (data) => {
    const response = await $authHost.post('start/addWorker', data)
    return response
}

export const addCard = async (data) => {
    const response = await $authHost.post('start/addCard', data)
    return response
}
export const transferToCard = async (data) => {
    const response = await $authHost.post('/worker/transferToCard?'+`amount=${data.amount}&card_id=${data.id}`, data)
    return response
}


export const setLimitOnCard = async (data) => {
    const response = await $authHost.put('/worker/setLimitOnCard?'+`autoUpdate=${data.autoUpdate}&card_id=${data.card_id}&limit=${data.limit}&term=${data.term}`)
    return response
}


//TransactionAdmin

export const expenseSchedule = async (str='') => {
    const response = await $authHost.get('/transaction/expenseSchedule'+str)
    return response
}

export const topSpendingCategories = async (str='') => {
    const response = await $authHost.get('/transaction/topSpendingCategories')
    return response
}

export const transactionHistory = async () => {
    const response = await $authHost.get('/transaction/transactionHistory')
    return response
}


//TransactionUser




export const topSpendingCategoriesUser = async (str='') => {

    const response = await $authHost.get('/transaction/topSpendingCategoriesByWorker'+str)
    return response
}

export const transactionHistoryUser = async (str='') => {

    const response = await $authHost.get('/transaction/transactionHistoryByWorkerId'+str)
    return response
}










