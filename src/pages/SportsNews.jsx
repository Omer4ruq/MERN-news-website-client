import React from "react";
import useArticles from "../hooks/useArticles";
import SportsNewsCard from "./SportsNewsCard";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const SportsNews = () => {
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
      <div ref={sliderRef} className="keen-slider">
        {article.map((article) =>
          article.category === "Sports News" ? (
            <SportsNewsCard
              key={article._id}
              article={article}
            ></SportsNewsCard>
          ) : null
        )}
      </div>
    </div>
  );
};

export default SportsNews;
