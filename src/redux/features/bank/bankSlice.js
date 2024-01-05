import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// export const optionPayment = createAsyncThunk("payment/optionPayment", async (payload) => {
//   return payload;
// });

const initialState = {
  bankName: localStorage.getItem("bankName") ? JSON.parse(localStorage.getItem("bankName")) : {},
  loading: false,
  error: null, // Tambahkan properti error untuk penanganan kesalahan
};

const paymentSlice = createSlice({
  name: "payment",
  initialState,
  reducers: {
    updateBankName(state, action) {
      localStorage.setItem("bankName", JSON.stringify(action.payload));
      state.bankName = action.payload;
    },
  },

  // extraReducers: (builder) => {
  //   builder.addCase(optionPayment.fulfilled, (state, action) => {
  //     state.loading = false;
  //     state.bankName = action.payload;
  //   });
  //   builder.addCase(optionPayment.pending, (state, action) => {
  //     state.loading = true;
  //     state.error = null; // Reset error saat fetching dimulai
  //   });
  //   builder.addCase(optionPayment.rejected, (state, action) => {
  //     state.loading = false;
  //     state.error = action.error.message; // Tangani error dengan lebih baik
  //   });
  // },
});

export const { updateBankName } = paymentSlice.actions;

export default paymentSlice.reducer;
