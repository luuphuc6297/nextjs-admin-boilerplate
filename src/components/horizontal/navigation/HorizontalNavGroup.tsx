import themeConfig from '@/configs/theme'
import Icon from '@/core/components/icon'
import { Settings } from '@/core/context/setting'
import { NavGroup } from '@/core/layouts/types'
import { hasActiveChild } from '@/core/layouts/utils'
import { hexToRGBA } from '@/core/utils/hex-to-rgba'
import Translations from '@/layouts/Translations'
import UserIcon from '@/layouts/UserIcon'
import CanViewNavGroup from '@/layouts/acl/CanViewNavGroup'
import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import ClickAwayListener from '@mui/material/ClickAwayListener'
import Fade from '@mui/material/Fade'
import List from '@mui/material/List'
import MuiListItem, { ListItemProps } from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import { styled, useTheme } from '@mui/material/styles'
import clsx from 'clsx'
import { useRouter } from 'next/router'
import { Fragment, SyntheticEvent, useEffect, useState } from 'react'
import { usePopper } from 'react-popper'
import HorizontalNavItems from './HorizontalNavItems'

interface Props {
    item: NavGroup
    settings: Settings
    hasParent?: boolean
}

// ** Styled Components
const ListItem = styled(MuiListItem)<ListItemProps>(({ theme }) => ({
    cursor: 'pointer',
    paddingTop: theme.spacing(2.25),
    paddingBottom: theme.spacing(2.25),
    '&:hover': {
        background: theme.palette.action.hover
    }
}))

const NavigationMenu = styled(Paper)(({ theme }) => ({
    overflowY: 'auto',
    overflowX: 'hidden',
    padding: theme.spacing(2, 0),
    maxHeight: 'calc(100vh - 13rem)',
    backgroundColor: theme.palette.background.paper,
    ...(themeConfig.menuTextTruncate ? { width: 260 } : { minWidth: 260 }),

    '&::-webkit-scrollbar': {
        width: 6
    },
    '&::-webkit-scrollbar-thumb': {
        borderRadius: 20,
        background: hexToRGBA(theme.palette.mode === 'light' ? '#B0ACB5' : '#575468', 0.6)
    },
    '&::-webkit-scrollbar-track': {
        borderRadius: 20,
        background: 'transparent'
    },
    '& .MuiList-root': {
        paddingTop: 0,
        paddingBottom: 0
    },
    '& .menu-group.Mui-selected': {
        borderRadius: 0,
        backgroundColor: theme.palette.action.hover
    }
}))

