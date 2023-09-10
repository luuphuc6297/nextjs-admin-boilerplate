import Box, { BoxProps } from '@mui/material/Box'
import { styled } from '@mui/material/styles'
import { BlankLayoutProps } from './types'
import { SEOHead } from '@/components/seo/seo-head'

const BlankLayoutWrapper = styled(Box)<BoxProps>(({ theme }) => ({
    height: '100vh',

    // For V1 Blank layout pages
    '& .content-center': {
        display: 'flex',
        minHeight: '100vh',
        alignItems: 'center',
        justifyContent: 'center',
        padding: theme.spacing(5)
    },

    // For V2 Blank layout pages
    '& .content-right': {
        display: 'flex',
        minHeight: '100vh',
        overflowX: 'hidden',
        position: 'relative'
    }
}))

const BlankLayout = ({ children }: BlankLayoutProps) => {
    return (
        <>
            <SEOHead />
            <BlankLayoutWrapper className='layout-wrapper'>
                <Box className='app-content' sx={{ minHeight: '100vh', overflowX: 'hidden', position: 'relative' }}>
                    {children}
                </Box>
            </BlankLayoutWrapper>
        </>
    )
}

export default BlankLayout
