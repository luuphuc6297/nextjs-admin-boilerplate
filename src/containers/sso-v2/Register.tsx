import { SubmitButton } from '@/components/base/button/SubmitButton'
import { SsoForm } from '@/components/base/forms/sso'
import { PWDRequisite, PasswordCriteria } from '@/components/base/pwd'
import { InputField } from '@/components/base/text-filed'
import { useSettings } from '@/core/hooks/use-setting'
import SsoLayoutV2 from '@/layouts/sso-v2'
import { SignUpForm } from '@/types/forms'
import { RegisterSchema } from '@/validations'
import { yupResolver } from '@hookform/resolvers/yup'
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined'
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined'
import { Box, Divider, IconButton, InputAdornment, Link, Typography, useMediaQuery, useTheme } from '@mui/material'
import { styled } from '@mui/material/styles'
import * as React from 'react'
import { useForm } from 'react-hook-form'

const LinkStyled = styled(Link)(({ theme }) => ({
    fontSize: '0.875rem',
    textDecoration: 'none',
    color: theme.palette.primary.main,
    '&:hover': {
        color: 'white'
    }
}))

const RegisterContainer = () => {
    const [showPassword, setShowPassword] = React.useState<boolean>(false)
    const [passwordCriteria, setPasswordCriteria] = React.useState<PasswordCriteria>({
        lowerCase: false,
        upperCase: false,
        number: false,
        specialChar: false,
        pwdLength: false,
    })

    // ** Hooks
    const theme = useTheme()
    const { settings } = useSettings()

    // ** Vars
    const { skin } = settings
    const hidden = useMediaQuery(theme.breakpoints.down('md'))

    const imageSource = skin === 'bordered' ? 'auth-v2-register-illustration-bordered' : 'auth-v2-register-illustration'

    const initialValues = React.useMemo(
        () => ({
            email: '',
            first_name: '',
            last_name: '',
            password: '',
        }),
        []
    )

    const {
        control,
        handleSubmit,
        formState: { isSubmitting, errors },
        watch,
    } = useForm<SignUpForm>({
        mode: 'onChange',
        defaultValues: initialValues,
        resolver: yupResolver(RegisterSchema),
    })


    const handleOnKeyUp = () => {
        const watchPassword = watch('password')
        const lowerCase = /[a-z]/.test(watchPassword)
        const upperCase = /[A-Z]/.test(watchPassword)
        const number = /[0-9]/.test(watchPassword)
        const specialChar = /[!@#$%^&*]/.test(watchPassword)
        const pwdLength = watchPassword.length >= 8

        setPasswordCriteria({
            lowerCase,
            upperCase,
            number,
            specialChar,
            pwdLength,
        })
    }

    const handleClickShowPassword = React.useCallback(() => {
        setShowPassword((showPassword) => !showPassword)
    }, [])

    const handleMouseDownPassword = React.useCallback(
        (event: React.MouseEvent<HTMLButtonElement>) => {
            event.preventDefault()
        },
        []
    )

    const handleSubmitReg = React.useCallback(async (formValues: SignUpForm) => { }, [])

    return (
        <SsoLayoutV2 alt="register" title="Adventure starts here 🚀" caption="Make your app management easy and fun!">
            <>
                <SsoForm onSubmit={handleSubmit(handleSubmitReg)}>
                    <InputField
                        id="email-address"
                        name="email"
                        inputLabel="Email address"
                        placeholder="name@gmail.com"
                        control={control}
                        sx={{
                            height: 44,
                            marginTop: 0,
                            marginBottom: 0.5,
                        }}
                        boxSx={{
                            height: 96
                        }}
                    />
                    <InputField
                        id="first_name"
                        name="first_name"
                        inputLabel="First Name"
                        placeholder="John"
                        control={control}
                        sx={{
                            height: 44,
                            marginTop: 0,
                            marginBottom: 0.5,
                        }}
                        boxSx={{
                            height: 96
                        }}
                    />
                    <InputField
                        id="last_name"
                        name="last_name"
                        inputLabel="Last Name"
                        placeholder="Wick"
                        control={control}
                        sx={{
                            width: 384,
                            height: 44,
                            marginTop: 0,
                            marginBottom: 0.5,
                            [theme.breakpoints.down('sm')]: {
                                width: 320,
                            },
                            [theme.breakpoints.down(480)]: {
                                width: 280,
                            },
                        }}
                        boxSx={{
                            height: 96
                        }}
                    />
                    <InputField
                        id="password"
                        name="password"
                        control={control}
                        inputLabel="Password"
                        placeholder="Password"
                        type={showPassword ? 'text' : 'password'}
                        onKeyUp={handleOnKeyUp}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {showPassword ? (
                                            <VisibilityOffOutlinedIcon
                                                sx={{ width: 20, height: 20 }}
                                            />
                                        ) : (
                                            <VisibilityOutlinedIcon
                                                sx={{ width: 20, height: 20 }}
                                            />
                                        )}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                        sx={{
                            height: 44,
                            marginTop: 0,
                            marginBottom: 0.5,
                        }}
                        boxSx={{
                            height: 96
                        }}
                    />
                    <PWDRequisite passwordCriteria={passwordCriteria} />

                    <SubmitButton
                        sx={{
                            width: { xs: '100%', md: '384px' },
                            height: 44,
                            marginBottom: 3,
                            marginTop: 3,
                        }}
                        disabled={isSubmitting}

                    // loading={isLoading}
                    >
                        &nbsp;Sign up
                    </SubmitButton>
                </SsoForm>
                <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center' }}>
                    <Typography variant='body2' sx={{ mr: 2 }}>
                        Already have an account?
                    </Typography>
                    <Typography variant='body2'>
                        <LinkStyled href='/login/'>Sign in instead</LinkStyled>
                    </Typography>
                </Box>
                <Divider sx={{ my: theme => `${theme.spacing(5)} !important` }}>or</Divider>
                {/* <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <IconButton
                        href='/'
                        component={Link}
                        sx={{ color: '#497ce2' }}
                        onClick={(e: React.MouseEvent<HTMLElement>) => e.preventDefault()}
                    >
                        <Icon icon='mdi:facebook' />
                    </IconButton>
                    <IconButton
                        href='/'
                        component={Link}
                        sx={{ color: '#1da1f2' }}
                        onClick={(e: React.MouseEvent<HTMLElement>) => e.preventDefault()}
                    >
                        <Icon icon='mdi:twitter' />
                    </IconButton>
                    <IconButton
                        href='/'
                        component={Link}
                        onClick={(e: React.MouseEvent<HTMLElement>) => e.preventDefault()}
                        sx={{ color: theme => (theme.palette.mode === 'light' ? '#272727' : 'grey.300') }}
                    >
                        <Icon icon='mdi:github' />
                    </IconButton>
                    <IconButton
                        href='/'
                        component={Link}
                        sx={{ color: '#db4437' }}
                        onClick={(e: React.MouseEvent<HTMLElement>) => e.preventDefault()}
                    >
                        <Icon icon='mdi:google' />
                    </IconButton>
                </Box> */}
            </>
        </SsoLayoutV2>
    )
}

export default RegisterContainer
