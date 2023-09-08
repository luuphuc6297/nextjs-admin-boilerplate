import { Response } from '@/types/common'
import {
    ForgotPasswordForm,
    LoginForm,
    ResendEmailForm,
    SignUpForm,
    VerifyEmailForm,
} from '@/types/forms'
import {
    ResponseForgotPassword,
    ResponseLogin,
    ResponseResetPassword,
    ResponseSignUp,
} from '@/types/user'
import axiosClient from './axios-client'

export const authApis = {
    login(data: LoginForm): Promise<Response<ResponseLogin>> {
        return axiosClient.post('users/login', data)
    },
    sign_up(data: SignUpForm): Promise<Response<ResponseSignUp>> {
        return axiosClient.post('users/register', data)
    },
    verify_email(data: VerifyEmailForm): Promise<Response<ResponseLogin>> {
        return axiosClient.post('users/verify', data)
    },
    forgot_password(data: ForgotPasswordForm): Promise<ResponseForgotPassword> {
        return axiosClient.post('users/forgot-password', data)
    },
    resend_email(data: ResendEmailForm): Promise<ResponseResetPassword> {
        return axiosClient.post('users/send-verify', data)
    },
    current_user(): Promise<Response<ResponseLogin>> {
        return axiosClient.get('users/who-am-i')
    },
}
