import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const orderCar = createAsyncThunk("orderCar/Cars", async (payload) => {
  return payload;
});

const initialState = {
  list_date: localStorage.getItem("orderData") ? JSON.parse(localStorage.getItem("orderData")) : {},
};

const createOrder = createSlice({
  name: "orderCar",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(orderCar.fulfilled, (state, action) => {
      state.loading = false;
      state.list_date = action.payload;
      localStorage.setItem("orderData", JSON.stringify(action.payload));
    });
    builder.addCase(orderCar.pending, (state, action) => {
      state.loading = true;
      state.list_date = action.payload;
    });
  },
});

export default createOrder.reducer;
