import axios from 'axios'

const axiosOpenAiClient = axios.create({
    baseURL: 'http://localhost:3001',
    headers: {
        'Content-Type': 'application/json',
    },
})

axiosOpenAiClient.interceptors.request.use(
    function (config) {
        config!.headers!.Authorization = `Bearer ${process.env.OPENAI_API_KEY}`
        return config
    },
    function (error) {
        // Do something with request error
        return Promise.reject(error)
    }
)

// Add a response interceptor
axiosOpenAiClient.interceptors.response.use(
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

export default axiosOpenAiClient
