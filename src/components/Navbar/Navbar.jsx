import React, { useState, useEffect } from "react";
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

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

  return (
    <nav
      className={`fixed w-full z-[1000] transition-all duration-300 ease-in-out p-[10px] ${
        scrolled ? "bg-white text-black" : "text-white"
      } md:p-[22px]`}
    >
      <div className="flex items-center">
        {scrolled ? (
          <img
            src="/logo.png"
            alt="Logo"
            className="h-[30px] w-auto md:mr-[10px]"
          />
        ) : (
          <img
            src="/logo2.png"
            alt="Logo"
            className="h-[20px] w-auto md:mr-[10px]"
          />
        )}
        <div className="flex-grow"></div>
      </div>
    </nav>
  );
};

export default Navbar;
