import { SubmitButton } from '@/components/base/button/SubmitButton'
import { InputField } from '@/components/base/text-filed'
import themeConfig from '@/configs/theme'
import BlankLayout from '@/layouts/BlankLayout'
import SsoLayoutV2 from '@/layouts/sso-v2'
import { LoginForm } from '@/types/forms'
import { LoginSchema } from '@/validations'
import { yupResolver } from '@hookform/resolvers/yup'
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined'
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined'
import { Box, Checkbox, IconButton, InputAdornment, Link } from '@mui/material'
import MuiFormControlLabel, { FormControlLabelProps } from '@mui/material/FormControlLabel'
import { styled } from '@mui/material/styles'
import { debounce } from 'lodash'
import * as React from 'react'
import { useForm } from 'react-hook-form'

const FormControlLabel = styled(MuiFormControlLabel)<FormControlLabelProps>(({ theme }) => ({
    '& .MuiFormControlLabel-label': {
        fontSize: '0.875rem',
        color: theme.palette.text.secondary
    }
}))

const LinkStyled = styled(Link)(({ theme }) => ({
    fontSize: '0.875rem',
    textDecoration: 'none',
    color: theme.palette.primary.main
}))

const LoginContainer = () => {
    const [showPassword, setShowPassword] = React.useState<boolean>(false)

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
        formState: { isSubmitting },
    } = useForm<LoginForm>({
        mode: 'onChange',
        defaultValues: initialValues,
        resolver: yupResolver(LoginSchema),
    })

    const handleFormSubmit = (formValues: LoginForm) => { }

    const handleClickShowPassword = () => {
        setShowPassword((showPassword) => !showPassword)
    }

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
    }

    return (
        <SsoLayoutV2 alt="login" title={`Welcome to ${themeConfig.templateName}! 👋🏻`} caption="Please sign-in to your account and start the adventure">
            <form autoComplete='off' onSubmit={handleSubmit(handleFormSubmit)}>
                <InputField
                    id="email-address"
                    name="email"
                    inputLabel="Email address"
                    control={control}
                    sx={{ display: 'flex', mb: 4 }}
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
                    sx={{ mb: 4, display: 'flex', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'space-between' }}
                >
                    <FormControlLabel control={<Checkbox />} label='Remember Me' />

                    <LinkStyled href='/pages/auth/forgot-password-v2'>Forgot Password?</LinkStyled>
                </Box>

                <SubmitButton
                    sx={{
                        width: { xs: '100%', md: '384px' },
                        height: 44,
                        fontWeight: 700,
                        mb: ' 24px',
                        fontFamily: 'Linik Sans',
                    }}
                    disabled={isSubmitting}

                // loading={isLoading}
                >
                    &nbsp;Login
                </SubmitButton>
            </form>
        </SsoLayoutV2>
    )
}

LoginContainer.getLayout = (page: React.ReactNode) => <BlankLayout>{page}</BlankLayout>

LoginContainer.guestGuard = true

export default LoginContainer