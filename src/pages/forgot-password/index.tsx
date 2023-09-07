import BlankLayout from '@/layouts/BlankLayout'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'

const ForgotPasswordContainer = dynamic(() => import('@/containers/sso-v2/ForgotPassword'), { ssr: false })

export default function ForgotPassword() {

    return (
        <Suspense fallback={<div />}>
            <ForgotPasswordContainer />
        </Suspense>
    )
}

ForgotPassword.getLayout = (page: React.ReactNode) => <BlankLayout>{page}</BlankLayout>

ForgotPassword.guestGuard = true