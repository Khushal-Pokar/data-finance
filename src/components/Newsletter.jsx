import React from "react";

const Newsletter = () => {
  return (
    <div className="text-white w-full py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3">
        <div className="lg:col-span-2 my-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold py-2">
            Want tips & tricks to optimize your flow?
          </h1>
          <p>Sign up to our newsletter and stay up to date.</p>
        </div>

        <div className="my-4">
          <div className="flex flex-col sm:flex-row items-center justify-between w-full">
            <input
              className="flex rounded-md w-full p-3"
              type="email"
              placeholder="Enter your email"
            />
            <button className="bg-[#00df9a] w-[200px] rounded-md font-medium ml-4 my-6 px-6 py-3 text-black hover:scale-110 hover:duration-500 hover:text-[#00df9a] hover:bg-black hover:border hover:border-[#00df9a]">
              Notify me
            </button>
          </div>
          <p>
            We care about the protection of your data. Read our{" "}
            <span className="cursor-pointer hover:underline hover:underline-offset-2 text-[#00df9a]">
              Privacy Policy.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
