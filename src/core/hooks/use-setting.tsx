import { SettingsContext, SettingsContextValue } from '@/core/context/setting'
import { useContext } from 'react'

export const useSettings = (): SettingsContextValue => useContext(SettingsContext)
