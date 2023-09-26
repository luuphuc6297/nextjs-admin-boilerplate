import axiosMocksClient from '@/apis/mocks/axios-mocks-client'

interface DataParams {
    q: string
}

export const permissionsMocksApis = {
    fetchData(params: DataParams): Promise<any> {
        return axiosMocksClient.get('/apps/permissions/data', { params })
    },
}
