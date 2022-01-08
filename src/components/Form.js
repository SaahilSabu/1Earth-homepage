import React from "react";

const Form = () => {
  return (
    <div className="rounded-md border-2 mx-40 mb-10">
      <div className="flex p-5 justify-center items-center mt-4 ">
        <button className="px-5 mr-4 font-bold border-2 border-gray-800 rounded-md py-0.5 shadow-md text-sm flex items-center">
          Swap Tokens
        </button>
        <button className="px-5 mr-4 font-medium text-sm">
          Buy with Credit card
        </button>
      </div>
      <div className="flex justify-around items-center">
        <div className="rounded-md border-2 flex-1 flex  m-10 justify-between">
          <h2 className="p-3 mx-2 text-lg">0.5</h2>
          <select className="p-3 font-semibold border-l-2">
            <option value="eth">ETH</option>
            <option value="btc">BTC</option>
          </select>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
            clipRule="evenodd"
          />
        </svg>
        <div className="rounded-md border-2 flex-1 m-10 flex justify-between">
          <h2 className="p-3 mx-2 text-lg">15,384.61</h2>
          <h2 className="p-3 font-semibold text-red-500 text-lg mx-2">1EARTH</h2>
        </div>
      </div>
      <div className="flex justify-center items-center mx-20">
        <div className=" flex-1 flex justify-center items-center">
          <h2 className="p-3">
            Estimated cost<span className="font-bold mx-2">~$14.27</span>
          </h2>
        </div>
        <div className=" flex-1 flex justify-center items-center border-r-2 border-l-2">
          <h2 className="p-3">
            Price impact <span className="font-bold mx-2">-0.18%</span>
          </h2>
        </div>
        <div className=" flex-1 flex justify-center items-center">
          <h2 className="p-3">
            Minimum Received
            <span className="font-bold mx-2">
              15,154 <span className="text-red-500"> 1EARTH</span>
            </span>
          </h2>
        </div>
      </div>
      <div className=" flex justify-center items-center">
        <button className="p-3 bg-violet-500 text-white font-bold rounded-md my-10">
          Connect your wallet
        </button>
      </div>
    </div>
  );
};

export default Form;
