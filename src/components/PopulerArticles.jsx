import "keen-slider/keen-slider.min.css";
import useArticles from "../hooks/useArticles";
import NewsCard from "./NewsCard";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

const PopulerArticles = () => {
  const [article] = useArticles();

  // Sort articles by views
  const populer = article.sort((a, b) => b.views - a.views);
  const numberOfItemsToRender = 6;
  const limitedItems = populer.slice(0, numberOfItemsToRender);

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

  return (
    <div className="relative pt-0 p-4 sm:p-6 md:p-8 lg:pt-10">
      {/* Section title */}
      <div className="flex justify-between">
        <div className="flex items-center mb-4">
          <h1 className="text-2xl font-semibold text-red-600">I</h1>
          <h1 className="ml-2 text-2xl font-semibold">Trending News</h1>
        </div>
        <div className="flex">
          <button
            className=" top-1/2 transform  left-5 flex items-center hover:bg-black justify-center w-10 h-10   bg-opacity-50 hover:bg-opacity-75 text-black z-10"
            onClick={scrollLeft}
          >
            <ChevronLeft size={24} />
          </button>
          <button
            className=" top-1/2 transform  right-5 flex items-center hover:bg-black justify-center w-10 h-10   bg-opacity-50 hover:bg-opacity-75 text-black z-10"
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
          {limitedItems.map((item, index) => (
            <NewsCard key={index} article={item} />
          ))}
        </div>

        {/* Navigation Buttons */}
      </div>
    </div>
  );
};

export default PopulerArticles;
