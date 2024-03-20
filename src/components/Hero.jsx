import React from "react";
import { ReactTyped } from "react-typed";

const Hero = () => {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-[#00df9a] font-bold p-2">
          GROWING WITH DATA ANALYTICS
        </p>
        <h1 className="font-bold text-4xl sm:text-6xl md:text-7xl md:py-6">
          Grow with data.
        </h1>
        <div className="flex justify-center items-center">
          <p className="font-bold text-xl sm:text-4xl md:text-5xl py-4">
            Fast, flexible financing for
          </p>
          <ReactTyped
            className="font-bold text-xl sm:text-4xl md:text-5xl pl-2 md:pl-4 text-[#00df9a]"
            strings={["BTB", "BTC", "SASS"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className="font-bold text-gray-500 text-xl md:text-2xl">Monitor your data analytics to increase revenue for BTB, BTC, & SASS platforms.</p>
        <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black hover:scale-110 hover:duration-500 hover:text-[#00df9a] hover:bg-black hover:border hover:border-[#00df9a]">Get Started</button>
      </div>
    </div>
  );
};

export default Hero;
