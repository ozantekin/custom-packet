import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    standardValue: 0,
    supValue: 0,
    plusValue: 0,
}

export const beijePedSlice = createSlice({
    name: 'beijePed',
    initialState,
    reducers: {
        standardPed: (state, action) => {
            state.standardValue = action.payload
        },
        supPed: (state, action) => {
            state.supValue = action.payload
        },
        plusPed: (state, action) => {
            state.plusValue = action.payload
        },

    },
})

// Action creators are generated for each case reducer function
export const { standardPed, supPed, plusPed } = beijePedSlice.actions

export default beijePedSlice.reducer