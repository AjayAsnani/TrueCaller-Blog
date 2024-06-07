import React, { useEffect, useState } from "react";
import { fetchCategories } from "../../api";

const CategoryFilter = ({ setSelectedCategory }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategories().then((response) => {
      setCategories(response.data.categories);
    });
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Latest Articles</h1>
      <select
        onChange={(e) => setSelectedCategory(e.target.value)}
        className="rounded-[20%] border-none p-[18px] outline-none mb-[20px]"
      >
        <option value="">All Categories</option>
        {categories.map((category) => (
          <option key={category.slug} value={category.slug}>
            {category.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategoryFilter;
