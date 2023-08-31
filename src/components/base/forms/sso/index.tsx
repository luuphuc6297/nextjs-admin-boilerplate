
import { styled } from '@mui/material/styles';
import { HTMLProps } from 'react';

interface SsoFormProps extends Omit<HTMLProps<HTMLFormElement>, 'as'> {
    children: React.ReactNode;
}

export const StyledSsoForm = styled('form')(({ theme }) => ({
    margin: 'auto',
}))


export const SsoForm = ({ children, ...props }: SsoFormProps) => {
    return <StyledSsoForm {...props}>{children}</StyledSsoForm>
}