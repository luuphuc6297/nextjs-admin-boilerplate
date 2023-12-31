import { SubmitButton } from '@/components/base/button/SubmitButton'
import { SsoForm } from '@/components/base/forms/sso'
import { InputField } from '@/components/base/text-filed'
import themeConfig from '@/configs/theme'
import { useAuth } from '@/hooks/use-auth'
import SsoLayoutV2 from '@/layouts/sso-v2'
import { useLogin } from '@/services/auth'
import { LoginForm } from '@/types/forms'
import { LoginSchema } from '@/validations'
import { yupResolver } from '@hookform/resolvers/yup'
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined'
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined'
import { Box, Checkbox, Divider, IconButton, InputAdornment, Typography } from '@mui/material'
import MuiFormControlLabel, { FormControlLabelProps } from '@mui/material/FormControlLabel'
import { styled, useTheme } from '@mui/material/styles'
import { debounce } from 'lodash'
import Link from 'next/link'
import * as React from 'react'
import { useForm } from 'react-hook-form'

const FormControlLabel = styled(MuiFormControlLabel)<FormControlLabelProps>(({ theme }) => ({
    '& .MuiFormControlLabel-label': {
        fontSize: '0.875rem',
        color: theme.palette.text.secondary,
    },
}))

const LinkStyled = styled(Link)(({ theme }) => ({
    fontSize: '0.875rem',
    textDecoration: 'none',
    color: theme.palette.primary.main,
    '&:hover': {
        color: 'white'
    }
}))

  
const LoginContainer = () => {
    const [showPassword, setShowPassword] = React.useState<boolean>(false)
    const [rememberMe, setRememberMe] = React.useState<boolean>(true)

    const theme = useTheme()
    const auth = useAuth();

    const { data, mutateAsync: login, isPending } = useLogin()

    const initialValues: LoginForm = React.useMemo(
        () => ({
            email: '',
            password: '',
        }),
        []
    )

    const {
        control,
        handleSubmit,
        trigger,
        setError,
        formState: { isSubmitting, isValid },
    } = useForm<LoginForm>({
        // Change to production
        mode: 'onBlur',
        defaultValues: initialValues,
        resolver: yupResolver(LoginSchema),
    })

    const handleFormSubmit = (formValues: LoginForm) => {
        const { email, password } = formValues

        // login(formValues)
        auth.login({ email, password, rememberMe }, () => {
            setError('email', {
                type: 'manual',
                message: 'Email or Password is invalid'
            })
        })
    }

    const handleClickShowPassword = () => {
        setShowPassword((showPassword) => !showPassword)
    }

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
    }

    return (
        <SsoLayoutV2
            alt="login"
            title={`Welcome to ${themeConfig.templateName}! 👋🏻`}
            caption="Please sign-in to your account and start the adventure"
        >
            <>
                <SsoForm onSubmit={handleSubmit(handleFormSubmit)}>
                    <InputField
                        id="email-address"
                        name="email"
                        inputLabel="Email address"
                        control={control}
                        sx={{
                            display: 'flex',
                            height: 44,
                            marginTop: 0.5,
                        }}
                        boxSx={{
                            height: 96
                        }}
                        onChange={debounce(async () => {
                            await trigger('email')
                        }, 1000)}
                    />
                    <InputField
                        id="password"
                        name="password"
                        control={control}
                        inputLabel="Password"
                        type={showPassword ? 'text' : 'password'}
                        sx={{
                            height: 44,
                            marginTop: 0,
                            marginBottom: 0.5,
                        }}
                        boxSx={{
                            height: 96
                        }}
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
                                            <VisibilityOutlinedIcon fontSize="small" />
                                        ) : (
                                            <VisibilityOffOutlinedIcon fontSize="small" />
                                        )}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                    />

                    <Box
                        sx={{
                            mb: 4,
                            display: 'flex',
                            alignItems: 'center',
                            flexWrap: 'wrap',
                            justifyContent: 'space-between',
                        }}
                    >
                        <FormControlLabel control={<Checkbox checked={rememberMe} onChange={e => setRememberMe(e.target.checked)} />} label="Remember Me" />

                        <LinkStyled href="/forgot-password">Forgot Password?</LinkStyled>
                    </Box>

                    <SubmitButton
                        sx={{
                            width: { xs: '100%', md: '384px' },
                            height: 44,
                            fontWeight: 700,
                            mb: ' 24px',
                        }}
                        disabled={isSubmitting}
                        loading={isPending}
                    >
                        &nbsp;Login
                    </SubmitButton>
                </SsoForm>
                <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center' }}>
                    <Typography variant='body2' sx={{ mr: 2 }}>
                        New on our platform?
                    </Typography>
                    <Typography variant='body2'>
                        <LinkStyled href='/register'>Create an account</LinkStyled>
                    </Typography>
                </Box>
                <Divider sx={{ my: `${theme.spacing(5)} !important` }}>or</Divider>
            </>
        </SsoLayoutV2>
    )
}

export default LoginContainer
