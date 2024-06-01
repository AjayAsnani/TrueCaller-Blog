import React, { useState, useEffect } from "react";
import "./Footer.css";

import { FaInstagram } from "react-icons/fa";
import { MdOutlineFacebook } from "react-icons/md";
import { RiTwitterXLine } from "react-icons/ri";
import { FaYoutube, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const links = [
    {
      title: "All TrueCaller Features",
      items: [
        "Android app",
        "IOS app",
        "Premium",
        "TrueCaller for Web",
        "Community",
        "Caller ID",
        "Spam Blocking",
        "Message ID",
        "TrueCaller Assistant - Call Screening",
        "Call Recording",
        "Message with TrueCaller",
      ],
    },
    {
      title: "Features",
      items: [
        "Calling with TrueCaller",
        "Caller ID for Messaging Apps",
        "Reverse Phone Number Lookup",
        "SMS sender ID Lookup",
        "Scam & Spam Number Lookup",
        "Instant Messaging",
        "Contacts Manager",
        "Video Caller ID",
        "VOIP",
        "Download TrueCaller",
      ],
    },
    {
      title: "About us",
      items: [
        "About us",
        "Impact",
        "Safety Center",
        "Media Kit",
        "Careers",
        "Investors",
        "Privacy",
        "Help",
      ],
    },
    {
      title: "Blog",
      items: [
        "Home",
        "Insights",
        "Scam Alert",
        "Features",
        "Impact",
        "News",
        "Diversity & Inclusion",
        "Life At TrueCaller",
      ],
    },
    {
      title: "Business",
      items: ["For Advertisers", "For Businesses", "For Developers"],
    },
  ];

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="column">
          <img src="../../../public/play.avif" alt="Play Store" />
          <img src="../../../public/app.avif" alt="App Store" />
        </div>{" "}
        {links.map((linkGroup, index) => (
          <div className="column" key={index}>
            {isMobile ? (
              <>
                {linkGroup.title && (
                  <p
                    className="dropdown-toggle"
                    onClick={() => toggleDropdown(index)}
                  >
                    {linkGroup.title}
                  </p>
                )}
                <div
                  className={`dropdown ${
                    activeDropdown === index ? "active" : ""
                  }`}
                >
                  <div className="dropdown-content">
                    {linkGroup.items.map((item, idx) => (
                      <a href="#" key={idx}>
                        {item}
                      </a>
                    ))}
                  </div>
                </div>
              </>
            ) : (
              <>
                {linkGroup.title && <p>{linkGroup.title}</p>}
                {linkGroup.items.map((item, idx) => (
                  <a href="#" key={idx}>
                    {item}
                  </a>
                ))}
              </>
            )}
          </div>
        ))}
      </div>
      <div className="footer-bottom">
        <p>© 2024 Your Company. All rights reserved.</p>
        <div className="social-logos">
          <MdOutlineFacebook />
          <RiTwitterXLine />
          <FaInstagram />
          <FaYoutube />
          <FaLinkedin />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
