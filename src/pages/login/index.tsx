import dynamic from 'next/dynamic'
import { Suspense } from 'react'

const LoginContainer = dynamic(() => import('@/containers/sso-v2/Login'), { ssr: false })

export default function Login() {
    return (
        <Suspense fallback={<div />}>
            <LoginContainer />
        </Suspense>
    )
}
