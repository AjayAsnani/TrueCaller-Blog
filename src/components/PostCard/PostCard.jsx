import React from "react";
import { useNavigate } from "react-router-dom";
import he from "he";

const PostCard = ({ post, category }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/post/${post.slug}`);
  };

  const truncateTitle = (text, maxLength) => {
    const decodedText = he.decode(text);
    return decodedText.length > maxLength
      ? `${decodedText.slice(0, maxLength - 3)}...`
      : decodedText;
  };

  const capitalize = (text) => {
    return text.charAt(0).toUpperCase() + text.slice(1);
  };
  const getCategoryDotColor = (category) => {
    switch (category.toLowerCase()) {
      case "scam-alert":
        return "red";
      case "app-features":
        return "green";
      case "insights":
        return "blue";
      case "news":
        return "#00A5B9";
      case "behind-the-code":
        return "yellow";
      case "business-hacks":
        return "darkblue";
      case "diversity-and-inclusion":
        return "darkgreen";
      case "how-to-tutorials":
        return "orange";
      case "notices":
        return "yellow";
      case "partnerships":
        return "purple";
      case "premium":
        return "gold";
      case "random":
        return "gray";
      case "tech":
        return "teal";
      case "truecaller-insights":
        return "#FF4500";
      case "true-stories":
        return "brown";
      case "truecrew-brand-ambassadors":
        return "darkcyan";
      case "women-at-truecaller":
        return "pink";
      default:
        return "";
    }
  };

  return (
    <div
      className="border border-gray-300 rounded-xl shadow-md m-2 transition-transform duration-200 ease-in-out cursor-pointer bg-white flex flex-col hover:transform hover:-translate-y-1 hover:shadow-lg"
      onClick={handleClick}
    >
      <div className="flex items-center gap-1.5 m-4">
        <span
          className="w-2.5 h-2.5 rounded-full mr-2"
          style={{ backgroundColor: getCategoryDotColor(category) }}
        ></span>
        <h3 className="text-xs text-gray-500">{capitalize(category)}</h3>
      </div>
      {post.post_thumbnail && (
        <img
          src={post.post_thumbnail.URL}
          alt={post.title}
          className="w-full h-44 object-cover border-b border-gray-300"
        />
      )}
      <h2 className="text-[18px] px-6 mt-2 font-semibold">
        {truncateTitle(post.title, 40)}
      </h2>
      <h4 className="text-sm px-6 opacity-70 mt-3 mb-4">
        {new Date(post.date).toDateString()}
      </h4>
    </div>
  );
};

export default PostCard;
