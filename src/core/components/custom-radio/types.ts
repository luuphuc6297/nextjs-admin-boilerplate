import { ThemeColor } from '@/core/layouts/types'
import { IconProps } from '@iconify/react'
import { GridProps } from '@mui/material/Grid'
import { ChangeEvent, ReactNode } from 'react'

// ** Types of Basic Custom Radios
export type CustomRadioBasicData = {
    value: string
    content?: ReactNode
    isSelected?: boolean
} & (
        | {
            meta: ReactNode
            title: ReactNode
        }
        | {
            meta?: never
            title?: never
        }
        | {
            title: ReactNode
            meta?: never
        }
    )
export type CustomRadioBasicProps = {
    name: string
    selected: string
    color?: ThemeColor
    gridProps: GridProps
    data: CustomRadioBasicData
    handleChange: (prop: string | ChangeEvent<HTMLInputElement>) => void
}

// ** Types of Custom Radios with Icons
export type CustomRadioIconsData = {
    value: string
    title?: ReactNode
    content?: ReactNode
    isSelected?: boolean
}
export type CustomRadioIconsProps = {
    name: string
    icon?: string
    selected: string
    color?: ThemeColor
    gridProps: GridProps
    data: CustomRadioIconsData
    iconProps?: Omit<IconProps, 'icon'>
    handleChange: (prop: string | ChangeEvent<HTMLInputElement>) => void
}

// ** Types of Custom Radios with Images
export type CustomRadioImgData = {
    alt?: string
    value: string
    img: ReactNode
    isSelected?: boolean
}
export type CustomRadioImgProps = {
    name: string
    selected: string
    color?: ThemeColor
    gridProps: GridProps
    data: CustomRadioImgData
    handleChange: (prop: string | ChangeEvent<HTMLInputElement>) => void
}
