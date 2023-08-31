import Icon from '@/core/components/icon'
import { useSettings } from '@/core/hooks/use-setting'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Link from 'next/link'
import React, { MouseEvent, ReactNode } from 'react'
import { OptionMenuItemType, OptionType, OptionsMenuType } from './types'

const MenuItemWrapper = ({ children, option }: { children: ReactNode; option: OptionMenuItemType }) => {
    if (option.href) {
        return (
            <Box
                component={Link}
                href={option.href}
                {...option.linkProps}
                sx={{
                    px: 4,
                    py: 1.5,
                    width: '100%',
                    display: 'flex',
                    color: 'inherit',
                    alignItems: 'center',
                    textDecoration: 'none'
                }}
            >
                {children}
            </Box>
        )
    } else {
        return <>{children}</>
    }
}

const OptionsMenu = (props: OptionsMenuType) => {
    // ** Props
    const { icon, options, menuProps, iconProps, leftAlignMenu, iconButtonProps } = props

    // ** State
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)

    // ** Hook & Var
    const { settings } = useSettings()
    const { direction } = settings

    const handleClick = (event: MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    return (
        <>
            <IconButton aria-haspopup='true' onClick={handleClick} {...iconButtonProps}>
                {icon ? icon : <Icon icon='mdi:dots-vertical' {...iconProps} />}
            </IconButton>
            <Menu
                keepMounted
                anchorEl={anchorEl}
                onClose={handleClose}
                open={Boolean(anchorEl)}
                {...(!leftAlignMenu && {
                    anchorOrigin: { vertical: 'bottom', horizontal: direction === 'ltr' ? 'right' : 'left' },
                    transformOrigin: { vertical: 'top', horizontal: direction === 'ltr' ? 'right' : 'left' }
                })}
                {...menuProps}
            >
                {options.map((option: OptionType, index: number) => {
                    if (typeof option === 'string') {
                        return (
                            <MenuItem key={index} onClick={handleClose}>
                                {option}
                            </MenuItem>
                        )
                    } else if ('divider' in option) {
                        return option.divider && <Divider key={index} {...option.dividerProps} />
                    } else {
                        return (
                            <MenuItem
                                key={index}
                                {...option.menuItemProps}
                                {...(option.href && { sx: { p: 0 } })}
                                onClick={e => {
                                    handleClose()
                                    option.menuItemProps && option.menuItemProps.onClick ? option.menuItemProps.onClick(e) : null
                                }}
                            >
                                <MenuItemWrapper option={option}>
                                    {option.icon ? option.icon : null}
                                    {option.text}
                                </MenuItemWrapper>
                            </MenuItem>
                        )
                    }
                })}
            </Menu>
        </>
    )
}

export default OptionsMenu
