import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { CategoryType } from '../../utils/types'

type FilterState = {
  query?: string
  type: 'category' | 'fav' | 'all'
  value?: CategoryType
  fav?: boolean
}

const initialState: FilterState = {
  query: '',
  type: 'all',
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setQuery: (state, action: PayloadAction<string>) => {
      state.query = action.payload
    },
    setType: (state, action: PayloadAction<FilterState>) => {
      state.type = action.payload.type
      action.payload.type === 'fav'
        ? (state.fav = action.payload.fav)
        : (state.value = action.payload.value)
    },
  },
})

export const { setType, setQuery } = filterSlice.actions
export default filterSlice.reducer