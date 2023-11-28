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
    slides: {
      perView: 4,
      spacing: 1,
    },
  });
  return (
    <div>
      <div ref={sliderRef} className="keen-slider">
        {populer.map((populer) => (
          <div key={populer._id}>
            <div className="keen-slider__slide number-slide1 relative">
              <img className="w-80 h-48" src={populer.image} />
              <h1 className=" text-4xl text-center text-white -mt-10">
                {populer.articleTitle}
              </h1>
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
