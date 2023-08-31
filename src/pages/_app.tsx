import AclGuard from '@/components/auth/AclGuard'
import AuthGuard from '@/components/auth/AuthGuard'
import GuestGuard from '@/components/auth/GuestGuard'
import { defaultACLObj } from '@/configs/acl'
import themeConfig from '@/configs/theme'
import { AuthProvider } from '@/context/AuthContext'
import Spinner from '@/core/components/spinner'
import WindowWrapper from '@/core/components/window-wrapper'
import { SettingsConsumer, SettingsProvider } from '@/core/context/setting'
import ThemeComponent from '@/core/theme/ThemeComponent'
import { createEmotionCache } from '@/core/utils/create-emotion-cache'
import UserLayout from '@/layouts/UserLayout'
import '@/mockup'
import { EmotionCache } from '@emotion/cache'
import { CacheProvider } from '@emotion/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { Router } from 'next/router'
import NProgress from 'nprogress'
import * as React from 'react'
import 'react-perfect-scrollbar/dist/css/styles.css'
import 'react-toastify/dist/ReactToastify.min.css'
import '../styles/global.css'

type ExtendedAppProps = AppProps & {
    Component: NextPage
    emotionCache: EmotionCache
}

type GuardProps = {
    authGuard: boolean
    guestGuard: boolean
    children: React.ReactNode
}

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache()

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: 0,
            refetchOnWindowFocus: false,
        },
    },
})

// ** Pace Loader
if (themeConfig.routingLoader) {
    Router.events.on('routeChangeStart', () => {
        NProgress.start()
    })
    Router.events.on('routeChangeError', () => {
        NProgress.done()
    })
    Router.events.on('routeChangeComplete', () => {
        NProgress.done()
    })
}

const Guard = ({ children, authGuard, guestGuard }: GuardProps) => {
    if (guestGuard) {
        return <GuestGuard fallback={<Spinner />}>{children}</GuestGuard>
    } else if (!guestGuard && !authGuard) {
        return <>{children}</>
    } else {
        return <AuthGuard fallback={<Spinner />}>{children}</AuthGuard>
    }
}

const App = (props: ExtendedAppProps) => {
    const { Component, emotionCache = clientSideEmotionCache, pageProps } = props


    const contentHeightFixed = Component?.contentHeightFixed ?? false

    const getLayout =
        Component.getLayout ?? (page => <UserLayout contentHeightFixed={contentHeightFixed}>{page}</UserLayout>)

    const setConfig = Component.setConfig ?? undefined

    const authGuard = Component.authGuard ?? true

    const guestGuard = Component.guestGuard ?? false

    const aclAbilities = Component.acl ?? defaultACLObj

    return (
        <CacheProvider value={emotionCache}>

            <AuthProvider>
                <QueryClientProvider client={queryClient}>
                    <SettingsProvider {...(setConfig ? { pageSettings: setConfig() } : {})}>
                        <SettingsConsumer>
                            {({ settings }) => {
                                return (
                                    <ThemeComponent settings={settings}>
                                        <WindowWrapper>
                                            <Guard authGuard={authGuard} guestGuard={guestGuard}>
                                                <AclGuard aclAbilities={aclAbilities} guestGuard={guestGuard}>
                                                    {getLayout(<Component {...pageProps} />)}
                                                </AclGuard>
                                            </Guard>
                                        </WindowWrapper>
                                    </ThemeComponent>
                                )
                            }}
                        </SettingsConsumer>
                    </SettingsProvider>
                </QueryClientProvider>
            </AuthProvider>
        </CacheProvider>
    )
}

export default App