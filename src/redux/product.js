import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../utils/api";

export const ProductGet = createAsyncThunk("products/get", async () => {
  return await axios
    .get(`${API_URL}/products`)
    .then((response) => response.data);
});
const ProductSlice = createSlice({
  name: "product",
  initialState: {
    productGet: {
      loading: false,
      data: [],
      error: false,
      success: false,
    },
  },
  extraReducers: {
    // get
    [ProductGet.pending]: (state, action) => {
      state.productGet.loading = true;
    },
    [ProductGet.fulfilled]: (state, action) => {
      state.productGet.loading = false;
      state.productGet.success = true;
      state.productGet.data = action.payload;
      state.productGet.error = false;
    },
    [ProductGet.rejected]: (state, action) => {
      state.productGet.loading = false;
      state.productGet.error = true;
      state.productGet.success = false;
    },
  },
});

export const {} = ProductSlice.actions;
export default ProductSlice.reducer;