const HorizontalNavGroup = (props: Props) => {
    // ** Props
    const { item, hasParent, settings } = props

    // ** Hooks & Vars
    const theme = useTheme()
    const router = useRouter()
    const currentURL = router.asPath
    const { skin, direction } = settings
    const { navSubItemIcon, menuTextTruncate, horizontalMenuToggle, horizontalMenuAnimation } = themeConfig

    const popperOffsetHorizontal = direction === 'rtl' ? 22 : -22
    const popperPlacement = direction === 'rtl' ? 'bottom-end' : 'bottom-start'
    const popperPlacementSubMenu = direction === 'rtl' ? 'left-start' : 'right-start'

    // ** States
    const [menuOpen, setMenuOpen] = useState<boolean>(false)
    const [popperElement, setPopperElement] = useState(null)
    const [anchorEl, setAnchorEl] = useState<Element | null>(null)
    const [referenceElement, setReferenceElement] = useState(null)

    const { styles, attributes, update } = usePopper(referenceElement, popperElement, {
        placement: hasParent ? popperPlacementSubMenu : popperPlacement,
        modifiers: [
            {
                name: 'offset',
                enabled: true,
                options: {
                    offset: hasParent ? [-8, 15] : [popperOffsetHorizontal, 5]
                }
            },
            {
                enabled: true,
                name: 'flip',
                options: {
                    boundary: document.body
                }
            }
        ]
    })

    const handleGroupOpen = (event: SyntheticEvent) => {
        setAnchorEl(event.currentTarget)
        setMenuOpen(true)
        update ? update() : null
    }

    const handleGroupClose = () => {
        setAnchorEl(null)
        setMenuOpen(false)
    }

    const handleMenuToggleOnClick = (event: SyntheticEvent) => {
        if (anchorEl) {
            handleGroupClose()
        } else {
            handleGroupOpen(event)
        }
    }

    useEffect(() => {
        handleGroupClose()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [router.asPath])

    const icon = item.icon ? item.icon : navSubItemIcon
    const toggleIcon = direction === 'rtl' ? 'mdi:chevron-left' : 'mdi:chevron-right'

    const WrapperCondition = horizontalMenuToggle === 'click'
    const MainWrapper = WrapperCondition ? ClickAwayListener : 'div'
    const ChildWrapper = WrapperCondition ? 'div' : Fragment
    const AnimationWrapper = horizontalMenuAnimation ? Fade : Fragment

    const childMenuGroupStyles = () => {
        if (attributes && attributes.popper) {
            if (direction === 'ltr') {
                if (attributes.popper['data-popper-placement'] === 'right-start') {
                    return 'left'
                }
                if (attributes.popper['data-popper-placement'] === 'left-start') {
                    return 'right'
                }
            } else {
                if (attributes.popper['data-popper-placement'] === 'right-start') {
                    return 'right'
                }
                if (attributes.popper['data-popper-placement'] === 'left-start') {
                    return 'left'
                }
            }
        }
    }

    return (
        <CanViewNavGroup navGroup={item}>
            {/* @ts-ignore */}
            <MainWrapper {...(WrapperCondition ? { onClickAway: handleGroupClose } : { onMouseLeave: handleGroupClose })}>
                <ChildWrapper>
                    <List component='div' sx={{ py: skin === 'bordered' ? 2.625 : 2.75 }}>
                        <ListItem
                            aria-haspopup='true'
                            {...(WrapperCondition ? {} : { onMouseEnter: handleGroupOpen })}
                            className={clsx('menu-group', { 'Mui-selected': hasActiveChild(item, currentURL) })}
                            {...(horizontalMenuToggle === 'click' ? { onClick: handleMenuToggleOnClick } : {})}
                            sx={{
                                ...(menuOpen ? { backgroundColor: 'action.hover' } : {}),
                                ...(!hasParent
                                    ? {
                                        px: 5.5,
                                        borderRadius: 3.5,
                                        '&.Mui-selected': {
                                            boxShadow: 3,
                                            backgroundImage: theme =>
                                                `linear-gradient(98deg, ${theme.palette.customColors.primaryGradient}, ${theme.palette.primary.main} 94%)`,
                                            '& .MuiTypography-root, & .MuiListItemIcon-root, & svg': {
                                                color: 'common.white'
                                            }
                                        }
                                    }
                                    : { px: 5 })
                            }}
                        >
                            <Box
                                sx={{
                                    width: '100%',
                                    display: 'flex',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'space-between'
                                }}
                                ref={setReferenceElement}
                            >
                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        flexDirection: 'row',
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
                                <Box sx={{ ml: 1.6, display: 'flex', alignItems: 'center', color: 'text.primary' }}>
                                    {item.badgeContent ? (
                                        <Chip
                                            label={item.badgeContent}
                                            color={item.badgeColor || 'primary'}
                                            sx={{
                                                mr: 1.6,
                                                height: 20,
                                                fontWeight: 500,
                                                '& .MuiChip-label': { px: 1.5, textTransform: 'capitalize' }
                                            }}
                                        />
                                    ) : null}
                                    <Icon icon={hasParent ? toggleIcon : 'mdi:chevron-down'} fontSize='1.375rem' />
                                </Box>
                            </Box>
                        </ListItem>
                        <AnimationWrapper {...(horizontalMenuAnimation && { in: menuOpen, timeout: { exit: 300, enter: 400 } })}>
                            <Box
                                style={styles.popper}
                                ref={setPopperElement}
                                {...attributes.popper}
                                sx={{
                                    zIndex: theme.zIndex.appBar,
                                    ...(!horizontalMenuAnimation && { display: menuOpen ? 'block' : 'none' }),
                                    pl: childMenuGroupStyles() === 'left' ? (skin === 'bordered' ? 2.5 : 2.25) : 0,
                                    pr: childMenuGroupStyles() === 'right' ? (skin === 'bordered' ? 2.5 : 2.25) : 0,
                                    ...(hasParent ? { position: 'fixed !important' } : { pt: skin === 'bordered' ? 5.5 : 5.75 })
                                }}
                            >
                                <NavigationMenu
                                    sx={{
                                        ...(hasParent ? { overflowY: 'auto', overflowX: 'visible', maxHeight: 'calc(100vh - 21rem)' } : {}),
                                        ...(skin === 'bordered'
                                            ? { boxShadow: 0, border: `1px solid ${theme.palette.divider}` }
                                            : { boxShadow: 4 })
                                    }}
                                >
                                    <HorizontalNavItems {...props} hasParent horizontalNavItems={item.children} />
                                </NavigationMenu>
                            </Box>
                        </AnimationWrapper>
                    </List>
                </ChildWrapper>
            </MainWrapper>
        </CanViewNavGroup>
    )
}

export default HorizontalNavGroup
