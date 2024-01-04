import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const orderCar = createAsyncThunk("orderCar/Cars", async (payload) => {
  try {
    const config = {
      headers: {
        access_token: localStorage.getItem("accesToken"),
      },
    };

    const NewOrderCar = await axios.post(
      `https://api-car-rental.binaracademy.org/customer/order/`,
      payload,
      config
    );
    console.log(NewOrderCar.data);
    return NewOrderCar.data;
  } catch (error) {
    throw error;
  }
});

const initialState = {
  list_date: localStorage.getItem("updatedata")
    ? JSON.parse(localStorage.getItem("updatedata"))
    : {},
};

const createOrder = createSlice({
  name: "orderCar",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(orderCar.fulfilled, (state, action) => {
      state.loading = false;
      state.list_date = action.payload;
      localStorage.setItem("updatedata", JSON.stringify(action.payload));
    });
    builder.addCase(orderCar.pending, (state, action) => {
      state.loading = true;
      state.list_date = action.payload;
    });
  },
});

export default createOrder.reducer;
