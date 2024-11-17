import React from "react";
import { NavLink } from "react-router-dom";

const RightSideArticleSide = ({ article }) => {
  const {
    articleTitle,
    image,
    category,
    date,
    email,
    name,
    description,
    authorImage,
    _id,
    views,
    status,
    premium,
  } = article;
  const handleDetails = async () => {
    const menuItem = {
      views: views + 1,
    };
    const menuRes = await axiosSecure.patch(`/articleViews/${_id}`, menuItem);
    console.log(menuItem);
  };

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
    <NavLink to={`/details-news/${_id}`} onClick={handleDetails}>
      <div className="sm:w-[280px] md:w-[260px] lg:[260px]">
        {/* <img
          className="w-[260px] s"
          src={article.image}
          alt={article.articleTitle}
        /> */}
        <h1 className=" text-base font-semibold text-start font-noto overflow-hidden hover:underline">
          {article.articleTitle}
        </h1>
        <h1 className=" text-[rgb(32,34,36)] font-sans font-normal text-[14px] leading-[18px] tracking-[0px] text-start">
          {article.description}
        </h1>
        <div className="mt-2 h-8 flex items-center gap-2">
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
    </NavLink>
  );
};

export default RightSideArticleSide;
