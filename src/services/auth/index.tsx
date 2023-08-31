// import { UseMutationOptions, UseMutationResult, useMutation } from "@tanstack/react-query"
// import { Response } from "@/types/common"
// import { ResponseLogin } from '@/types/user'
// import { AxiosError } from "axios"
// import { useRouter } from "next/router"
// import { LoginForm } from "@/types/forms"

// const auKeys = {
//     all: () => ['au_services'] as const,
//     whoAmI: () => [...auKeys.all(), 'who_am_i'] as const,
//     questions: () => ['questions'] as const,
// }

// export const useLogin = (
//     config?: UseMutationOptions<Response<ResponseLogin>, AxiosError<any>, unknown, unknown>
// ): UseMutationResult<Response<ResponseLogin>, AxiosError<any>, any, unknown> => {
//     const router = useRouter()
//     // const { updateUser } = useHiyieldStore()

//     // return useMutation((payload: LoginForm) => authApis.login(payload), {
//     //     onSuccess: (data: Response<ResponseLogin>, variables: unknown, context: unknown) => {
//     //         // toast.success('Login successful')
//     //         config?.onSuccess?.(data, variables, context)
//     //     },
//     //     onError: (err, variables) => {
//     //         if (err?.response?.data?.message === 'User not verifed!') {
//     //             // updateUser({
//     //             //     email: variables.email,
//     //             // })
//     //             router.push('/verify-email')
//     //             return
//     //         }

//     //         // toast.error(err?.response?.data?.message || err.message)
//     //     },
//     // })
//     return {}
// }

export { }