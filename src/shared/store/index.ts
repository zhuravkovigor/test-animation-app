import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { listSlice } from './slices/list'

const rootReducer = combineReducers({
  list: listSlice.reducer,
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
