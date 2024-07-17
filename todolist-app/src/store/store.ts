import { configureStore } from '@reduxjs/toolkit'
import todoSlice from './todoSlice'
import loggerMiddleware from './middleware'

export const store = configureStore({
    reducer: {
        todo: todoSlice
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(loggerMiddleware)
    
})

export type RootState = ReturnType <typeof store.getState>
export type AppDispatch = typeof store.dispatch