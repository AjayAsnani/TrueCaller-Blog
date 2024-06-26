import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../../slices/postSlice";
import { fetchCategories } from "../../slices/categoriesSlice";
import PostCard from "../PostCard/PostCard";
import CategoryFilter from "../CategoryFilter/CategoryFilter";
import Paginator from "../Paginator/Paginator";
import Navbar from "../Navbar/Navbar";
import Home from "../Home/Home";
import Footer from "../Footer/Footer";
import Loader from "../Loader/Loader";

const PostList = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.items);
  const postsStatus = useSelector((state) => state.posts.status);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchPosts({ category: selectedCategory, page }));
  }, [dispatch, selectedCategory, page]);

  return (
    <div className="bg-gray-200 font-sans">
      <Navbar />
      <Home />
      <div className="p-8">
        <CategoryFilter
          setSelectedCategory={(category) => {
            setSelectedCategory(category);
            setPage(1); // Reset to page 1 whenever category changes
          }}
        />
        {postsStatus === "loading" ? (
          <Loader />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
            {posts.map((post) => (
              <PostCard
                key={post.slug}
                post={post}
                category={selectedCategory}
              />
            ))}
          </div>
        )}
        <Paginator page={page} setPage={setPage} />
      </div>
      <Footer />
    </div>
  );
};

export default PostList;
