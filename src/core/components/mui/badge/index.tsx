import useBgColor, { UseBgColorType } from '@/core/hooks/use-bg-color'
import MuiBadge from '@mui/material/Badge'
import { CustomBadgeProps } from './types'

const Badge = (props: CustomBadgeProps) => {
    // ** Props
    const { sx, skin, color } = props

    // ** Hook
    const bgColors = useBgColor()

    const colors: UseBgColorType = {
        primary: { ...bgColors.primaryLight },
        secondary: { ...bgColors.secondaryLight },
        success: { ...bgColors.successLight },
        error: { ...bgColors.errorLight },
        warning: { ...bgColors.warningLight },
        info: { ...bgColors.infoLight }
    }

    return (
        <MuiBadge
            {...props}
            sx={skin === 'light' && color ? Object.assign({ '& .MuiBadge-badge': colors[color] }, sx) : sx}
        />
    )
}

export default Badge
