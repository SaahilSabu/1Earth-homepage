import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between m-3 items-center text-sm">
      <div className="bg-auto flex">
        <div className=" w-auto h-10 flex items-center">
          <img
            src="https://s2.coinmarketcap.com/static/img/coins/200x200/14682.png"
            className="w-10 h-10"
            alt="logo"
          />
          <h1 className="font-medium px-5 text-xl">EARTHFUND</h1>
          <div className="mx-10 border-l-2 border-solid h-8 w-auto border-gray-300"></div>
          <div className="flex items-center w-auto font-medium">
            <Link to="/" className="px-4">
              Causes
            </Link>
            <Link to="/" className="px-4">
              Projects
            </Link>
            <Link to="/" className="px-4 ">
              <button className="px-5 mr-4 font-medium border-2 border-gray-800 rounded-md py-0.5 shadow-md text-md flex items-center">
                Buy 1Earth
              </button>
            </Link>
            <Link to="/" className="px-4">
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                Search
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="text-sm ">
        <button className="px-5 mr-4 font-medium">Login</button>
        <button className="px-5 mr-4 py-2 bg-violet-500 text-white rounded-xl border-violet-600 font-medium">
          SignUp
        </button>
      </div>
    </div>
  );
};

export default Navbar;
