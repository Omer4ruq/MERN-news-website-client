import React from "react";
import useArticles from "../../hooks/useArticles";
import NewsCard from "../../components/NewsCard";
import Advertise from "../../components/Advertise";

const Travel = () => {
  const [article, , refetch] = useArticles();
  return (
    <div className="p-4">
      <div>
        <Advertise
          img={"https://tpc.googlesyndication.com/simgad/9360095281781538776"}
        ></Advertise>
      </div>
      <div className="pt-2 grid grid-cols-2 md:grid-cols-4 gap-3">
        {article.map((article) =>
          article.category === "Travel" ? (
            <NewsCard key={article._id} article={article}></NewsCard>
          ) : null
        )}
      </div>
    </div>
  );
};

export default Travel;
