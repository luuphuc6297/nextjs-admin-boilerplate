import themeConfig from '@/configs/theme'
import { useSettings } from '@/core/hooks/use-setting'
import { Box, BoxProps, Typography, TypographyProps, useMediaQuery } from '@mui/material'
import { styled, useTheme } from '@mui/material/styles'
import * as React from 'react'

interface SsoLayoutV1Props {
    alt: string
    children: React.ReactElement
    title: string
    caption: string
}

const IllustrationWrapper = styled(Box)<BoxProps>(({ theme }) => ({
    padding: theme.spacing(20),
    paddingRight: '0 !important',
    [theme.breakpoints.down('lg')]: {
        padding: theme.spacing(10),
    },
}))

const Illustration = styled('img')(({ theme }) => ({
    maxWidth: '48rem',
    [theme.breakpoints.down('lg')]: {
        maxWidth: '35rem',
    },
}))

const RightWrapper = styled(Box)<BoxProps>(({ theme }) => ({
    width: '100%',
    [theme.breakpoints.up('md')]: {
        maxWidth: 450,
    },
}))

const BoxWrapper = styled(Box)<BoxProps>(({ theme }) => ({
    [theme.breakpoints.down('xl')]: {
        width: '100%',
    },
    [theme.breakpoints.down('md')]: {
        maxWidth: 400,
    },
}))

const TypographyStyled = styled(Typography)<TypographyProps>(({ theme }) => ({
    fontWeight: 600,
    marginBottom: theme.spacing(1.5),
    [theme.breakpoints.down('md')]: { mt: theme.spacing(8) },
}))

const SsoLayoutV2 = ({ alt, children, caption, title }: SsoLayoutV1Props) => {
    // ** Hooks
    const theme = useTheme()
    const { settings } = useSettings()

    // ** Vars
    const { skin } = settings
    console.log('skin___', skin)
    const hidden = useMediaQuery(theme.breakpoints.down('md'))

    const imageSource =
        skin === 'bordered' ? `auth-v2-${alt}-illustration-bordered` : `auth-v2-${alt}-illustration`

    const renderLeftWrapperBackground = React.useCallback(() => {
        if (!hidden) {
            return (
                <Box
                    sx={{
                        flex: 1,
                        display: 'flex',
                        position: 'relative',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <IllustrationWrapper>
                        <Illustration
                            alt={`${alt}-illustration`}
                            src={`/images/pages/${imageSource}-${theme.palette.mode}.png`}
                        />
                    </IllustrationWrapper>
                </Box>
            )
        } else return null
    }, [alt, hidden, imageSource, theme.palette.mode])

    const renderRightWrapper = React.useCallback(() => {
        return (
            <RightWrapper
                sx={
                    skin === 'bordered' && !hidden
                        ? { borderLeft: `1px solid ${theme.palette.divider}` }
                        : {}
                }
            >
                <Box
                    sx={{
                        p: 12,
                        height: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: 'background.paper',
                    }}
                >
                    <BoxWrapper>
                        <Box
                            sx={{
                                top: 30,
                                left: 40,
                                display: 'flex',
                                position: 'absolute',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            <Typography
                                variant="h6"
                                sx={{
                                    ml: 3,
                                    lineHeight: 1,
                                    fontWeight: 600,
                                    textTransform: 'uppercase',
                                    fontSize: '1.5rem !important',
                                }}
                            >
                                {themeConfig.templateName}
                            </Typography>
                        </Box>
                        <Box sx={{ mb: 6 }}>
                            <TypographyStyled variant="h5" textAlign={'center'}>
                                {title}
                            </TypographyStyled>
                            <Typography variant="body2" textAlign={'center'}>
                                {caption}
                            </Typography>
                        </Box>
                        {children}
                    </BoxWrapper>
                </Box>
            </RightWrapper>
        )
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [hidden, skin, theme.palette.divider])

    return (
        <Box className="content-right">
            {renderLeftWrapperBackground()}
            {renderRightWrapper()}
        </Box>
    )
}

export default SsoLayoutV2
