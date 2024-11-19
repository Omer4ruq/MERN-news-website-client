import React from "react";
import { NavLink } from "react-router-dom";
import useArticles from "../hooks/useArticles";
import AnnounceSectionCard from "./AnnounceSectionCard";

const AnnounceSection = () => {
  const [article] = useArticles();

  const announcement = article.filter(
    (item) => item.articleTitle === "Nigella's Amsterdam Christmas"
  );

  return (
    <div className=" min-h-fit  ">
      <div></div>
      {/* <div className="bg-gradient-to-r from-orange-500 to-pink-600 min-h-screen flex items-center justify-center">
        <img
          src="https://i.ibb.co/4tY62f8/istockphoto-1297776154-612x612.jpg"
          alt=""
          className="w-full h-auto mb-4"
        />

        <div className="text-white text-lg font-bold">Your Text Here</div>
      </div> */}
      <div className=" bg-red-600 flex items-center justify-center w-full overflow-hidden">
        <div className="relative  w-full">
          <img
            src="https://i.ibb.co/ggBd4yn/p0gw59r6.jpg"
            alt="Your Image"
            className="ml-[100px] md:ml-[600px] w-auto h-auto md:h-96  "
          />

          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-l from-transparent via-red-600  to-red-600 ">
            <div className="absolute top-1/2 left-1/12 transform -translate-y-1/2  font-bold ">
              {announcement.map((article, index) => (
                <AnnounceSectionCard
                  key={index}
                  article={article}
                ></AnnounceSectionCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnnounceSection;
