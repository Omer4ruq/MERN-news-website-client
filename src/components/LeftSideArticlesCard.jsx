import React from "react";

const LeftSideArticlesCard = ({ article }) => {
  function timeAgo(date) {
    const currentDate = new Date();
    const postDate = new Date(date);
    const diffTime = Math.abs(currentDate - postDate);

    const diffHours = Math.floor(diffTime / (1000 * 60 * 60));
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    const diffWeeks = Math.floor(diffDays / 7);
    const diffMonths = Math.floor(diffDays / 30); // Approximate month

    if (diffMonths >= 1) {
      return `${diffMonths} month${diffMonths > 1 ? "s" : ""} ago`;
    } else if (diffWeeks >= 1) {
      return `${diffWeeks} week${diffWeeks > 1 ? "s" : ""} ago`;
    } else if (diffDays >= 1) {
      return `${diffDays} day${diffDays > 1 ? "s" : ""} ago`;
    } else {
      return `${diffHours} hour${diffHours > 1 ? "s" : ""} ago`;
    }
  }

  return (
    <div className="w-full  flex  md:flex-wrap mb-3">
      <img
        className="w-full h-[100px]  md:h-auto"
        src={article.image}
        alt={article.articleTitle}
      />
      <div className="ml-3 md:ml-0">
        <h1 className="text-sm md:text-base font-semibold text-start font-noto  md:mt-2 text-black">
          {article.articleTitle}
        </h1>
        <h1 className=" text-[rgb(32,34,36)] hidden md:block font-sans font-normal text-[14px] leading-[18px] tracking-[0px] text-start">
          {article.description}
        </h1>
        <div className="md:mt-2 h-8 flex items-center gap-2">
          <div className="font-sans text-[12px] leading-[14px] tracking-[-0.12px] text-gray-600">
            {timeAgo(article.date)}
          </div>
          <div className="bg-gray-600 mx-[2px] h-4 w-[1px]"></div>
          <div className="font-sans text-[12px] leading-[14px] tracking-[-0.12px] text-gray-600">
            {article.category}
          </div>
        </div>
        <hr className="mt-2 h-8 flex items-center gap-2" />
      </div>
    </div>
  );
};

export default LeftSideArticlesCard;
