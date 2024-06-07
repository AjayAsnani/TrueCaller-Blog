import React from "react";
import { useNavigate } from "react-router-dom";

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
    <div
      className="border border-gray-300 rounded-2xl shadow-md m-2 transition-transform duration-200 ease-in-out cursor-pointer bg-white flex flex-col hover:transform hover:-translate-y-1 hover:shadow-lg"
      onClick={handleClick}
    >
      <div className="flex items-center gap-1.5 m-4">
        <h3 className="text-xs text-gray-500">{capitalize(category)}</h3>
      </div>
      {post.post_thumbnail && (
        <img
          src={post.post_thumbnail.URL}
          alt={post.title}
          className="w-full h-44 object-cover border-b border-gray-300"
        />
      )}
      <h2 className="text-[18px] px-2.5 mt-2 font-semibold">
        {truncateTitle(post.title, 40)}
      </h2>
      <h4 className="text-sm px-2.5 opacity-70 mt-3">
        {new Date(post.date).toDateString()}
      </h4>
    </div>
  );
};

export default PostCard;
