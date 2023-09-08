import { KYC_TYPES, ROLE } from '../auth'

export interface User {
    _id: string
    first_name: string
    last_name: string
    email: string
    is_verified: boolean
    is_kyc: KYC_TYPES
    is_blocked: boolean
    mfa: boolean
    status: number
    role: ROLE
    inquiry_id?: string
    createdAt: Date | string
    updatedAt: Date | string
    login_date: Date | string
}

export interface ResponseLogin {
    payload: User
    token: string
}

export interface ResponseSignUp {
    id: string
    email: string
}

export interface ResponseForgotPassword {
    messages: string
    statusCode: number
}

export interface ResponseResetPassword {
    messages: string
    statusCode: number
}

export interface Answer {
    id: number
    answer: string
}
