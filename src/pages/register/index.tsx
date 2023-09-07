import BlankLayout from '@/layouts/BlankLayout'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'

const RegisterContainer = dynamic(() => import('@/containers/sso-v2/Register'), { ssr: false })

export default function Register() {

    return (
        <Suspense fallback={<div />}>
            <RegisterContainer />
        </Suspense>
    )
}

Register.getLayout = (page: React.ReactNode) => <BlankLayout>{page}</BlankLayout>

Register.guestGuard = true