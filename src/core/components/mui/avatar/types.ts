import { AvatarProps } from '@mui/material/Avatar'
import { ThemeColor } from '@/core/layouts/types'

export type CustomAvatarProps = AvatarProps & {
    color?: ThemeColor
    skin?: 'filled' | 'light' | 'light-static'
}
