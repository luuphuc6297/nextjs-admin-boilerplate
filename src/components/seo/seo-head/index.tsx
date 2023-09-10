import { APP_DESCRIPTION, APP_NAME, APP_SITE_URL } from '@/configs/constants'
import NextHead from 'next/head'
import React from 'react'

import preview from '@/public/images/cover/preview.jpg'

export type SEOHeadProps = {
    seoTitle?: string
    seoDescription?: string
    seoURL?: string
    seoImage?: string
    favicon?: string
    keywords?: string
    children?: React.ReactNode
}

/**
 * SEO Head component
 */
export const SEOHead = ({
    seoTitle = APP_NAME,
    seoDescription = APP_DESCRIPTION,
    seoURL = APP_SITE_URL,
    seoImage = 'http://localhost:3000' + preview.src,
    keywords = 'BupLabs',
    favicon = '/favicon.ico',
    children,
}: SEOHeadProps) => {
    return (
        <NextHead>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <title>{seoTitle}</title>
            <meta name="description" content={seoDescription} />
            <meta content={keywords} name="keywords" />

            <link rel="shortcut icon" href={favicon} />
            <link rel="icon" href={favicon} />

            <meta name="twitter:site" content={seoURL} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:image" content={seoImage} />
            <meta name="twitter:description" content={seoDescription} />

            <meta name="description" content={seoDescription} />

            <meta property="og:title" content={seoTitle} />
            <meta property="og:description" content={seoDescription} />
            <meta property="og:url" content={seoURL} />
            <meta property="og:image" content={seoImage} />

            {/* Additional content */}
            {children}
        </NextHead>
    )
}
