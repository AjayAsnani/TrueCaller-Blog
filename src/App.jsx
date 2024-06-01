import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PostList from "./components/PostList/PostList";
import Details from "./components/Details/Details";
import Home from "./components/Home/Home";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PostList />} />
        <Route path="/post/:slug" element={<Details />} />
      </Routes>
    </Router>
  );
};
export default App;
