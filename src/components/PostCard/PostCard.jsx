import React from "react";
import { useNavigate } from "react-router-dom";
import "./PostCard.css";

const PostCard = ({ post, category }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/post/${post.slug}`);
  };

  const truncateTitle = (text, maxLength) => {
    return text.length > maxLength
      ? `${text.slice(0, maxLength - 3)}...`
      : text;
  };

  const capitalize = (text) => {
    return text.charAt(0).toUpperCase() + text.slice(1);
  };

  return (
    <div className="post-card" onClick={handleClick}>
      <div className="heading">
        <h3 className="category-head"> {capitalize(category)}</h3>
      </div>
      {post.post_thumbnail && (
        <img src={post.post_thumbnail.URL} alt={post.title} />
      )}
      <h2>{truncateTitle(post.title, 40)}</h2>
      <h4>{new Date(post.date).toDateString()}</h4>
    </div>
  );
};

export default PostCard;
