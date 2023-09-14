import dynamic from 'next/dynamic'
import { Suspense } from 'react'

import CRMContainer from '@/containers/dashboards/crm'
// const CRMContainer = dynamic(() => import('@/containers/dashboards/crm'), { ssr: false })

export default function CRM() {

    return (
        // <Suspense fallback={<div />}>
            <CRMContainer />
        // </Suspense>
    )
}