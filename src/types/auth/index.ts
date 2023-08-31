import { User } from '../user'

export type AuthValuesType = {
    loading: boolean
    user: User | null
    storeUser: (user: User, token: string) => void
    logout: () => void
}

export enum ROLE {
    Guest = 'GUEST',
    Admin = 'ADMIN',
}

export enum KYC_TYPES {
    IS_NEW = 'IS_NEW',
    PENDING = 'PENDING',
    SUCCEEDED = 'SUCCEEDED',
    REJECTED = 'REJECTED',
    NEEDS_REVIEW = 'NEEDS_REVIEW',
    EXPIRED = 'EXPIRED',
}
