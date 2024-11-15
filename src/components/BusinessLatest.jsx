import React from "react";
import useArticles from "../hooks/useArticles";
import TopicsSectionRight from "./TopicsSectionRight";

const BusinessLatest = () => {
  const [article, refetch] = useArticles();
  const sortedArticles = article
    .filter((item) => item.category === "Business News")
    .slice(0, 1);
  return (
    <div>
      {sortedArticles.map((article) => (
        <TopicsSectionRight key={article._id} article={article} />
      ))}

      <></>
    </div>
  );
};

export default BusinessLatest;
