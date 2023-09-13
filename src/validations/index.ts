import * as yup from 'yup'

const passwordValidations = yup
    .string()
    .required('Please enter your password')
    .min(8, 'Type at least 8 characters')
    .max(50, 'Exceeded 50 characters')

// .matches(
//     /(?=.*\d)(?=.*[!@#$%^&*]+)(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
//     'Password must contains all conditions below:'
// )

export const HomeSchema = yup.object().shape({
    email: yup.string().required('Please enter your email').email('Must be an email'),
})

export const LoginSchema = yup.object().shape({
    email: yup.string().required('Please enter your email'),
    password: yup
        .string()
        .required('Please enter your password')
    // .min(8, 'Type at least 8 characters.'),
})

export const RegisterSchema = yup.object().shape({
    email: yup.string().required('Please enter your email').email('Must be an email'),
    first_name: yup.string().required('Please enter your first name'),
    last_name: yup.string().required('Please enter your last name'),
    password: passwordValidations,
})

export const ForgotPasswordSchema = yup.object().shape({
    email: yup.string().required('Please enter your email').email('Must be an email'),
})

export const ResetPasswordSchema = yup.object().shape({
    password: passwordValidations,
})

export const UpdateInfoSchema = yup.object().shape({
    first_name: yup
        .string()
        .required('Please enter your first name')
        .max(20, 'Exceeded 20 characters'),
    last_name: yup
        .string()
        .required('Please enter your last name')
        .max(20, 'Exceeded 20 characters'),
})

export const UpdatePasswordSchema = yup.object().shape({
    newPassword: passwordValidations,
    oldPassword: passwordValidations,
})
