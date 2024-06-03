import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { FaSearch, FaBars } from "react-icons/fa";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showLinks, setShowLinks] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="hamburger" onClick={toggleLinks}>
        <FaBars />
      </div>
      <div className="right">
        {scrolled ? (
          <img src="/logo.png" alt="Logo" className="logo1" />
        ) : (
          <img src="/logo2.png" alt="Logo" className="logo" />
        )}
        <ul className={`nav-links ${showLinks ? "show" : ""}`}>
          <li>
            <a href="#link1">Features</a>
          </li>
          <li>
            <a href="#link2">Insights</a>
          </li>
          <li>
            <a href="#link3">News</a>
          </li>
          <li>
            <a href="#link4">Scam Alert</a>
          </li>
          <li>
            <a href="#link5">Life at TrueCaller</a>
          </li>
          <li>
            <a href="#link6">Diversity & Inclusion</a>
          </li>
          <li>
            <a href="#link7">Impact</a>
          </li>
        </ul>
      </div>
      <div className="nav-right">
        <select className="language-dropdown">
          <option value="en">English</option>
          <option value="es">Spanish</option>
          <option value="fr">French</option>
        </select>
        <FaSearch className="search-icon" />
      </div>
    </nav>
  );
};

export default Navbar;
