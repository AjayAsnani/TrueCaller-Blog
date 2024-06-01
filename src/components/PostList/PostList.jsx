import React, { useState, useEffect } from "react";
import { fetchPosts } from "../../api";
import PostCard from "../PostCard/PostCard";
import CategoryFilter from "../CategoryFilter/CategoryFilter";
import Paginator from "../Paginator/Paginator";
import "./Postlist.css";
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
    <div>
      <Navbar />
      <Home />
      <div className="main">
        <CategoryFilter
          categories={categories}
          setSelectedCategory={setSelectedCategory}
        />
        <div className="post-list">
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
