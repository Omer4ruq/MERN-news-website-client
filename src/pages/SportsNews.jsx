import React from "react";
import useArticles from "../hooks/useArticles";
import SportsNewsCard from "./SportsNewsCard";

const SportsNews = () => {
  const [article, , refetch] = useArticles();
  return (
    <div>
      <div>
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
