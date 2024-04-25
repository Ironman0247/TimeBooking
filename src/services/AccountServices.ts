import ApiService from './ApiService'
import type {
    ForgotPassword,
    ResetPassword,
} from '@/@types/auth'
import {
    auth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut,
} from '@/firebase';

export async function apiSignIn ({email, password}: {email: string, password: string}) {
    return await signInWithEmailAndPassword(auth, email, password).then(user => user).catch(err => err);
}

export async function apiSignUp ({email, password}: {email: string, password: string}) {
    return createUserWithEmailAndPassword(auth, email, password).then(user => user).catch(err => err);  
}

export async function apiSignOut () {
    return await signOut(auth).then(user => user).catch(err => err);
}


export async function apiGetAccountSettingData<T>() {
    return ApiService.fetchData<T>({
        url: '/account/setting',
        method: 'get',
    })
}

export async function apiGetAccountSettingIntegrationData<T>() {
    return ApiService.fetchData<T>({
        url: '/account/setting/integration',
        method: 'get',
    })
}

export async function apiGetAccountSettingBillingData<T>() {
    return ApiService.fetchData<T>({
        url: '/account/setting/billing',
        method: 'get',
    })
}

export async function apiGetAccountInvoiceData<
    T,
    U extends Record<string, unknown>
>(params: U) {
    return ApiService.fetchData<T>({
        url: '/account/invoice',
        method: 'get',
        params,
    })
}

export async function apiGetAccountLogData<
    T,
    U extends Record<string, unknown>
>(data: U) {
    return ApiService.fetchData<T>({
        url: '/account/log',
        method: 'post',
        data,
    })
}

export async function apiGetAccountFormData<T>() {
    return ApiService.fetchData<T>({
        url: '/account/form',
        method: 'get',
    })
}
