import { LoadingButton } from '@mui/lab'
import { styled } from '@mui/material/styles'

interface SubmitButtonProps {
    children: React.ReactNode
    [x: string]: any
}
const StyledButton = styled(LoadingButton)(({ theme }) => ({
    textTransform: 'initial',
    fontSize: 16,
    borderRadius: 4,
    whiteSpace: 'nowrap',
    boxShadow: 'none',
}))

export const SubmitButton = ({ children, ...props }: SubmitButtonProps) => {
    return (
        <StyledButton color="primary" variant="contained" type="submit" {...props}>
            {children}
        </StyledButton>
    )
}
