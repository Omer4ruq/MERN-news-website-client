import React, { useState } from "react";
import useArticles from "../hooks/useArticles";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { div } from "framer-motion/client";
import { Card } from "flowbite-react";
import { NavLink } from "react-router-dom";
import useAxiosSecure from "../hooks/useAxiosSecure";

const RelatedArticleCard = ({ article }) => {
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
    publisherName,
  } = article;
  const handleDetails = async () => {
    const menuItem = {
      views: views + 1,
    };
    const menuRes = await axiosSecure.patch(`/articleViews/${_id}`, menuItem);
    console.log(menuItem);
  };
  console.log("sadfsdfsd");
  return (
    <div>
      <div>
        {status === "approved" && premium === "premium" ? (
          <Card className="bg-orange-400 hover:scale-70 transition-all duration-300 ease-in-out cursor-pointer">
            <div>
              <img className="w-[500px] h-32" src={image} alt="" />
            </div>
            <h5 className="text-sm h-10 font-bold tracking-tight text-black dark:text-white">
              {articleTitle.length > 50
                ? `${articleTitle.slice(0, 49)}...`
                : articleTitle}
            </h5>
            <div className="font-medium text-xs text-center  text-gray-700 dark:text-gray-400">
              {" "}
              <h1 className="">{publisherName}</h1>
            </div>
            <NavLink to={`/subscribtion`}>
              <button
                className="bg-black rounded-md w-20 text-slate-50"
                onClick={handleDetails}
              >
                Details
              </button>
            </NavLink>
          </Card>
        ) : (
          status === "approved" && (
            <Card className=" hover:scale-90 transition-all duration-300 ease-in-out cursor-pointer">
              <div>
                <img className="w-[500px] h-32" src={image} alt="" />
              </div>
              <h5 className="text-sm h-10 font-bold tracking-tight text-black dark:text-white">
                {articleTitle.length > 50
                  ? `${articleTitle.slice(0, 49)}...`
                  : articleTitle}
              </h5>

              {/* <FaTag className="w-8"></FaTag> */}
              <div className="font-medium text-xs text-center  text-gray-700 dark:text-gray-400">
                {" "}
                <h1 className="">{publisherName}</h1>
              </div>

              <NavLink to={`/details-news/${_id}`}>
                <button
                  className="bg-black rounded-md w-20 text-slate-50"
                  onClick={handleDetails}
                >
                  Details
                </button>
              </NavLink>
            </Card>
          )
        )}
      </div>
    </div>
  );
};

export default RelatedArticleCard;
