import { Theme } from '@mui/material/styles'

const input = (theme: Theme) => {
    return {
        MuiInputLabel: {
            styleOverrides: {
                root: {
                    color: theme.palette.text.secondary
                }
            }
        },
        MuiInput: {
            styleOverrides: {
                root: {
                    '&:before': {
                        borderBottom: `1px solid rgba(${theme.palette.customColors.main}, 0.22)`
                    },
                    '&:hover:not(.Mui-disabled):before': {
                        borderBottom: `1px solid rgba(${theme.palette.customColors.main}, 0.32)`
                    },
                    '&.Mui-disabled:before': {
                        borderBottomStyle: 'solid'
                    }
                }
            }
        },
        MuiFilledInput: {
            styleOverrides: {
                root: {
                    backgroundColor: `rgba(${theme.palette.customColors.main}, 0.04)`,
                    '&:hover:not(.Mui-disabled)': {
                        backgroundColor: `rgba(${theme.palette.customColors.main}, 0.08)`
                    },
                    '&:before': {
                        borderBottom: `1px solid rgba(${theme.palette.customColors.main}, 0.22)`
                    },
                    '&:hover:not(.Mui-disabled):before': {
                        borderBottom: `1px solid rgba(${theme.palette.customColors.main}, 0.32)`
                    }
                }
            }
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    // '&:hover:not(.Mui-focused):not(.Mui-disabled):not(.Mui-error) .MuiOutlinedInput-notchedOutline': {
                    //     borderColor: `rgba(${theme.palette.customColors.main}, 0.32)`
                    // },
                    // '&:hover.Mui-error .MuiOutlinedInput-notchedOutline': {
                    //     borderColor: theme.palette.error.main
                    // },
                    // '& .MuiOutlinedInput-notchedOutline': {
                    //     borderColor: `rgba(${theme.palette.customColors.main}, 0.22)`
                    // },
                    // '&.Mui-disabled .MuiOutlinedInput-notchedOutline': {
                    //     borderColor: theme.palette.text.disabled
                    // }
                    '& .MuiOutlinedInput-root:hover': {
                        '& > fieldset': {
                            // borderColor: `${theme.palette.secondary['light']}`,
                            border: `1px solid ${theme.palette.secondary['light']} !important`,
                        },
                    },
                    '& .MuiOutlinedInput-root::placeholder': {
                        color: 'rgba(175, 174, 184, 1)',
                    },
                    '& .MuiOutlinedInput-root': {
                        borderColor: 'rgba(233, 233, 240, 1)',
                    },
                    
                    // '& input:valid + fieldset': {
                    //     borderColor: 'rgba(233, 233, 240, 1)',
                    // },

                    // '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
                    //     border: '1px solid rgba(233, 233, 240, 1)',
                    // },
                }
            }
        }
    }
}

export default input
