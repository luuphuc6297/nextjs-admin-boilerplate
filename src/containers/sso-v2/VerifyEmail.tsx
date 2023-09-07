import { SubmitButton } from '@/components/base/button/SubmitButton'
import { TextButton } from '@/components/base/button/TextButton'
import { NumberPinField } from '@/components/base/number-pin-field'
import { Timer } from '@/components/base/timer'
import SsoLayoutV2 from '@/layouts/sso-v2'
import { Box, Stack, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import { isEmpty } from 'lodash'
import { useRouter } from 'next/router'
import * as React from 'react'

const DirectionCaption = styled(Typography)(() => ({
    fontWeight: 'normal',
    fontFamily: 'Linik Sans',
    fontSize: 16,
    height: '36px',
    display: 'flex',
    alignItems: 'center',
}))

const VerifyEmailContainer = () => {
    const [code, setCode] = React.useState<string>('')
    const [timerResetTrigger, setTimerResetTrigger] = React.useState<null | string>(null)

    const router = useRouter()


    const onChange = async (value: string) => {
        await setCode(value)
    }

    const handleSubmit = async () => { }

    const handleResend = async () => {
        // await resendEmail({ email: me?.email }).catch((err) => console.log(err))
        setTimerResetTrigger(new Date().toISOString())
    }

    return (
        <SsoLayoutV2
            alt="register"
            title="Verify your email"
            caption=" Enter the code we just sent you on your email address."
        >
            <>
                <Stack
                    direction="row"
                    justifyContent="center"
                    spacing={1}
                    sx={{ marginBottom: 3 }}
                    className="confirmation-code"
                >
                    <NumberPinField onChange={onChange} />
                </Stack>
                <Box
                    sx={{
                        display: 'flex',
                        textAlign: 'center',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <DirectionCaption>
                        Didn't receive a code?
                        <span style={{ marginRight: '6px' }} />
                        <Timer resetTrigger={timerResetTrigger}>
                            <TextButton
                                onClick={handleResend}
                                sx={{
                                    padding: 0,
                                    minWidth: 0,
                                    backgroundColor: 'transparent !important',
                                }}
                            >
                                Resend
                            </TextButton>
                        </Timer>
                    </DirectionCaption>
                    {/* <TextButton onClick={handleResend}>Resend</TextButton> */}
                </Box>
                <SubmitButton
                    sx={{ marginTop: '24px', width: { xs: '100%', md: '384px' } }}
                    onClick={handleSubmit}
                    disabled={isEmpty(code)}

                // loading={isLoading}
                >
                    &nbsp; Verify & Create account
                </SubmitButton>
            </>
        </SsoLayoutV2>
    )
}

export default VerifyEmailContainer
