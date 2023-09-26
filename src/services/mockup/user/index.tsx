import { userMocksApis } from '@/apis/mocks/user'
import { DataParams } from '@/types/mocks/common'
import { useQuery } from '@tanstack/react-query'

const userKeys = {
    all: () => ['user-mocks-services'] as const,
}

export const useFetchData = (params: DataParams) => {
    return useQuery({
        queryKey: userKeys.all(),
        queryFn: () => userMocksApis.fetchData(params),
    })
}
