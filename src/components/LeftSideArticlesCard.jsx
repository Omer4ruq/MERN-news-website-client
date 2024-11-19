import React from "react";
import { NavLink } from "react-router-dom";

const LeftSideArticlesCard = ({ article }) => {
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
  const handleDetails = async () => {
    const menuItem = {
      views: views + 1,
    };
    const menuRes = await axiosSecure.patch(`/articleViews/${_id}`, menuItem);
    console.log(menuItem);
  };

  return (
    <NavLink
      to={`/details-news/${_id}`}
      onClick={handleDetails}
      className="w-full h-auto  flex md:flex-wrap mb-3"
    >
      <img
        className="sm:w-[120px] md:w-full lg:w-full h-[90px]  md:h-auto"
        src={image}
        alt={articleTitle}
      />
      <div className="ml-3 md:ml-0">
        <h1 className="text-sm md:text-base font-semibold text-start font-noto  md:mt-2 text-black hover:underline">
          {articleTitle}
        </h1>
        <h1 className=" text-[rgb(32,34,36)] hidden md:block font-sans font-normal text-[14px] leading-[18px] tracking-[0px] text-start">
          {description}
        </h1>
        <div className="md:mt-2 h-8 flex items-center gap-1 md:gap-2">
          <div className="font-sans text-[12px] leading-[14px] tracking-[-0.12px] text-gray-600">
            {timeAgo(date)}
          </div>
          <div className="bg-gray-600 mx-[2px] h-4 w-[1px]"></div>
          <div className="font-sans text-[12px] leading-[14px] tracking-[-0.12px] text-gray-600">
            {category}
          </div>
        </div>
        <hr className="mt-2 h-8 flex items-center gap-2" />
      </div>
    </NavLink>
  );
};

export default LeftSideArticlesCard;
