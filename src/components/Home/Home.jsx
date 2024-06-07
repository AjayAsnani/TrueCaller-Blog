import React from "react";

const Home = () => {
  return (
    <div className="relative h-screen flex justify-center items-center overflow-hidden">
      <div className="absolute top-0 left-0 w-full  h-full bg-[url('/main2.avif')] md:bg-[url('/main.avif')] bg-cover bg-center before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-[url('/main.avif')] before:bg-cover before:bg-center before:z-[-2]" />
      <div className="absolute top-0 left-0 w-full h-full bg-black/20 z-[-1]" />
      <div className="relative z-1 text-white text-shadow-md">
        <h1 className="text-[4em] text-center md:text-center font-bold">
          The TrueCaller Blog
        </h1>
      </div>
    </div>
  );
};

export default Home;
