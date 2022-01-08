import React from "react";
import Navbar from "./../components/Navbar";
import Hero from "./../components/Hero";
import Stats from "./../components/Stats";
import Form from "./../components/Form";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Stats />
      <Form />
    </div>
  );
};

export default Home;
