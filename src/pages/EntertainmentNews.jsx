import React from "react";
import useArticles from "../hooks/useArticles";
import BlackSection from "../components/BlackSection";

const EntertainmentNews = () => {
  const [article, , refetch] = useArticles();
  return (
    <div>
      <div>
        <BlackSection
          key={article._id}
          title={"Entertainment News"}
          article={article}
          category={"Entertainment News"}
        ></BlackSection>
      </div>
    </div>
  );
};

export default EntertainmentNews;
