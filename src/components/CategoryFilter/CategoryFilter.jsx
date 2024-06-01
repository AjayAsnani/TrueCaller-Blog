// src/components/CategoryFilter.js
import React, { useEffect, useState } from "react";
import { fetchCategories } from "../../api";
import "./CategoryFilter.css";

const CategoryFilter = ({ setSelectedCategory }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategories().then((response) => {
      setCategories(response.data.categories);
    });
  }, []);

  return (
    <div>
      <h1>Latest Articles</h1>
      <select onChange={(e) => setSelectedCategory(e.target.value)}>
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
