import React from "react";
import NewsCard from "../../components/NewsCard";
import useArticles from "../../hooks/useArticles";
import { FaGreaterThan } from "react-icons/fa6";

const Football = () => {
  const [article, , refetch] = useArticles();
  return (
    <div>
      <div className="bg-black w-full">
        <div className="pl-8 pr-4 pt-2 pb-0">
          <div className="flex justify-start">
            <div className="flex gap-2 text-white items-center pb-2 pl-2">
              <h1 className=" ">Football</h1>
              <FaGreaterThan className="text-sm" />
            </div>
          </div>
        </div>
      </div>
      <div className="pt-2 grid grid-cols-4">
        {article.map((article) =>
          article.subCategory === "Football" ? (
            <NewsCard key={article._id} article={article}></NewsCard>
          ) : null
        )}
      </div>
    </div>
  );
};

export default Football;
