import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import SingleCart from "../SingleCart/SingleCart";

const Home = () => {
  const data = useLoaderData();
  const cartData = data.data;
  return (
    <div>
      <div className="h-[400px] w-full bg-gradient-to-b from-purple-900 to-blue-300">
        <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
            <div className="flex flex-col mb-10 sm:text-center sm:mb-0">
              <Link to="/" className="mb-6 sm:mx-auto">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-teal-accent-400">
                  <svg className="w-10 h-6 text-deep-purple-900" stroke="currentColor" viewBox="0 0 52 52">
                    <polygon strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23" />
                  </svg>
                </div>
              </Link>
              <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                <h2 className="max-w-lg  font-sans text-3xl font-bold leading-none tracking-tight text-white sm:text-4xl md:mx-auto">
                  <span className="relative inline-block">
                    <svg viewBox="0 0 52 24" fill="currentColor" className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-deep-purple-accent-100 lg:w-32 lg:-ml-28 lg:-mt-8 sm:block"></svg>
                  </span>{" "}
                  Web Development Quiz{" "}
                </h2>
                <p className="text-base text-indigo-100 md:text-lg">Welcome to the Web Development Quiz!</p>
                <p className="text-base text-indigo-100 md:text-lg"></p>
              </div>
              <div>
                <Link to="/" className=" bg-orange-400 inline-flex items-center justify-center h-12 px-6 font-semibold tracking-wide text-indigo-100 transition duration-200 rounded shadow-md hover:text-deep-purple-900  focus:shadow-outline focus:outline-none">
                  Let's Start
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div></div>

      <div className="grid lg:grid-cols-2 sm:grid-cols-1 justify-items-center pt-16">
        {cartData.map((cart) => (
          <SingleCart key={cart.id} cart={cart} />
        ))}
      </div>
    </div>
  );
};

export default Home;
