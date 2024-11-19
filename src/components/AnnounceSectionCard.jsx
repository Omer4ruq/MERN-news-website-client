import React from "react";
import { NavLink } from "react-router-dom";
import useAxiosSecure from "../hooks/useAxiosSecure";

const AnnounceSectionCard = ({ article }) => {
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
  const axiosSecure = useAxiosSecure();
  const handleDetails = async () => {
    const menuItem = {
      views: views + 1,
    };
    const menuRes = await axiosSecure.patch(`/articleViews/${_id}`, menuItem);
    console.log(menuItem);
  };
  return (
    <div>
      <NavLink to={`/details-news/${_id}`} onClick={handleDetails}>
        <h3 className="text-2xl font-robotoSlab font-semibold sm:text-6xl pl-0 md:pl-4 w-2/4 md:w-3/4 hover:underline group-focus:underline cursor-pointer">
          {articleTitle}
        </h3>
      </NavLink>
    </div>
  );
};

export default AnnounceSectionCard;
