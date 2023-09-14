import { NextImage } from '@/components/base/next-image'

export const Loader = () => (
    <main style={{ minHeight: '100vh', display: 'grid', placeItems: 'center' }}>
        <NextImage
            src='/images/logos/buplabs.svg'
            alt="HiYield"
            priority
            width={72}
            height={72}
            style={{ animation: 'rotationZ 1.5s infinite linear' }}
        />
    </main>
)
