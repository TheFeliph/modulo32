import { CategoryType, TypeQuery } from '../../utils/types'
import { RootReducer } from '../store'

export const counterSelector = (
  type: TypeQuery,
  value: CategoryType | undefined,
  { contact }: RootReducer,
) => {
  if (type === 'all') return contact.list.length
  if (type === 'fav') return contact.list.filter((c) => c.fav).length
  if (type === 'category') {
    return contact.list.filter((c) => c.category === value).length
  }
}