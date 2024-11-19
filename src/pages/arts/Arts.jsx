import React from "react";
import useArticles from "../../hooks/useArticles";
import NewsCard from "../../components/NewsCard";
import Advertise from "../../components/Advertise";
import { Helmet } from "react-helmet-async";

const Arts = () => {
  const [article, , refetch] = useArticles();
  return (
    <div className="p-4">
      <Helmet>
        <title>BBC Arts</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <div>
        <Advertise
          img={"https://tpc.googlesyndication.com/simgad/9360095281781538776"}
        ></Advertise>
      </div>
      <div className="pt-2 grid grid-cols-2 md:grid-cols-4 gap-3">
        {article.map((article) =>
          article.category === "Health and Life Style" ? (
            <NewsCard key={article._id} article={article}></NewsCard>
          ) : null
        )}
      </div>
    </div>
  );
};

export default Arts;
