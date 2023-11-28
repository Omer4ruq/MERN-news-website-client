import React from "react";
import Slider from "../components/Slider";
import PopulerArticles from "../components/PopulerArticles";
import useAdmin from "../hooks/useAdmin";

const Home = () => {
  const [isAdmin] = useAdmin();
  return (
    <div>
      <Slider></Slider>
      <PopulerArticles></PopulerArticles>
    </div>
  );
};

export default Home;
