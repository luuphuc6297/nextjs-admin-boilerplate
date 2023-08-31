import { useAuth } from '@/hooks/use-auth'
import { useRouter } from 'next/router'
import React, { ReactElement, ReactNode } from 'react'

interface AuthGuardProps {
    children: ReactNode
    fallback: ReactElement | null
}

const AuthGuard = (props: AuthGuardProps) => {
    const { children, fallback } = props
    const auth = useAuth()
    const router = useRouter()

    React.useEffect(
        () => {
            if (!router.isReady) {
                return
            }

            if (auth.user === null && !window.localStorage.getItem('userData')) {
                if (router.asPath !== '/') {
                    router.replace({
                        pathname: '/login',
                        query: { returnUrl: router.asPath }
                    })
                } else {
                    router.replace('/login')
                }
            }
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [router.route]
    )

    if (auth.loading || auth.user === null) {
        return fallback
    }

    return <>{children}</>
}

export default AuthGuard
