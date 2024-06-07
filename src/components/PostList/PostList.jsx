import React, { useState, useEffect } from "react";
import { fetchPosts } from "../../api";
import PostCard from "../PostCard/PostCard";
import CategoryFilter from "../CategoryFilter/CategoryFilter";
import Paginator from "../Paginator/Paginator";
import Navbar from "../Navbar/Navbar";
import Home from "../Home/Home";
import Footer from "../Footer/Footer";

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchPosts(selectedCategory, page).then((response) => {
      setPosts(response.data.posts);
    });
  }, [selectedCategory, page]);

  return (
    <div className="bg-gray-200 font-sans">
      <Navbar />
      <Home />
      <div className="p-8">
        <CategoryFilter
          categories={categories}
          setSelectedCategory={setSelectedCategory}
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} category={selectedCategory} />
          ))}
        </div>
        <Paginator page={page} setPage={setPage} />
      </div>
      <Footer />
    </div>
  );
};

export default PostList;
