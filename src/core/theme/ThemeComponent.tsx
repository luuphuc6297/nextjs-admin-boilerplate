import themeConfig from '@/configs/theme'
import { Settings } from '@/core/context/setting'
import CssBaseline from '@mui/material/CssBaseline'
import GlobalStyles from '@mui/material/GlobalStyles'
import { Theme, ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material/styles'
import { deepmerge } from '@mui/utils'
import { ReactNode } from 'react'
import themeOptions from './ThemeOptions'
import UserThemeOptions from './UserThemeOptions'
import overrides from './overrides'
import typography from './typography'

// ** Global Styles
import Direction from '@/layouts/Direction'
import GlobalStyling from './global'

interface Props {
    settings: Settings
    children: ReactNode
}

const ThemeComponent = (props: Props) => {
    // ** Props
    const { settings, children } = props

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
        <ThemeProvider theme={theme}>
            <Direction direction={settings.direction}>
                <CssBaseline />
                <GlobalStyles styles={() => GlobalStyling(theme) as any} />
                {children}
            </Direction>
        </ThemeProvider>
    )
}

export default ThemeComponent
