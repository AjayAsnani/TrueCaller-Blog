import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchPostBySlug } from "../../slices/postDetailSlice";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Loader from "../Loader/Loader";
import he from "he";

const Details = () => {
  const { slug } = useParams();
  const dispatch = useDispatch();
  const { post, status } = useSelector((state) => state.postDetail);

  useEffect(() => {
    dispatch(fetchPostBySlug(slug));
  }, [dispatch, slug]);

  if (status === "loading" || !post) return <Loader />;

  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center post-detail">
        <img
          src={post.featured_image}
          alt={post.title}
          className="w-full lg:h-[70vh] object-contain lg:object-cover mb-3"
        />
        <div className="max-w-[800px] w-full mx-5 p-3">
          <h1 className="text-xl md:text-4xl mb-2">{he.decode(post.title)}</h1>
          <div className="flex items-center mb-4">
            <img
              src={post.author.avatar_URL}
              alt={post.author.name}
              className="w-14 h-14 rounded-full mr-2.5 mt-3"
            />
            <div>
              <p className="m-0">By {post.author.name}</p>
              <p className="m-0 text-base">
                {new Date(post.date).toDateString()}
              </p>
            </div>
          </div>
          <div
            className="leading-7"
            dangerouslySetInnerHTML={{
              __html: post.content
                .replace(/<p>/g, '<p class="mb-4">')
                .replace(/<h1>/g, '<h1 class="mt-8 mb-4">')
                .replace(/<h2>/g, '<h2 class="mt-6 mb-3">')
                .replace(/<h3>/g, '<h3 class="mt-4 mb-2">')
                .replace(/<h4>/g, '<h4 class="mt-3 mb-2">')
                .replace(/<h5>/g, '<h5 class="mt-2 mb-1">')
                .replace(/<h6>/g, '<h6 class="mt-2 mb-1">')
                .replace(/<img.*?>/g, '<div class="my-4">$&</div>')
                .replace(
                  /<a.*?class="wp-block-button__link.*?">.*?<\/a>/g,
                  '<a class="block py-2 px-4 bg-blue-500 my-3 text-white rounded-md text-center" target="_blank" rel="noreferrer noopener">Download Truecaller</a>'
                )
                .replace(
                  /<iframe/g,
                  '<div class="relative pt-[56.25%] my-4"><iframe class="absolute top-0 left-0 w-full h-full"'
                )
                .replace(/<\/iframe>/g, "</iframe></div>"),
            }}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Details;
