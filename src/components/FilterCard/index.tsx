import { useDispatch, useSelector } from 'react-redux'

import StyledCard from './filter.style'
import { RootReducer } from '../../redux/store'
import { CategoryType, TypeQuery } from '../../utils/types'
import { setType } from '../../redux/filters/reducer'
import { counterSelector } from '../../redux/contacts/contact.selectors'

type FilterProps = {
  type: TypeQuery
  criterion: string
  value?: CategoryType
  fav?: boolean
}

const FilterCard = ({ criterion, fav, type, value }: FilterProps) => {
  const dsp = useDispatch()
  const filters = useSelector((root: RootReducer) => root.filters)

  const countItems =
    useSelector( (root: RootReducer) => counterSelector(type, value, root))
  const setFilter = () => {
    type === 'fav'
      ? dsp(setType({ type, fav }))
      : dsp(setType({ type, value }))
  }

  const verifyActive = () => filters.type === type && filters.value === value

  return (
    <>
      <StyledCard active={verifyActive().toString()} onClick={setFilter}>
        <span>{countItems}</span>
        <span>{criterion}</span>
      </StyledCard>
    </>
  )
}

export default FilterCard