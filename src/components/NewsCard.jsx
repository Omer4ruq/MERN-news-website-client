import React from "react";
import { NavLink } from "react-router-dom";
import useAxiosSecure from "../hooks/useAxiosSecure";

const NewsCard = ({ article }) => {
  const axiosSecure = useAxiosSecure();
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
      className="flex flex-col justify-between "
      onClick={handleDetails}
    >
      <div className="w-[240px]">
        {/* Adjusted image width to match the container */}
        <img className="w-[240px] h-auto" src={image} alt={articleTitle} />
        <h1 className=" text-base font-semibold text-start  hover:underline overflow-hidden text-black mt-2">
          {articleTitle}
        </h1>
        <h1 className="text-[rgb(32,34,36)] font-sans font-normal text-[14px] leading-[18px] mt-2 tracking-[0px] text-start">
          {description}
        </h1>
        <div className="mt-2 h-8 flex items-center gap-2">
          <div className="font-sans text-[12px] leading-[14px] tracking-[-0.12px] text-gray-600">
            {timeAgo(date)}
          </div>
          <div className="bg-gray-600 mx-[2px] h-4 w-[1px]"></div>
          <div className="font-sans text-[12px] leading-[14px] tracking-[-0.12px] text-gray-600">
            {category}
          </div>
        </div>
        {/* Adjusted the hr line to be thinner and consistent */}
        <hr className="mt-2 border-gray-300" />
      </div>
    </NavLink>
  );
};

export default NewsCard;
