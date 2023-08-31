import { NavLink } from '@/core/layouts/types'
import { AbilityContext } from '@/layouts/acl/Can'
import { ReactNode, useContext } from 'react'

interface Props {
    navLink?: NavLink
    children: ReactNode
}

const CanViewNavLink = (props: Props) => {
    const { children, navLink } = props

    const ability = useContext(AbilityContext)

    return ability && ability.can(navLink?.action, navLink?.subject) ? <>{children}</> : null
}

export default CanViewNavLink
