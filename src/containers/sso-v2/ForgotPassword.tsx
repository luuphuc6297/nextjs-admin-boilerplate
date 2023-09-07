import { SubmitButton } from '@/components/base/button/SubmitButton'
import { SsoForm } from '@/components/base/forms/sso'
import { InputField } from '@/components/base/text-filed'
import SsoLayoutV2 from '@/layouts/sso-v2'
import { ForgotPasswordForm } from '@/types/forms'
import { ForgotPasswordSchema } from '@/validations'
import { yupResolver } from '@hookform/resolvers/yup'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { Typography } from '@mui/material'
import { styled, useTheme } from '@mui/material/styles'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'

const LinkStyled = styled(Link)(({ theme }) => ({
    display: 'flex',
    fontSize: '0.875rem',
    alignItems: 'center',
    textDecoration: 'none',
    justifyContent: 'center',
    color: theme.palette.primary.main,
    '&:hover': {
        color: 'white'
    }
}))

const ForgotPasswordContainer = () => {
    const theme = useTheme()

    const initialValues: ForgotPasswordForm = {
        email: '',
    } as ForgotPasswordForm

    const router = useRouter()

    const {
        control,
        handleSubmit,
        formState: { isSubmitting, isValid },
    } = useForm<ForgotPasswordForm>({
        mode: 'onChange',
        defaultValues: initialValues,
        resolver: yupResolver(ForgotPasswordSchema),
    })


    const handleFormSubmit = (formValues: ForgotPasswordForm) => {
    }

    return (
        <SsoLayoutV2
            alt="forgot-password"
            title="Forgot Password? 🔒"
            caption="Enter your email and we&prime;ll send you instructions to reset your password"
        >
            <>
                <SsoForm onSubmit={handleSubmit(handleFormSubmit)}>
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
                            height: 96,
                        }}
                    />
                    <SubmitButton
                        sx={{
                            width: { xs: '100%', md: '384px' },
                            height: 44,
                            fontWeight: 700,
                            marginBottom: 3,
                        }}
                        disabled={isSubmitting || !isValid}

                    // loading={isLoading}
                    >
                        &nbsp;Send email
                    </SubmitButton>
                    <Typography variant='body2' sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <LinkStyled href='/login'>
                            <ArrowBackIcon
                                sx={{
                                    width: 18, marginRight: 1, '&:hover': {
                                        color: 'white',
                                    }
                                }}
                                fontSize="medium"
                            />
                            <span>Back to login</span>
                        </LinkStyled>
                    </Typography>
                </SsoForm>
            </>
        </SsoLayoutV2>
    )
}


export default ForgotPasswordContainer;