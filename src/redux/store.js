import {configureStore} from '@reduxjs/toolkit'
import orderSlice from './features/order/orderSlice'
import updateCarData from './features/updateCar/updateCarData'
export const store = configureStore({
    reducer: {
        order: orderSlice,
        updateCar: updateCarData
    },
})