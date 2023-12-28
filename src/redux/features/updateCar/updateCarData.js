import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios"

export const getUpdateCar = createAsyncThunk( "UpdateCar/Cars" , async (payload) =>  {
    try {
        const config = {
            headers: {
                access_token: localStorage.getItem("accesToken"),
            },
        }
        const updateCars = await axios.get(
            `https://api-car-rental.binaracademy.org/customer/order/${payload}`,
            payload,
            config
        )
        return updateCars.data
    } catch (error) {
        throw error
    }
})

const initialState = {
    updateData: {},
    loading : false
}

const updateCars = createSlice ({
    name : "orderCar",
    initialState,
    reducers : {},

    extraReducers : (builder) => {
        builder.addCase(getUpdateCar.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(getUpdateCar.fulfilled, (state, action) => {
            state.loading = false
            state.updateData = action.payload
        })
        builder.addCase(getUpdateCar.rejected, (state, action) => {
            state.loading = false
        })
        
    }
})

export default updateCars.reducer