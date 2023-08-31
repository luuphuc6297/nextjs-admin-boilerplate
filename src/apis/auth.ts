import { Response } from '@/types/common'
import { LoginForm } from '@/types/forms'
import {
    ResponseLogin
} from '@/types/user'
import axiosClient from './axios-client'

export const authApis = {
    login(data: LoginForm): Promise<Response<ResponseLogin>> {
        return axiosClient.post('users/login', data)
    },
}
