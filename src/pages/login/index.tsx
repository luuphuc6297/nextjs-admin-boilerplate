import BlankLayout from '@/layouts/BlankLayout'
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

Login.getLayout = (page: React.ReactNode) => <BlankLayout>{page}</BlankLayout>

Login.guestGuard = true