import { configureStore } from '@reduxjs/toolkit'
import beijePedReducer from '../slicer/BeijePedSlicer'

export const store = configureStore({
    reducer: {
        beijePed: beijePedReducer,
    },
})