import { authApis } from '@/apis/auth'
import { useStore } from '@/store/store'
import { Response } from '@/types/common'
import { LoginForm } from '@/types/forms'
import { ResponseLogin } from '@/types/user'
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
    config: UseMutationOptions<Response<ResponseLogin>, AxiosError<any>, LoginForm>
): UseMutationResult<Response<ResponseLogin>, AxiosError<any>, LoginForm, unknown> => {
    const router = useRouter()
    const { updateUser } = useStore()
    const queryClient = useQueryClient()

    const mutationFn: any = (payload: LoginForm) => authApis.login(payload)

    return useMutation({
        mutationFn: mutationFn,
        onSuccess: (data, variables, context) => {
            config?.onSuccess?.(data, variables, context)
            queryClient.invalidateQueries({ queryKey: ['auth-services'] })
        },
        onError: (err, variables) => {
            if (err?.response?.data?.message === 'User not verified!') {
                updateUser({
                    email: variables.email,
                })
                router.push('/verify-email')
                return
            }
            toast.error(err?.response?.data?.message || err.message)
        },
        ...config,
    })
}

export const useQueryUser = () => {
    const { storeUser } = useStore()

    const queryClient = useQueryClient()

    return useQuery<Response<ResponseLogin> | null, Error>({
        queryKey: auKeys.currentUser(),
        queryFn: () => {
            return null;
        },
    })
}
