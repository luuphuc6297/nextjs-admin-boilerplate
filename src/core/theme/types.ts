declare module '@mui/material/styles' {
    interface Palette {
        customColors: {
            dark: string
            main: string
            light: string
            bodyBg: string
            darkBg: string
            lightBg: string
            trackBg: string
            tableHeaderBg: string
            primaryGradient: string
            neutralShade?: string,
            neutralBorder?: string,
            neutralDisabled?: string,
            neutral1?: string,
            neutral2?: string,
            neutral3?: string,
            neutral4?: string,
            neutral5?: string,
            neutralBG?: string,
            primaryBase?: string,
            primary1?: string,
            primary2?: string,
            primaryBG?: string,
        }
    }
    interface PaletteOptions {
        customColors?: {
            dark?: string
            main?: string
            light?: string
            bodyBg?: string
            darkBg?: string
            lightBg?: string
            trackBg?: string
            tableHeaderBg?: string
            primaryGradient?: string

        }
    }
}

export { }
