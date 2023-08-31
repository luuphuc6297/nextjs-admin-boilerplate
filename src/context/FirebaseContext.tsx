import { ReactNode, createContext, useContext } from 'react'
import useFirebaseAuth from '@/hooks/use-firebase-auth'

const authUserContext: any = createContext({
    authUser: null,
    loading: true,
    signOut: async () => Promise.resolve(),
    signInWithEmailAndPassword: async () => Promise.resolve(),
    createUserWithEmailAndPassword: async () => Promise.resolve()
})

export const FirebaseAuthProvider = ({ children }: { children: ReactNode }) => {
    const auth = useFirebaseAuth()

    return <authUserContext.Provider value={auth}>{children}</authUserContext.Provider>
}

// custom hook to use the authUserContext and access authUser and loading
export const useAuth = () => useContext(authUserContext)
