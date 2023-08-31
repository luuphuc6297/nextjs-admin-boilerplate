import { CardProps } from '@mui/material/Card'
import { ReactElement, ReactNode } from 'react'

export type CardSnippetProps = CardProps & {
    id?: string
    title: string
    children: ReactNode
    code: {
        tsx: ReactElement | null
        jsx: ReactElement | null
    }
    className?: string
}
