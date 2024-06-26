import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_BASE = "https://public-api.wordpress.com/rest/v1.1/sites/107403796";

export const fetchPostBySlug = createAsyncThunk(
  "postDetail/fetchPostBySlug",
  async (slug) => {
    const response = await axios.get(
      `${API_BASE}/posts/slug:${slug}?fields=featured_image,title,author,content,date`
    );
    return response.data;
  }
);

const postDetailSlice = createSlice({
  name: "postDetail",
  initialState: {
    post: null,
    status: "idle",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPostBySlug.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPostBySlug.fulfilled, (state, action) => {
        state.post = action.payload;
        state.status = "succeeded";
      })
      .addCase(fetchPostBySlug.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default postDetailSlice.reducer;
