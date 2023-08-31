import themeConfig from '@/configs/theme'
import { Settings } from '@/core/context/setting'
import { NavLink } from '@/core/layouts/types'
import { handleURLQueries } from '@/core/layouts/utils'
import { hexToRGBA } from '@/core/utils/hex-to-rgba'
import Translations from '@/layouts/Translations'
import UserIcon from '@/layouts/UserIcon'
import CanViewNavLink from '@/layouts/acl/CanViewNavLink'
import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import List from '@mui/material/List'
import MuiListItem, { ListItemProps } from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'
import clsx from 'clsx'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { ElementType, Fragment } from 'react'

interface Props {
    item: NavLink
    settings: Settings
    hasParent: boolean
}

const ListItem = styled(MuiListItem)<
    ListItemProps & { component?: ElementType; href: string; target?: '_blank' | undefined }
>(({ theme }) => ({
    width: 'auto',
    paddingTop: theme.spacing(2.25),
    color: theme.palette.text.primary,
    paddingBottom: theme.spacing(2.25),
    '&:hover': {
        backgroundColor: theme.palette.action.hover
    },
    '&.active, &.active:hover': {
        backgroundColor: hexToRGBA(theme.palette.primary.main, 0.08)
    },
    '&.active .MuiTypography-root, &.active .MuiListItemIcon-root': {
        color: theme.palette.primary.main
    },
    '&:focus-visible': {
        outline: 0,
        backgroundColor: theme.palette.action.focus
    }
}))

const HorizontalNavLink = (props: Props) => {
    // ** Props
    const { item, settings, hasParent } = props

    // ** Hook & Vars
    const router = useRouter()
    const { navSubItemIcon, menuTextTruncate } = themeConfig

    const icon = item.icon ? item.icon : navSubItemIcon

    const Wrapper = !hasParent ? List : Fragment

    const isNavLinkActive = () => {
        if (router.pathname === item.path || handleURLQueries(router, item.path)) {
            return true
        } else {
            return false
        }
    }

    return (
        <CanViewNavLink navLink={item}>
            <Wrapper {...(!hasParent ? { component: 'div', sx: { py: settings.skin === 'bordered' ? 2.625 : 2.75 } } : {})}>
                <ListItem
                    component={Link}
                    disabled={item.disabled}
                    {...(item.disabled && { tabIndex: -1 })}
                    className={clsx({ active: isNavLinkActive() })}
                    target={item.openInNewTab ? '_blank' : undefined}
                    href={item.path === undefined ? '/' : `${item.path}`}
                    onClick={e => {
                        if (item.path === undefined) {
                            e.preventDefault()
                            e.stopPropagation()
                        }
                    }}
                    sx={{
                        ...(item.disabled ? { pointerEvents: 'none' } : { cursor: 'pointer' }),
                        ...(!hasParent
                            ? {
                                px: 5.5,
                                borderRadius: 3.5,
                                '&.active, &.active:hover': {
                                    boxShadow: 3,
                                    backgroundImage: theme =>
                                        `linear-gradient(98deg, ${theme.palette.customColors.primaryGradient}, ${theme.palette.primary.main} 94%)`,
                                    '& .MuiTypography-root, & .MuiListItemIcon-root': {
                                        color: 'common.white'
                                    }
                                }
                            }
                            : { px: 5 })
                    }}
                >
                    <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                ...(menuTextTruncate && { overflow: 'hidden' })
                            }}
                        >
                            <ListItemIcon sx={{ color: 'text.primary', mr: !hasParent ? 2 : 3 }}>
                                <UserIcon icon={icon} fontSize={icon === navSubItemIcon ? '0.875rem' : '1.375rem'} />
                            </ListItemIcon>
                            <Typography {...(menuTextTruncate && { noWrap: true })}>
                                <Translations text={item.title} />
                            </Typography>
                        </Box>
                        {item.badgeContent ? (
                            <Chip
                                label={item.badgeContent}
                                color={item.badgeColor || 'primary'}
                                sx={{
                                    ml: 1.6,
                                    height: 20,
                                    fontWeight: 500,
                                    '& .MuiChip-label': { px: 1.5, textTransform: 'capitalize' }
                                }}
                            />
                        ) : null}
                    </Box>
                </ListItem>
            </Wrapper>
        </CanViewNavLink>
    )
}

export default HorizontalNavLink
