import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../../slices/categoriesSlice";

const CategoryFilter = ({ setSelectedCategory }) => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.items);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Latest Articles</h1>
      <select
        onChange={(e) => setSelectedCategory(e.target.value)}
        className="rounded-[10%] border-none p-[18px] outline-none mb-[20px]"
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
