import { KYC_TYPES, ROLE } from '@/types/auth'
import { User } from '@/types/user'
import { produce } from 'immer'
import { StateCreator } from 'zustand'

export interface UserSlice {
    me: User
    resetPwdEmail: string
    storeUser: (user: User) => void
    updateUser: (props: Partial<User>) => void
    resetPassword: (email: string) => void
}

const initialMe = {
    _id: '',
    first_name: '',
    last_name: '',
    email: '',
    is_verified: false,
    is_kyc: KYC_TYPES.IS_NEW,
    is_blocked: false,
    mfa: false,
    status: 1,
    role: ROLE.Guest,
    inquiry_id: '',
    createdAt: '',
    updatedAt: '',
    login_date: '',
}

export const createUserSlice: StateCreator<UserSlice> = (set, get) => ({
    me: initialMe,
    resetPwdEmail: '',
    updateUser: (props) =>
        set((state) =>
            produce(state, (draft) => {
                Object.assign(draft.me, props)
            })
        ),
    storeUser: (user: User) => {
        set(() => ({ me: user }))
    },
    resetPassword: (email: string) => {
        set(() => ({ resetPwdEmail: email }))
    },
    resetUser: () => set(() => ({})),
})
