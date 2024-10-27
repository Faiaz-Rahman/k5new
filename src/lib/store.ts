import { configureStore } from '@reduxjs/toolkit'

import AuthReducer from '../lib/slices/authSlice'
import { useDispatch } from 'react-redux'

export const makeStore = () => {
    return configureStore({
        reducer: {
            auth: AuthReducer,
        },
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                serializableCheck: false,
            }),
    })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
