import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import { Box, Stack, useMediaQuery, useTheme } from '@mui/material'
import { styled } from '@mui/system'
import { useRouter } from 'next/router'
import React from 'react'

export interface PasswordCriteria {
    number: boolean
    specialChar: boolean
    pwdLength: boolean
    upperCase: boolean
    lowerCase: boolean
}

export interface PWDRequisiteProps {
    passwordCriteria: PasswordCriteria
}

const ValidateNumber = styled('p')<{ number?: boolean; $direction: boolean }>(
    ({ theme, number, $direction }) => ({
        display: 'flex',
        alignItems: 'center',
        fontSize: 14,
        marginBottom: 4,
        marginRight: $direction ? 24 : 0,
        marginTop: 0,
        color: number ? theme.palette.success['main'] : theme.palette['grey'][500],
        opacity: number? 1 : 0.6,
        [theme.breakpoints.down(1080)]: {
            marginRight: 12,
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: 10,
        },
    })
)

const ValidateSpecial = styled('p')<{ specialChar?: boolean; $direction: boolean }>(
    ({ theme, specialChar, $direction }) => ({
        display: 'flex',
        alignItems: 'center',
        fontSize: 14,
        marginBottom: 4,
        marginRight: $direction ? 24 : 0,
        marginTop: 0,
        color: specialChar ? theme.palette.success['main'] : theme.palette['grey'][500],
        opacity: specialChar ? 1 : 0.6,
        [theme.breakpoints.down(1080)]: {
            marginRight: $direction ? 12 : 0,
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: 10,
            marginBottom: 8,
        },
    })
)

const ValidatePwdLength = styled('p')<{ pwdLength?: boolean; $direction: boolean }>(
    ({ theme, pwdLength, $direction }) => ({
        display: 'flex',
        alignItems: 'center',
        fontSize: 14,
        marginBottom: 0,
        marginRight: $direction ? 24 : 0,
        marginTop: 0,
        color: pwdLength ? theme.palette.success['main'] : theme.palette['grey'][500],
        opacity: pwdLength ? 1 : 0.6,
        [theme.breakpoints.down(1080)]: {
            marginRight: $direction ? 12 : 0,
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: 10,
            marginBottom: 8,
        },
    })
)

const ValidateUpperCase = styled('p')<{ upperCase?: boolean; $direction: boolean }>(
    ({ theme, upperCase, $direction }) => ({
        display: 'flex',
        alignItems: 'center',
        fontSize: 14,
        marginBottom: 4,
        marginRight: $direction ? 24 : 0,
        marginTop: 0,
        color: upperCase ? theme.palette.success['main'] : theme.palette['grey'][500],
        opacity: upperCase? 1 : 0.6,
        [theme.breakpoints.down(1080)]: {
            marginRight: $direction ? 12 : 0,
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: 10,
            marginBottom: 8,
        },
    })
)

const ValidateLowerCase = styled('p')<{ lowerCase?: boolean; $direction: boolean }>(
    ({ theme, lowerCase, $direction }) => {
        return {
            display: 'flex',
            alignItems: 'center',
            fontSize: 14,
            marginBottom: 0,
            marginRight: $direction ? 8 : 0,
            marginTop: 0,
            color: lowerCase ? theme.palette.success['main'] : theme.palette['grey'][500],
            opacity: lowerCase ? 1 : 0.6,
            [theme.breakpoints.down('sm')]: {
                fontSize: 10,
                marginBottom: 8,
            },
        }
    }
)

export const PWDRequisite = ({ passwordCriteria }: PWDRequisiteProps) => {
    const [direction, setDirection] = React.useState<boolean>(true)

    const theme = useTheme()

    const mobile = useMediaQuery(theme.breakpoints.down(768))

    const router = useRouter()

    React.useEffect(() => {
        if (router.asPath === '/profile') {
            setDirection(true)
            return
        } else {
            setDirection(false)
        }
    }, [router.asPath])
    React.useEffect(() => {
        if (mobile) {
            setDirection(false)
            return
        }
    }, [mobile])

    return (
        <Stack
            spacing={direction ? 0.35 : 0}
            direction={'row'}
            sx={{
                marginTop: '10px !important',
                marginBottom: 1,
                [theme.breakpoints.down(600)]: {
                    marginBottom: mobile ? '0 !important' : '40px !important',
                },
            }}
        >
            <Box
                sx={{
                    marginRight: direction ? 0 : { xs: 3, md: 10 },
                    display: direction ? 'flex' : 'block',
                }}
            >
                <ValidateNumber number={passwordCriteria?.number} $direction={direction}>
                    <CheckCircleIcon sx={{ fontSize: 14, marginRight: 0.5 }} />
                    Numbers
                </ValidateNumber>
                <ValidateSpecial specialChar={passwordCriteria?.specialChar} $direction={direction}>
                    <CheckCircleIcon sx={{ fontSize: 14, marginRight: 0.5 }} />
                    Special characters
                </ValidateSpecial>
                <ValidatePwdLength pwdLength={passwordCriteria?.pwdLength} $direction={direction}>
                    <CheckCircleIcon sx={{ fontSize: 14, marginRight: 0.5 }} /> At least 8
                    characters
                </ValidatePwdLength>
            </Box>
            <Box sx={{ display: direction ? 'flex' : 'block' }}>
                <ValidateUpperCase upperCase={passwordCriteria?.upperCase} $direction={direction}>
                    <CheckCircleIcon sx={{ fontSize: 14, marginRight: 0.5 }} />
                    Capital letters
                </ValidateUpperCase>
                <ValidateLowerCase lowerCase={passwordCriteria?.lowerCase} $direction={direction}>
                    <CheckCircleIcon sx={{ fontSize: 14, marginRight: 0.5 }} />
                    Lowercase letters
                </ValidateLowerCase>
            </Box>
        </Stack>
    )
}
