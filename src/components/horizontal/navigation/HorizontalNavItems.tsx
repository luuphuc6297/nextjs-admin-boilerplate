// ** Types
import { HorizontalNavItemsType, NavGroup, NavLink } from '@/core/layouts/types'
import HorizontalNavGroup from './HorizontalNavGroup'
import HorizontalNavLink from './HorizontalNavLink'

interface Props {
    hasParent?: boolean
    horizontalNavItems?: HorizontalNavItemsType
}
const resolveComponent = (item: NavGroup | NavLink) => {
    if ((item as NavGroup).children) return HorizontalNavGroup

    return HorizontalNavLink
}

const HorizontalNavItems = (props: Props) => {
    const RenderMenuItems = props.horizontalNavItems?.map((item: NavGroup | NavLink, index: number) => {
        const TagName: any = resolveComponent(item)

        return <TagName {...props} key={index} item={item} />
    })

    return <>{RenderMenuItems}</>
}

export default HorizontalNavItems
