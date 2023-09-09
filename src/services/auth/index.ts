import { authApis } from '@/apis/auth'
import { useStore } from '@/store/store'
import { Response } from '@/types/common'
import {
    ForgotPasswordForm,
    LoginForm,
    ResetPasswordForm,
    SignUpForm,
    VerifyEmailForm,
} from '@/types/forms'
import {
    ResponseForgotPassword,
    ResponseLogin,
    ResponseResetPassword,
    ResponseSignUp,
} from '@/types/user'
import {
    UseMutationOptions,
    UseMutationResult,
    useMutation,
    useQuery,
    useQueryClient,
} from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { useRouter } from 'next/router'
import toast from 'react-hot-toast'

const auKeys = {
    all: () => ['auth-services'] as const,
    currentUser: () => [...auKeys.all(), 'current-user'] as const,
}

export const useLogin = (
    config?: UseMutationOptions<Response<ResponseLogin>, AxiosError, LoginForm>
): UseMutationResult<Response<ResponseLogin>, AxiosError, LoginForm, unknown> => {
    const queryClient = useQueryClient();
    const router = useRouter();
    const { updateUser } = useStore();

    const mutationFn = (payload: LoginForm) => authApis.login(payload);

    return useMutation({
        mutationFn,
        onSuccess: (data, variables, context) => {
            config?.onSuccess?.(data, variables, context);
            queryClient.invalidateQueries({ queryKey: ['auth-services'] });
            router.push('/')
            return;
        },
        onError: (err: AxiosError<any>, variables: LoginForm) => {

            if (err?.response?.data?.message === 'User not verified!') {
                updateUser({
                    email: variables?.email,
                });
                router.push('/verify-email');
                return;
            }

            toast.error(err?.response?.data?.message || err.message);
        },
        ...config,
    });
};

export const useRegister = (
    config?: UseMutationOptions<Response<ResponseSignUp>, AxiosError<any>, unknown>
) => {
    const mutationFn = (payload: SignUpForm) => authApis.register(payload)

    return useMutation({
        mutationFn,
        onSuccess: (data, variables, context) => {
            toast.success('Sent email successful')
            config?.onSuccess?.(data, variables, context)
        },
        onError: (error: AxiosError<any>) => {
            toast.error(error?.response?.data?.message || error.message)
        },
        ...config,
    })
}

export const useVerifyEmail = (
    config?: UseMutationOptions<Response<ResponseLogin>, AxiosError<any>, unknown, unknown>
): UseMutationResult<Response<ResponseLogin>, AxiosError<any>, any> => {
    const mutationFn = (payload: VerifyEmailForm) => authApis.verify_email(payload)

    return useMutation({
        mutationFn,
        onSuccess: (data, variables, context) => {
            toast.success('Verified email successful')
            config?.onSuccess?.(data, variables, context)
        },
        onError: (err) => {
            toast.error(err?.response?.data?.message || err.message)
        },
    })
}

export const useForgotPassword = (
    config?: UseMutationOptions<ResponseForgotPassword, AxiosError<any>, unknown>
): UseMutationResult<ResponseForgotPassword, AxiosError<any>, any, unknown> => {
    const mutationFn = (payload: ForgotPasswordForm) => authApis.forgot_password(payload)

    return useMutation({
        mutationFn,
        onSuccess: (data, variables, context) => {
            toast.success('Sent email successfully')
            config?.onSuccess?.(data, variables, context)
        },
        onError: (err: AxiosError<any>) => {
            toast.error(err?.response?.data?.message || err.message)
        },
    })
}

export const useResendEmail = (
    config?: UseMutationOptions<ResponseResetPassword, AxiosError<any>, unknown>
): UseMutationResult<ResponseResetPassword, AxiosError<any>, any> => {
    const mutationFn = (payload: ForgotPasswordForm) => authApis.resend_email(payload)

    return useMutation({
        mutationFn,
        onSuccess: (data, variables, context) => {
            toast.success('Resend code successful')
            config?.onSuccess?.(data, variables, context)
        },
        onError: (err: AxiosError<any>) => {
            toast.error(err?.response?.data?.message || err?.message)
        },
    })
}

export const useResetPassword = (
    config?: UseMutationOptions<ResponseResetPassword, AxiosError<any>, unknown>
): UseMutationResult<ResponseResetPassword, AxiosError<any>, any> => {
    const mutationFn = (payload: ResetPasswordForm) => authApis.reset_password(payload)

    return useMutation({
        mutationFn,
        onSuccess: (data, variables, context) => {
            toast.success('Reset password successful')
            config?.onSuccess?.(data, variables, context)
        },
        onError: (err) => {
            toast.error(err?.response?.data?.message || err.message)
        },
    })
}

export const useQueryUser = () => {
    const { storeUser } = useStore()

    const queryClient = useQueryClient()

    return useQuery<Response<ResponseLogin> | null, Error>({
        queryKey: auKeys.currentUser(),
        queryFn: () => {
            return null
        },
    })
}
