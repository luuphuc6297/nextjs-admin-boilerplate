const auth = {
    meEndpoint: '/auth/me',
    loginEndpoint: '/jwt/login',
    registerEndpoint: '/jwt/register',
    storageTokenKeyName: 'accessToken',
    onTokenExpiration: 'refreshToken' // logout | refreshToken
}
export default auth;