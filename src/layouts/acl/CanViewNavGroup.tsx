
import { NavGroup, NavLink } from '@/core/layouts/types'
import { AbilityContext } from '@/layouts/acl/Can'
import React, { ReactNode } from 'react'

interface Props {
    navGroup?: NavGroup
    children: ReactNode
}

const CanViewNavGroup = (props: Props) => {
    const { children, navGroup } = props

    const ability = React.useContext(AbilityContext)

    const canViewMenuGroup = (item: NavGroup) => {
        const hasAnyVisibleChild =
            item.children && item.children.some((i: NavLink) => ability && ability.can(i.action, i.subject))

        if (!(item.action && item.subject)) {
            return hasAnyVisibleChild
        }

        return ability && ability.can(item.action, item.subject) && hasAnyVisibleChild
    }

    return navGroup && canViewMenuGroup(navGroup) ? <>{children}</> : null
}

export default CanViewNavGroup
