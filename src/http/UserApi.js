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











