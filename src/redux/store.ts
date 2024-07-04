import { configureStore } from '@reduxjs/toolkit'

import contactReducer from './contacts'
import filterReducer from './filters/reducer'

const store = configureStore({
  reducer: {
    contact: contactReducer,
    filters: filterReducer,
  },
})

export default store
export type RootReducer = ReturnType<typeof store.getState>