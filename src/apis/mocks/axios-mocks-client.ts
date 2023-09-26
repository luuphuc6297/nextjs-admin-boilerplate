import { getToken } from '@/utils'
import axios from 'axios'

const axiosMocksClient = axios.create({
    baseURL: 'http://localhost:3000',
    headers: {
        'Content-Type': 'application/json',
    },
})

axiosMocksClient.interceptors.request.use(
    function (config) {
        // Do something before request is sent
        const token = getToken()
        if (token) {
            config!.headers!.Authorization = `Bearer ${token}`
        }
        return config
    },
    function (error) {
        // Do something with request error
        return Promise.reject(error)
    }
)

// Add a response interceptor
axiosMocksClient.interceptors.response.use(
    function (response) {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        return response.data
    },
    function (error) {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        return Promise.reject(error)
    }
)

export default axiosMocksClient
