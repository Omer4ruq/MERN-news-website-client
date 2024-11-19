import React from "react";
import useArticles from "../hooks/useArticles";
import SportsNewsCard from "./SportsNewsCard";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";
import NewsCard from "../components/NewsCard";

const SportsNews = () => {
  // const [sliderRef] = useKeenSlider({
  //   loop: true,
  //   mode: "free",
  //   slides: { origin: "center", perView: 2.5, spacing: 10 },
  //   range: {
  //     min: -5,
  //     max: 5,
  //   },
  // });
  const slideRef = useRef(null);
  const scrollLeft = () => {
    slideRef.current?.scrollBy({
      left: -slideRef.current.offsetWidth,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    slideRef.current?.scrollBy({
      left: slideRef.current.offsetWidth,
      behavior: "smooth",
    });
  };
  const [article, , refetch] = useArticles();
  return (
    <div className="relative pt-0 p-2 sm:p-6 md:p-8 lg:pt-10">
      {/* Section title */}
      <div className="flex justify-between">
        <div className="flex items-center mb-4">
          <h1 className="text-2xl font-semibold text-red-600">I</h1>
          <h1 className="ml-2 text-2xl font-semibold">Sports News</h1>
        </div>
        <div className="flex">
          <button
            className=" top-1/2 transform  left-5 flex items-center justify-center w-10 h-10  hover:bg-black bg-opacity-50 hover:bg-opacity-75 text-black z-10"
            onClick={scrollLeft}
          >
            <ChevronLeft size={24} />
          </button>
          <button
            className=" top-1/2 transform  right-5 flex items-center justify-center w-10 h-10 hover:bg-black  bg-opacity-50 hover:bg-opacity-75 text-black z-10"
            onClick={scrollRight}
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>

      {/* Slider Container */}
      <div className="text-white relative">
        <div
          className="flex  justify-between overflow-x-scroll scrollbar-hide gap-5"
          ref={slideRef}
        >
          {/* News Cards */}
          {article.map((article) =>
            article.category === "Sports News" ? (
              <NewsCard
                key={article._id}
                article={article}
                size={"240px"}
              ></NewsCard>
            ) : null
          )}
        </div>

        {/* Navigation Buttons */}
      </div>
    </div>
  );
};

export default SportsNews;
