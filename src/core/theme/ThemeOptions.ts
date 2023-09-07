import { Settings } from '@/core/context/setting'
import { ThemeOptions } from '@mui/material'
import { deepmerge } from '@mui/utils'
import UserThemeOptions from './UserThemeOptions'
import breakpoints from './breakpoints'
import palette from './palette'
import shadows from './shadows'
import spacing from './spacing'


const themeOptions = (settings: Settings): ThemeOptions => {
    const { skin, mode, direction, themeColor } = settings

    // ** Create New object before removing user component overrides and typography objects from userThemeOptions
    const userThemeConfig: any = Object.assign({}, UserThemeOptions())

    const userFontFamily = userThemeConfig.typography?.fontFamily

    // ** Remove component overrides and typography objects from userThemeOptions
    delete userThemeConfig.components
    delete userThemeConfig.typography

    const mergedThemeConfig = deepmerge(
        {
            direction,
            palette: palette(mode === 'semi-dark' ? 'light' : mode, skin, themeColor),
            typography: {
                fontFamily:
                    userFontFamily ||
                    [
                        'Linik Sans',
                        'sans-serif',
                        '-apple-system',
                        'BlinkMacSystemFont',
                        '"Segoe UI"',
                        'Roboto',
                        '"Helvetica Neue"',
                        'Arial',
                        'sans-serif',
                        '"Apple Color Emoji"',
                        '"Segoe UI Emoji"',
                        '"Segoe UI Symbol"',
                    ].join(','),
            },
            shadows: shadows(mode),
            ...spacing,
            breakpoints: breakpoints(),
            shape: {
                borderRadius: 6,
            },
            mixins: {
                toolbar: {
                    minHeight: 64,
                },
            },
        },
        userThemeConfig
    )

    return deepmerge(mergedThemeConfig, {
        palette: {
            primary: {
                ...mergedThemeConfig.palette[themeColor],
            },
        },
    })
}

export default themeOptions
