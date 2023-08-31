// ** React Imports
import { ComponentType, ReactNode } from 'react'

export type RepeaterProps = {
    count: number
    children(i: number): ReactNode
    tag?: ComponentType | keyof JSX.IntrinsicElements
}
