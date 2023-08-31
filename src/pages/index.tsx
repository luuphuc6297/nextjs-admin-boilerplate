import Spinner from '@/core/components/spinner'
import { useAuth } from '@/hooks/use-auth'
import { useRouter } from 'next/router'
import React from 'react'

/**
 *  Set Home URL based on User Roles
 */
export const getHomeRoute = (role: string) => {
    if (role === 'client') return '/acl'
    else return '/dashboards/crm'
}

const Home = () => {
    // ** Hooks
    const auth = useAuth()
    console.log('auth__', auth)
    const router = useRouter()

    React.useEffect(() => {
        if (auth.user && auth.user.role) {
            const homeRoute = getHomeRoute(auth.user.role)

            // Redirect user to Home URL
            router.replace(homeRoute)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return <Spinner sx={{ height: '100%' }} />
}

export default Home
