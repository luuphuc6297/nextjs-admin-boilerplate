import { hexToRGBA } from '@/core/utils/hex-to-rgba'
import { Theme } from '@mui/material/styles'

const Pagination = (theme: Theme) => {
    return {
        MuiPaginationItem: {
            styleOverrides: {
                outlined: {
                    borderColor: `rgba(${theme.palette.customColors.main}, 0.22)`
                },
                outlinedPrimary: {
                    '&.Mui-selected': {
                        backgroundColor: hexToRGBA(theme.palette.primary.main, 0.12),
                        '&:hover': {
                            backgroundColor: `${hexToRGBA(theme.palette.primary.main, 0.2)} !important`
                        }
                    }
                },
                outlinedSecondary: {
                    '&.Mui-selected': {
                        backgroundColor: hexToRGBA(theme.palette.secondary.main, 0.12),
                        '&:hover': {
                            backgroundColor: `${hexToRGBA(theme.palette.secondary.main, 0.2)} !important`
                        }
                    }
                }
            }
        }
    }
}

export default Pagination
