import axios from "axios";

const API_BASE = "https://public-api.wordpress.com/rest/v1.1/sites/107403796";

export const fetchPosts = (category = "", page = 1) => {
  let url = `${API_BASE}/posts/?fields=slug,categories,post_thumbnail,title,date&number=20&page=${page}`;
  if (category) {
    url += `&category=${category}`;
  }
  return axios.get(url);
};

export const fetchCategories = () => {
  return axios.get(`${API_BASE}/categories`);
};

export const fetchPostBySlug = (slug) => {
  return axios.get(
    `${API_BASE}/posts/slug:${slug}?fields=featured_image,title,author,content,date`
  );
};
