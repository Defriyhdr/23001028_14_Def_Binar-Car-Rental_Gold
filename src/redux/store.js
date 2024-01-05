import { configureStore } from "@reduxjs/toolkit";
import orderSlice from "./features/order/orderSlice";
import updateCarData from "./features/updateCar/updateCarData";
import bankSlice from "./features/bank/bankSlice";

export const store = configureStore({
  reducer: {
    order: orderSlice,
    updateCar: updateCarData,
    bank: bankSlice,
  },
});
