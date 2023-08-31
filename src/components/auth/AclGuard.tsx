import type { ACLObj, AppAbility } from '@/configs/acl'
import { buildAbilityFor } from '@/configs/acl'
import { useAuth } from '@/hooks/use-auth'
import BlankLayout from '@/layouts/BlankLayout'
import { AbilityContext } from '@/layouts/acl/Can'
import NotAuthorized from '@/pages/401'
import { useRouter } from 'next/router'
import { ReactNode, useState } from 'react'

interface AclGuardProps {
    children: ReactNode
    guestGuard: boolean
    aclAbilities: ACLObj
}

const AclGuard = (props: AclGuardProps) => {
    // ** Props
    const { aclAbilities, children, guestGuard } = props

    const [ability, setAbility] = useState<AppAbility | undefined>(undefined)

    // ** Hooks
    const auth = useAuth()
    const router = useRouter()

    // If guestGuard is true and user is not logged in or its an error page, render the page without checking access
    if (guestGuard || router.route === '/404' || router.route === '/500' || router.route === '/') {
        return <>{children}</>
    }

    // User is logged in, build ability for the user based on his role
    if (auth.user && auth.user.role && !ability) {
        setAbility(buildAbilityFor(auth.user.role, aclAbilities.subject))
    }

    // Check the access of current user and render pages
    if (ability && ability.can(aclAbilities.action, aclAbilities.subject)) {
        return <AbilityContext.Provider value={ability}>{children}</AbilityContext.Provider>
    }

    // Render Not Authorized component if the current user has limited access

    console.log('toi day chua')
    return (
        <BlankLayout>
            <NotAuthorized />
        </BlankLayout>
    )
}

export default AclGuard
