import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "../slices/postSlice";
import categoriesReducer from "../slices/categoriesSlice";
import postDetailReducer from "../slices/postDetailSlice";

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    categories: categoriesReducer,
    postDetail: postDetailReducer,
  },
});
