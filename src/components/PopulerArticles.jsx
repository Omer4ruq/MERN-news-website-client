import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import useArticles from "../hooks/useArticles";

const PopulerArticles = () => {
  const [article, , refetch] = useArticles();

  function compareByView(a, b) {
    return b.views - a.views;
  }
  const populer = article.sort(compareByView);
  console.log(populer);

  const [sliderRef] = useKeenSlider({
    loop: true,
    mode: "free",
    slides: { origin: "center", perView: 2.5, spacing: 10 },
    range: {
      min: -5,
      max: 5,
    },
  });

  const numberOfItemsToRender = 6;
  const limitedItems = populer.slice(0, numberOfItemsToRender);
  return (
    <div>
      {/* <div className="flex border-red-700  border-l-4 border-t-0 border-r-0 border-b-0"> */}
      <div className="flex">
        <h1 className="text-2xl font-semibold text-red-600">I</h1>
        <h1 className="mb-2 ml-2 text-2xl font-semibold text-start pt-0 ">
          Trending News
        </h1>
      </div>
      <div ref={sliderRef} className="keen-slider">
        {limitedItems.map((populer) => (
          <div key={populer._id}>
            <div className="keen-slider__slide number-slide1 relative">
              <img
                className="w-96 h-48 bg-gradient-to-b from-black to-transparent"
                src={populer.image}
              />
              <div className="">
                <h1 className="absolute text-x font-semibold text-center  text-white -mt-20">
                  {populer.articleTitle}
                </h1>
              </div>
            </div>
          </div>
        ))}

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

export default PopulerArticles;
