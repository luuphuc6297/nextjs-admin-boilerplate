import useBgColor from "@/core/hooks/use-bg-color"
import { useSettings } from "@/core/hooks/use-setting"
import { Box, useMediaQuery, useTheme } from "@mui/material"


const LoginPage = () => {
    const theme = useTheme()
    const bgColors = useBgColor()
    const { settings } = useSettings()

    const hidden = useMediaQuery(theme.breakpoints.down('md'))

    // ** Vars
    const { skin } = settings

    const imageSource = skin === 'bordered' ? 'auth-v2-login-illustration-bordered' : 'auth-v2-login-illustration'

    return <Box className="content-right"></Box>
}