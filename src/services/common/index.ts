import {
    QueryCache,
    QueryFunction,
    QueryKey,
    UseQueryOptions,
    UseQueryResult,
    useQuery,
} from '@tanstack/react-query'

const queryCache = new QueryCache({
    onError: (error) => {
        console.error(error)
    },
})

export const useQueryWithCache = <TData = unknown, TQueryFnData = TData, TError = unknown>(
    queryKey: QueryKey,
    queryFn?: QueryFunction<TQueryFnData>,
    config?: any
): UseQueryResult<TData, TError> => {
    const queryConfig: UseQueryOptions<TQueryFnData, TError, TData, QueryKey> = {
        staleTime: 1000 * 60 * 5,
        cacheTime: 1000 * 60 * 60,
        queryCache,
        queryFn,
        queryKey,
        ...config,
    }
    return useQuery<TQueryFnData, TError, TData>(queryConfig)
}
