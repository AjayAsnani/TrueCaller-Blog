import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchPostBySlug } from "../../api";
import "./Details.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Details = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetchPostBySlug(slug).then((response) => {
      setPost(response.data);
    });
  }, [slug]);

  if (!post) return <div>Loading...</div>;

  return (
    <div>
      <Navbar />
      <div className="post-detail">
        <img
          src={post.featured_image}
          alt={post.title}
          className="featured-image"
        />
        <div className="data">
          <h1>{post.title}</h1>
          <div className="info">
            <img
              src={post.author.avatar_URL}
              alt={post.author.name}
              className="author-avatar"
            />
            <div>
              <p>By {post.author.name}</p>
              <p>{new Date(post.date).toDateString()}</p>
            </div>
          </div>
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Details;
