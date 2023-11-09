import { configureStore } from '@reduxjs/toolkit'
import { customerApi } from './services/customerApi'
import { setupListeners } from '@reduxjs/toolkit/dist/query'
import { cabinApi } from './services/cabinApi'
import { reservationApi } from './services/reservationApi'
//import customerReducer from './features/customer-slice'

export const store = configureStore({
  reducer: {
    //customerReducer,
    [cabinApi.reducerPath]: cabinApi.reducer,
    [customerApi.reducerPath]: customerApi.reducer,
    [reservationApi.reducerPath]: reservationApi.reducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      cabinApi.middleware,
      customerApi.middleware,
      reservationApi.middleware,
    ]),
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
