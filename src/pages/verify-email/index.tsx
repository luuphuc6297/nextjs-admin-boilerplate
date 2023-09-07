
import BlankLayout from '@/layouts/BlankLayout'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'

const VerifyEmailContainer = dynamic(() => import('@/containers/sso-v2/VerifyEmail'), {
    ssr: false,
})

export default function Verify() {
    return (
        <Suspense fallback={<div />}>
            <VerifyEmailContainer />
        </Suspense>
    )
}

Verify.getLayout = (page: React.ReactNode) => <BlankLayout>{page}</BlankLayout>

Verify.guestGuard = true