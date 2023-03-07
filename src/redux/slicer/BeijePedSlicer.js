import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    standardValue: 0,
    supValue: 0,
    plusValue: 0,
    dailyValue:0,
    superDailyValue:0,
    firstTabPriceValue: 0,
    secondTabPriceValue:0,
    miniTamponValue:0,
    standardTamponValue:0,
    thirdTabPriceValue:0
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
        dailyPed: (state, action) => {
            state.dailyValue = action.payload
        },
        superDailyPed: (state, action) => {
            state.superDailyValue = action.payload
        },
        miniTampon: (state,action) => {
            state.miniTamponValue = action.payload
        },
        standardTampon: (state,action) => {
            state.standardTamponValue = action.payload
        },
        firstTabReset: (state) => {
            state.standardValue = 0
            state.supValue = 0
            state.plusValue = 0
        },
        secondTabReset: (state) => {
            state.dailyValue = 0
            state.superDailyValue = 0
        },
        thirdTabReset: (state) => {
            state.miniTamponValue = 0
            state.standardTamponValue = 0
        },
        firsTabPrice: (state) => {
            state.firstTabPriceValue = ((state.standardValue === 10 && 29.73) || (state.standardValue === 20 && 56.99) || (state.standardValue === 30 && 85.05) || (state.standardValue === 40 && 113.98) || (state.standardValue === 50 && 142.04) || (state.standardValue===60 && 170.10 ))
                + ((state.supValue === 10 && 33.27) || (state.supValue === 20 && 64.58) || (state.supValue === 30 && 96.66) || (state.supValue === 40 && 129.16) || (state.supValue === 50 && 161.24) || (state.supValue===60 && 193.32 ))
                + ((state.plusValue === 10 && 37.48) || (state.plusValue === 20 && 72.63) || (state.plusValue === 30 && 108.20) || (state.plusValue === 40 && 145.26) || (state.plusValue === 50 && 180.83) || (state.plusValue===60 && 216.40 ))
        },
        secondTabPrice: (state) => {
            state.secondTabPriceValue = ((state.dailyValue === 10 && 19.72) || (state.dailyValue === 20 && 27.45) || (state.dailyValue === 30 && 36.41) || (state.dailyValue === 40 && 54.90) || (state.dailyValue === 50 && 59.69) || (state.dailyValue===60 && 72.82 )|| (state.dailyValue === 70 && 87.14) || (state.dailyValue === 80 && 96.10) || (state.dailyValue === 90 && 109.23) || (state.dailyValue===100 && 119.38 ))
                + ((state.superDailyValue === 10 && 20.92) || (state.superDailyValue === 20 && 37.62) || (state.superDailyValue === 30 && 49.68) || (state.superDailyValue === 40 && 70.60) || (state.superDailyValue === 50 && 79.20) || (state.superDailyValue===60 && 99.36 )|| (state.superDailyValue === 70 && 116.82) || (state.superDailyValue === 80 && 128.88) || (state.superDailyValue === 90 && 149.04) || (state.superDailyValue===100 && 158.40 ))
        },
        thirdTabPrice:(state) => {
        state.thirdTabPriceValue= ((state.miniTamponValue === 10 && 33.77) || (state.miniTamponValue === 20 && 67.26) || (state.miniTamponValue === 30 && 98.68) || (state.miniTamponValue === 40 && 132.45) || (state.miniTamponValue === 50 && 165.94) || (state.miniTamponValue===60 && 197.36 ))
            + ((state.standardTamponValue === 10 && 37.01) || (state.standardTamponValue === 20 && 73.26) || (state.standardTamponValue === 30 && 108.99) || (state.standardTamponValue === 40 && 146.00) || (state.standardTamponValue === 50 && 182.25) || (state.standardTamponValue===60 && 217.98 ))
},
    },
})


export const { standardPed, supPed, plusPed, dailyPed, superDailyPed, firstTabReset, secondTabReset, firsTabPrice, secondTabPrice, miniTampon, standardTampon, thirdTabReset, thirdTabPrice  } = beijePedSlice.actions

export default beijePedSlice.reducer