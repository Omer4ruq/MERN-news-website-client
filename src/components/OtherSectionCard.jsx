import React from "react";

const OtherSectionCard = ({ article }) => {
  function timeAgo(date) {
    const currentDate = new Date();
    const postDate = new Date(date);
    const diffTime = Math.abs(currentDate - postDate);

    const diffHours = Math.floor(diffTime / (1000 * 60 * 60));
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    const diffWeeks = Math.floor(diffDays / 7);
    const diffMonths = Math.floor(diffDays / 30);

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
    <div>
      <div className="w-full md:w-[260px]">
        {/* <img
          className="w-[260px] s"
          src={article.image}
          alt={article.articleTitle}
        /> */}
        <h1 className=" text-sm font-semibold text-start font-noto overflow-hidden">
          {article.articleTitle}
        </h1>
        {/* <h1 className=" text-[rgb(32,34,36)] font-sans font-normal text-[14px] leading-[18px] tracking-[0px] text-start">
          {article.description}
        </h1> */}
        <div className="mt-2 h-8 flex items-center gap-2">
          <div className="font-sans text-[10px] md:text-[12px] md:leading-[14px] md:tracking-[-0.12px] text-gray-600">
            {timeAgo(article.date)}
          </div>
          <div className="bg-gray-600 mx-[2px] h-4 w-[1px]"></div>
          <div className="font-sans text-[10px] md:text-[12px] md:leading-[14px] md:tracking-[-0.12px] text-gray-600">
            {article.category}
          </div>
        </div>
        <hr className="mt-2 h-8 flex items-center gap-2" />
      </div>
    </div>
  );
};

export default OtherSectionCard;
