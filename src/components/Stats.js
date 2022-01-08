import React from "react";

const Stats = () => {
  return (
    <div className="flex-wrap flex items-center justify-center p-10 m-2">
      <button className="w-60 h-40 mx-5 rounded-md  text-black relative bg-green-200">
        <div className="mx-3">
          <div className=" absolute right-0 top-0 flex m-2 justify-center items-center">
            <p className=" text-right px-2 text-green-500">+1.27%</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-green-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <h1 className="text-4xl mb-1 font-semibold">$0.13</h1>
          <h3 className="font-medium">1Earth price</h3>
        </div>
      </button>
      <button className="w-60 h-40 mx-5 rounded-md  text-black relative bg-violet-50">
        <div className="mx-3">
          <div className=" absolute right-0 top-0 flex m-2 justify-center items-center">
            <p className=" text-right px-2 text-green-500">+1.27%</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-green-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <h1 className="text-4xl mb-1 font-semibold">1.98M</h1>
          <h3 className="font-medium">24H Volume</h3>
        </div>
      </button>

      <button className="w-60 h-40 mx-5 rounded-md  text-black bg-purple-100">
        <div className="mx-3">
          <h1 className="text-4xl mb-1 font-semibold">34M</h1>
          <h3 className="font-medium">Circulation supply</h3>
        </div>
      </button>
      <button className="w-60 h-40 mx-5 bg-slate-200 rounded-md  text-black">
        <div className="mx-3">
          <h1 className="text-4xl mb-1 font-semibold">133.66M</h1>
          <h3 className="font-medium">Fully diluted market cap</h3>
        </div>
      </button>
    </div>
  );
};

export default Stats;
