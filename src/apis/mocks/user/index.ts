import axiosMocksClient from '@/apis/mocks/axios-mocks-client'
import { DataParams } from '@/types/mocks/common'

export const userMocksApis = {
    fetchData(params: DataParams): Promise<any> {
        return axiosMocksClient.get('/apps/users/list', { params })
    },
    addUser(data: { [key: string]: number | string }): Promise<any> {
        return axiosMocksClient.post('/apps/users/add-user', data)
    },
    deleteUser(id: number | string): Promise<any> {
        return axiosMocksClient.delete('/apps/users/delete', { data: id })
    },
}
