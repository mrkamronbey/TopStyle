import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../utils/api";

export const CategoryGet = createAsyncThunk("category/get", async () => {
  return await axios
    .get(`${API_URL}/category`)
    .then((response) => response.data);
});
const CategorySlice = createSlice({
  name: "admin",
  initialState: {
    categoryGet: {
      loading: false,
      data: [],
      error: false,
      success: false,
    },
  },
  extraReducers: {
    // get
    [CategoryGet.pending]: (state, action) => {
      state.categoryGet.loading = true;
    },
    [CategoryGet.fulfilled]: (state, action) => {
      state.categoryGet.loading = false;
      state.categoryGet.success = true;
      state.categoryGet.data = action.payload;
      state.categoryGet.error = false;
    },
    [CategoryGet.rejected]: (state, action) => {
      state.categoryGet.loading = false;
      state.categoryGet.error = true;
      state.categoryGet.success = false;
    },
  },
});

export const {} = CategorySlice.actions;
export default CategorySlice.reducer;
