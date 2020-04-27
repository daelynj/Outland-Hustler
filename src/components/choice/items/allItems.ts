import { clothItems } from './itemGroups/clothItems'
import { leatherItems } from './itemGroups/leatherItems'
import { plateItems } from './itemGroups/plateItems'
import { otherItems } from './itemGroups/otherItems'

export const items = clothItems.concat(leatherItems, plateItems, otherItems)
