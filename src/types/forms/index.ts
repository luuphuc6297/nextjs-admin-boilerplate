export interface HomeForm {
    email: string
}
export interface SignUpForm {
    email: string
    first_name: string
    last_name: string
    password: string
}

export interface LoginForm {
    email: string
    password: string
}

export interface VerifyEmailForm {
    email: string
    code: string
}

export interface ResendEmailForm {
    email: string
}

export interface ForgotPasswordForm {
    email: string
}

export interface ResetPasswordForm {
    password: string
    token: string
}

export interface UpdateNameForm {
    first_name: string
    last_name: string
}

export interface UpdatePasswordForm {
    oldPassword: string
    newPassword: string
}

export interface UpdateAddressForm {
    address: string
    addressCont?: string
    city: string
    state: string
    zipCode: string
}

export interface ResetPasswordForm {
    password: string
}

export interface UpdateInfoForm {
    first_name: string
    last_name: string
}

export interface UpdatePasswordForm {
    oldPassword: string
    newPassword: string
}


export type DateType = Date | null | undefined
