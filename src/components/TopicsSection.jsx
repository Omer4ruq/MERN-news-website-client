import { ChevronRight } from "lucide-react";
import React from "react";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { NavLink } from "react-router-dom";

const TopicsSection = ({ article }) => {
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
  const handleDetails = async () => {
    const menuItem = {
      views: views + 1,
    };
    const menuRes = await axiosSecure.patch(`/articleViews/${_id}`, menuItem);
    console.log(menuItem);
  };
  return (
    <div className="p-4 md:p-8">
      {/* Border line */}
      <div className="mx-0 border-0 h-[2px] w-full bg-[rgb(58,60,62)] mb-4"></div>
      <div className="flex items-center">
        <h1 className="text-[rgb(32,34,36)] text-sm font-bold font-noto">
          Science and health
        </h1>
        <ChevronRight></ChevronRight>
      </div>
      <div className="md:flex p-5">
        <div className="text-start my-auto p-12">
          <h1 className="text-start text-lg font-bold font-noto pb-3 hover:underline">
            {articleTitle}
          </h1>
          <p className="pb-4 text-sm text-start">{description}</p>
          <NavLink to={`/details-news/${_id}`} onClick={handleDetails}>
            <button className=" m-0 px-2 py-1 text-sm border-2 border-black hover:border-0 hover:bg-slate-700 font-robotoSlab align-baseline">
              See more
            </button>
          </NavLink>
        </div>

        <img src={image} alt="" />
      </div>
    </div>
  );
};

export default TopicsSection;
