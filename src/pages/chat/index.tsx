import BlankLayout from '@/layouts/BlankLayout';
import dynamic from 'next/dynamic';
import * as React from 'react';
import { Suspense } from 'react';

const ChatContainer = dynamic(() => import('@/containers/chat'), { ssr: false })

export default function Chat() {

    return (
        <Suspense fallback={<div />}>
            <ChatContainer />
        </Suspense>
    )
}

Chat.getLayout = (page: React.ReactNode) => <BlankLayout>{page}</BlankLayout>

Chat.guestGuard = true