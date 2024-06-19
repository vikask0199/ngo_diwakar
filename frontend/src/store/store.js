import { configureStore } from "@reduxjs/toolkit"
import { apiSlice } from "./baseApiSlice" 
import authReducer from './features/auth/authSlice'
import { setupListeners } from '@reduxjs/toolkit/query'

export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        auth: authReducer,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({serializableCheck: false,}).concat(apiSlice.middleware),
    devTools: true
})

setupListeners(store.dispatch)