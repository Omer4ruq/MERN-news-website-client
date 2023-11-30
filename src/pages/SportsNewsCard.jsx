import React from "react";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { NavLink } from "react-router-dom";

const SportsNewsCard = ({ article }) => {
  const axiosSecure = useAxiosSecure();
  const {
    articleTitle,
    image,
    category,
    date,
    email,
    name,
    description,
    authorImage,
    _id,
    views,
    status,
    premium,
  } = article;

  const [sliderRef] = useKeenSlider({
    loop: true,
    mode: "free",
    slides: { origin: "center", perView: 2.5, spacing: 10 },
    range: {
      min: -5,
      max: 5,
    },
  });
  //   const handleDetails = async () => {
  //     const menuItem = {
  //       views: views + 1,
  //     };
  //     const menuRes = await axiosSecure.patch(`/articleViews/${_id}`, menuItem);
  //     console.log(menuItem);
  //   };

  //   const populer = article.sort(compareByView);
  //   console.log(populer);
  //   const [sliderRef] = useKeenSlider({
  //     loop: true,
  //     mode: "free",
  //     slides: {
  //       perView: 4,
  //       spacing: 1,
  //     },
  //   });

  //   const numberOfItemsToRender = 4;
  //   const limitedItems = article.slice(0, numberOfItemsToRender);
  const handleDetails = async () => {
    const menuItem = {
      views: views + 1,
    };
    const menuRes = await axiosSecure.patch(`/articleViews/${_id}`, menuItem);
    console.log(menuItem);
  };
  return (
    <div>
      <div>
        <div>
          <div className="keen-slider__slide number-slide1 relative">
            <img
              className="w-96 h-48 bg-gradient-to-b from-black to-transparent"
              src={image}
            />
            <div className="">
              <h1 className="absolute text-x font-semibold text-center  text-white -mt-20">
                {articleTitle}
              </h1>
            </div>
            <NavLink to={`/details-news/${_id}`}>
              <button
                className="bg-blue-500 -ml-12
         hover:bg-blue-700 text-white font-bold py-2 px-4 rounded h-10 w-72 mt-1 ml-28"
                onClick={handleDetails}
              >
                Details
              </button>
            </NavLink>
          </div>
        </div>

        {/* <div className="keen-slider__slide number-slide2">
          <img />
          <h1 className=" text-4xl text-center text-white -mt-10">Pizza</h1>
        </div>
        <div className="keen-slider__slide number-slide3">
          <img />
          <h1 className=" text-4xl text-center text-white -mt-10">Soups</h1>
        </div>
        <div className="keen-slider__slide number-slide4">
          <img />
          <h1 className=" text-4xl text-center text-white -mt-10">Desserts</h1>
        </div>
        <div className="keen-slider__slide number-slide5">
          <img />
          <h1 className=" text-4xl text-center text-white -mt-10">Salads</h1>
        </div>
        <div className="keen-slider__slide number-slide6">
          <img />
          <h1 className=" text-4xl text-center text-white -mt-10">Salads</h1>
        </div> */}
      </div>
    </div>
  );
};

export default SportsNewsCard;
