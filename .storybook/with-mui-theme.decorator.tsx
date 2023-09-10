import CssBaseline from '@mui/material/CssBaseline'
import { Theme, ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material/styles'
import { deepmerge } from '@mui/utils'
import * as React from 'react'
import themeConfig from '../src/configs/theme'
import { Settings } from '../src/core/context/setting'
import themeOptions from '../src/core/theme/ThemeOptions'
import UserThemeOptions from '../src/core/theme/UserThemeOptions'
import overrides from '../src/core/theme/overrides'
import typography from '../src/core/theme/overrides/typography'

interface Props {
    settings: Settings
}

export const withMuiTheme = (Story, props: Props) => {
    // ** Props
    const { settings } = props

    // ** Merged ThemeOptions of Core and User
    const coreThemeConfig = themeOptions(settings)

    // ** Pass ThemeOptions to CreateTheme Function to create partial theme without component overrides
    let theme = createTheme(coreThemeConfig)

    // ** Deep Merge Component overrides of core and user
    const mergeComponentOverrides = (theme: Theme, settings: Settings) =>
        deepmerge({ ...overrides(theme, settings) }, UserThemeOptions()?.components)

    // ** Deep Merge Typography of core and user
    const mergeTypography = (theme: Theme) =>
        deepmerge(typography(theme), UserThemeOptions()?.typography)

    // ** Continue theme creation and pass merged component overrides to CreateTheme function
    theme = createTheme(theme, {
        components: { ...mergeComponentOverrides(theme, settings) },
        typography: { ...mergeTypography(theme) },
    })

    // ** Set responsive font sizes to true
    if (themeConfig.responsiveFontSizes) {
        theme = responsiveFontSizes(theme)
    }

    return (

        // @ts-ignore

        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Story />
        </ThemeProvider>
    )
}
