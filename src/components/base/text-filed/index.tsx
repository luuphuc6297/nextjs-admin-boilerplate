import { ErrorCaption } from '@/components/base/typography/error'
import { Box, TextField, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import { useRouter } from 'next/router'
import { InputHTMLAttributes } from 'react'
import { Control, useController } from 'react-hook-form'

export interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string
    control?: Control<any>
    label?: string
    InputProps?: any
    inputLabel?: string
    [x: string]: any
    onKeyUp?: () => void
}

const StyledInputLabel = styled(Typography)(() => ({
    color: 'rgba(35, 34, 51, 1)',
    fontFamily: 'Linik Sans',
    fontSize: 14,
    lineHeight: '20px',
    fontWeight: 600,
    marginBottom: 6,
}))

export function InputField({
    id,
    name,
    control,
    label,
    InputProps,
    inputLabel,
    sx,
    onKeyUp,
    ...inputProps
}: InputFieldProps) {
    const {
        field: { value, onChange, onBlur, ref },
        fieldState: { invalid, error },
    } = useController({
        name,
        control,
    })
    const router = useRouter()

    return (
        <Box>
            {inputLabel && (
                <StyledInputLabel>
                    {inputLabel}
                    {router.asPath === '/sign-up' ? (
                        <span style={{ color: 'rgba(248, 134, 1, 1)' }}>*</span>
                    ) : (
                        ''
                    )}
                </StyledInputLabel>
            )}
            <TextField
                id={id}
                fullWidth
                size="small"
                margin="normal"
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                onKeyUp={onKeyUp}
                variant="outlined"
                inputRef={ref}
                error={invalid}
                label={label}
                InputProps={InputProps}
                inputProps={inputProps}
                sx={sx}
            />
            {error && <ErrorCaption error={true}>{error?.message}</ErrorCaption>}
        </Box>
    )
}
