export const getToken = () => {
    if (typeof window !== 'undefined') {
        const token = localStorage.getItem('access_token')
        return token || null
    }
}

export const useAuth = () => {
    return Boolean(getToken())
}
