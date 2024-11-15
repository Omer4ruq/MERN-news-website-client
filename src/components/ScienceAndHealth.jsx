import React from "react";
import TopicsSection from "./TopicsSection";
import useArticles from "../hooks/useArticles";

const ScienceAndHealth = () => {
  const [article, refetch] = useArticles();
  const sortedArticles = article.slice(0, 1);
  console.log(article.category);
  return (
    <div>
      {article
        .filter((item) => item.category === "Health and Life Style")
        .map((article) => (
          <TopicsSection key={article._id} article={article}></TopicsSection>
        ))}
      <></>
    </div>
  );
};

export default ScienceAndHealth;