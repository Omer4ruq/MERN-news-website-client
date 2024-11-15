import "keen-slider/keen-slider.min.css";
import useArticles from "../hooks/useArticles";
import NewsCard from "./NewsCard";
import { useKeenSlider } from "keen-slider/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";
import BlackSectionCard from "./BlackSectionCard";
import { div } from "framer-motion/client";

const BlackSection = ({ article, title, category }) => {
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
    <div className="w-full">
      <div className="w-full bg-[rgb(20,22,24)] py-10 px-4 md:px-8">
        {/* Border line */}
        <div className="mx-0 border-0 h-[2px] w-full bg-[rgb(230,232,234)] mb-4"></div>

        <div className="flex justify-between items-center">
          <h2 className="text-[rgb(230,232,234)] text-xl font-semibold">
            {title}
          </h2>
          <div className="flex">
            <button
              className="w-10 h-10 rounded-full bg-opacity-50 hover:bg-slate-600 text-white z-10 md:left-0 left-5 flex items-center justify-center"
              onClick={scrollLeft}
            >
              <ChevronLeft size={24} />
            </button>

            <button
              className="w-10 h-10 rounded-full bg-opacity-50 hover:bg-slate-600 text-white z-10 md:right-5 right-5 flex items-center justify-center"
              onClick={scrollRight}
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Card Section */}
        <div className="">
          <div className="relative mt-4">
            <div
              className="flex  justify-between overflow-x-scroll gap-5 scrollbar-hide"
              ref={slideRef}
            >
              {/* Filter and map through political news articles */}
              {article
                .filter((item) => item.category === category)
                .map((article) => (
                  <BlackSectionCard key={article._id} article={article} />
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlackSection;
