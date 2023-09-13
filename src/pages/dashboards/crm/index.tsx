import dynamic from 'next/dynamic'
import { Suspense } from 'react'

const CRMContainer = dynamic(() => import('@/containers/dashboards/crm'), { ssr: false })

export default function CRM() {

    return (
        <Suspense fallback={<div />}>
            <CRMContainer />
        </Suspense>
    )
}