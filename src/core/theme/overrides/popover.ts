import { Skin } from '@/core/layouts/types'
import { Theme } from '@mui/material/styles'

const Popover = (theme: Theme, skin: Skin) => {
    return {
        MuiPopover: {
            styleOverrides: {
                root: {
                    '& .MuiPopover-paper': {
                        boxShadow: theme.shadows[skin === 'bordered' ? 0 : 6],
                        ...(skin === 'bordered' && { border: `1px solid ${theme.palette.divider}` })
                    }
                }
            }
        }
    }
}

export default Popover
