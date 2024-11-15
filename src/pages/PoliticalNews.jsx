import React from "react";
import useArticles from "../hooks/useArticles";
import SportsNewsCard from "./SportsNewsCard";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import PoliticalNewsCard from "./PoliticalNewsCard";
import BlackSection from "../components/BlackSection";

const PoliticalNews = () => {
  const [sliderRef] = useKeenSlider({
    loop: true,
    mode: "free",
    slides: { origin: "center", perView: 2.5, spacing: 10 },
    range: {
      min: -5,
      max: 5,
    },
  });
  const [article, , refetch] = useArticles();
  return (
    <div>
      {/* <div>
        <div className="flex">
          <h1 className="text-2xl font-semibold text-red-600">I</h1>
          <h1 className="mb-2 ml-2 text-2xl font-semibold text-start pt-0 ">
            Political News
          </h1>
        </div>
      </div> */}
      <div>
        <BlackSection
          key={article._id}
          title={"Trending Political News"}
          article={article}
          category={"Political News"}
        ></BlackSection>
      </div>

      {/* <div ref={sliderRef} className="keen-slider">
        {article.map((article) =>
          article.category === "Political News" ? (
            <BlackSection key={article._id} article={article}></BlackSection>
          ) : null
        )}
      </div> */}
    </div>
  );
};

export default PoliticalNews;
