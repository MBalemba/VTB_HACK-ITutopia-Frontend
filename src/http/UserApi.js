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











