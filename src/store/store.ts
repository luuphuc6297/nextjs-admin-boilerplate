import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { createUserSlice, UserSlice } from './slices/user'

// https://github.com/pmndrs/zustand/blob/main/docs/guides/slices-pattern.md

export const useStore = create<UserSlice>()(
    devtools((...a) => ({
        ...createUserSlice(...a),
    }))
)
