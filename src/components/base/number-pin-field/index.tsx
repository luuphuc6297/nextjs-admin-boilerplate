import { useSettings } from '@/core/hooks/use-setting'
import { styled } from '@mui/material/styles'
import { useRef } from 'react'
import PinField from 'react-pin-field'

interface PinFieldProps {
    length?: number
    validate?: string | string[] | RegExp | ((key: string) => boolean)
    onResolveKey?: (key: string, ref?: HTMLInputElement) => any
    onRejectKey?: (key: string, ref?: HTMLInputElement) => any
    onComplete?: (code: string) => void
    onChange?: (code: string) => void
}

const defaultProps: PinFieldProps = {
    length: 6,
    validate: /^[0-9]$/,
}

// const ValidateNumber = styled('p')<{ number?: boolean; $direction: boolean }>(

const StyledPinFiled = styled(PinField)<{ mode?: string }>(({ theme, mode }) => ({
    '&.pin-field': {
        borderColor: theme.palette.success['main'],
    },
    color: mode === 'dark' ? 'white' : '',
    fontFamily: 'Linik Sans',
    fontWeight: 700,
    backgroundColor: mode === 'dark' ? '#28243D' : theme.palette.customColors.neutralBG,
    border: 'none',
    borderRadius: 4,
    fontSize: 24,
    height: 56,
    outline: 'none',
    textAlign: 'center',
    transitionDuration: '250ms',
    transitionProperty: 'background, color, border, box-shadow, transform',
    width: 56,
    '&:focus': {
        borderColor: theme.palette.success['main'],
        outline: 'none',
        transform: 'scale(1.05)',
    },
    '&:invalid': {
        animation: 'shake 3 linear 75ms',
        borderColor: theme.palette.error['main'],
        boxShadow: '0 0 0.25rem rgba(220, 53, 69, 0.5)',
    },
    [theme.breakpoints.down('sm')]: {
        fontSize: 20,
        width: 48,
        height: 48,
    },
    [theme.breakpoints.down('sm')]: {
        fontSize: 18,
        width: 40,
        height: 40,
    },
}))

export const NumberPinField = ({ onChange }: PinFieldProps) => {
    const { settings } = useSettings()

    // ** Vars
    const { mode } = settings

    const ref = useRef<any>(null)

    if (ref.current) {
        ref.current.forEach((input: any) => {
            if (input.value !== '') {
                input.classList.add('pin-field')
            } else {
                input.classList.remove('pin-field')
            }
        })
    }

    return (
        <StyledPinFiled
            ref={ref}
            mode={mode}
            length={defaultProps.length}
            validate={defaultProps.validate}
            onChange={onChange}
        />
    )
}
