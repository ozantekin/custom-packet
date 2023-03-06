import {store} from '../store/store';

import {standardPed, supPed, plusPed} from "../slicer/BeijePedSlicer";


export const dispatchStandardPed = (payload) => {
    store.dispatch(standardPed(payload));
}

export const dispatchSupPed = (payload) => {
    store.dispatch(supPed(payload));
}

export const dispatchPlusPed = (payload) => {
    store.dispatch(plusPed(payload));
}


console.log(store.getState());