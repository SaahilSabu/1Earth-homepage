import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
const Hero = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    axios.get("https://catfact.ninja/fact").then((resp) => {
      setData(resp.data.fact);
    });
  }, []);
  return (
    <div className="w-auto flex text-center justify-center items-center">
      <div className="flex-wrap mt-10">
        <h1 className="font-bold text-5xl text-center p-5">{data}</h1>
        <p className="text-lg py-4">
          Buy 1Earth. Join and fund causes. Change the world
        </p>
      </div>
    </div>
  );
};

export default Hero;
