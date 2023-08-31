import { Skin } from '@/core/layouts/types'
import { Theme } from '@mui/material/styles'

const Autocomplete = (theme: Theme, skin: Skin) => {
    return {
        MuiAutocomplete: {
            styleOverrides: {
                paper: {
                    ...(skin === 'bordered' && { boxShadow: 'none', border: `1px solid ${theme.palette.divider}` })
                }
            }
        }
    }
}

export default Autocomplete
