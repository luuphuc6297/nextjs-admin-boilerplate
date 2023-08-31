import { NavSectionTitle } from '@/core/layouts/types'
import { AbilityContext } from '@/layouts/acl/Can'
import { ReactNode, useContext } from 'react'

interface Props {
    children: ReactNode
    navTitle?: NavSectionTitle
}

const CanViewNavSectionTitle = (props: Props) => {
    // ** Props
    const { children, navTitle } = props

    // ** Hook
    const ability = useContext(AbilityContext)

    return ability && ability.can(navTitle?.action, navTitle?.subject) ? <>{children}</> : null
}

export default CanViewNavSectionTitle
