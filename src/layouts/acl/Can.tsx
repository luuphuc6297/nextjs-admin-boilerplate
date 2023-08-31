import { AnyAbility } from '@casl/ability'
import { createContextualCan } from '@casl/react'
import { createContext } from 'react'

export const AbilityContext = createContext<AnyAbility>(undefined!)

export default createContextualCan(AbilityContext.Consumer)
