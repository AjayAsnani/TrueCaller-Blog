import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_BASE = "https://public-api.wordpress.com/rest/v1.1/sites/107403796";

export const fetchPosts = createAsyncThunk(
  "posts/fetchPosts",
  async ({ category = "", page = 1 }) => {
    let url = `${API_BASE}/posts/?fields=slug,categories,post_thumbnail,title,date&number=20&page=${page}`;
    if (category) {
      url += `&category=${category}`;
    }
    const response = await axios.get(url);
    return response.data.posts;
  }
);

const postsSlice = createSlice({
  name: "posts",
  initialState: {
    items: [],
    status: "idle",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.items = action.payload;
        state.status = "succeeded";
      })
      .addCase(fetchPosts.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default postsSlice.reducer;
