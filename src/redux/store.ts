import { configureStore } from '@reduxjs/toolkit'
import customerReducer from './features/customerSlice'
import { customerApi } from './services/customerApi'
import { setupListeners } from '@reduxjs/toolkit/dist/query'

export const store = configureStore({
  reducer: {
    //customerReducer,
    [customerApi.reducerPath]: customerApi.reducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([customerApi.middleware]),
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
