import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API_URL } from "../utils/api";
import axios from "axios";

export const GetProjects = createAsyncThunk("Projects/get", async () => {
  return await axios.get(`${API_URL}/images`).then((response) => response.data);
});
const ProjectsSlice = createSlice({
  name: "Projects",
  initialState: {
    getProjects: {
      Error: false,
      Loading: false,
      Success: false,
      Data: [],
    }
  },
  extraReducers: {
    [GetProjects.pending]: (state, action) => {
      state.getProjects.loading = true;
    },
    [GetProjects.fulfilled]: (state, action) => {
      state.getProjects.Error = false;
      state.getProjects.Success = true;
      state.getProjects.Loading = false;
      state.getProjects.Data = action.payload;
    },
    [GetProjects.rejected]: (state, action) => {
      state.getProjects.Error = true;
      state.getProjects.Success = false;
      state.getProjects.Loading = false;
      state.getProjects.Data = [];
    }
  },
});

export const {} = ProjectsSlice.actions;
export default ProjectsSlice.reducer;
