
import { useAuth } from '@/hooks/use-auth'
import { useRouter } from 'next/router'
import React, { ReactElement, ReactNode } from 'react'

interface GuestGuardProps {
    children: ReactNode
    fallback: ReactElement | null
}

const GuestGuard = (props: GuestGuardProps) => {
    const { children, fallback } = props
    const auth = useAuth()
    const router = useRouter()

    React.useEffect(() => {
        if (!router.isReady) {
            return
        }

        if (window.localStorage.getItem('userData')) {
            router.replace('/')
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [router.route])

    if (auth.loading || (!auth.loading && auth.user !== null)) {
        return fallback
    }

    return <>{children}</>
}

export default GuestGuard
