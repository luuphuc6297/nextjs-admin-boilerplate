import { AuthContext } from '@/context/AuthContext'
import * as React from 'react'

export const useAuth = () => React.useContext(AuthContext)
