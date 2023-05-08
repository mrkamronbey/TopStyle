import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API_URL } from "../utils/api";
import axios from "axios";

export const PostContact = createAsyncThunk("Form/post", async (body) => {
  return await axios.post(`${API_URL}/form`, body).then((res) => res);
});

const ContactSlice = createSlice({
  name: "Form",
  initialState: {
    postContact: {
      Error: false,
      Loading: false,
      Success: false,
    },
  },
  extraReducers: {
    [PostContact.pending]: (state, action) => {
      state.postContact.loading = true;
    },
    [PostContact.fulfilled]: (state, action) => {
      state.postContact.Error = false;
      state.postContact.Success = true;
      state.postContact.Loading = false;
    },
    [PostContact.rejected]: (state, action) => {
      state.postContact.Error = true;
      state.postContact.Success = false;
      state.postContact.Loading = false;
    },
  },
});

export const {} = ContactSlice.actions;
export default ContactSlice.reducer;
