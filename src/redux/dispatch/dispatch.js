import {store} from '../store/store';

import {standardPed, supPed, plusPed, dailyPed, superDailyPed, firstTabReset, secondTabReset, firsTabPrice, secondTabPrice, miniTampon, standardTampon, thirdTabReset, thirdTabPrice} from "../slicer/BeijePedSlicer";


export const dispatchStandardPed = (payload) => {
    store.dispatch(standardPed(payload));
}

export const dispatchSupPed = (payload) => {
    store.dispatch(supPed(payload));
}

export const dispatchPlusPed = (payload) => {
    store.dispatch(plusPed(payload));
}

export const dispatchDailyPed = (payload) => {
    store.dispatch(dailyPed(payload));
}

export const dispatchSuperDailyPed = (payload) => {
    store.dispatch(superDailyPed(payload));
}

export const dispatchMiniTampon = (payload) => {
    store.dispatch(miniTampon(payload))
}

export const dispatchStandardTampon = (payload) => {
    store.dispatch(standardTampon(payload))
}

export const dispatchFirstTabReset = () => {
    store.dispatch(firstTabReset());
}

export const dispatchSecondTabReset = () => {
    store.dispatch(secondTabReset());
}

export const dispatchThirdTabReset = () => {
    store.dispatch(thirdTabReset())
}

export const dispatchFirstTabPrice = () => {
    store.dispatch(firsTabPrice())
}

export const dispatchSecondTabPrice = () => {
    store.dispatch(secondTabPrice())
}

export const dispatchThirdTabPrice = () => {
    store.dispatch(thirdTabPrice())
}