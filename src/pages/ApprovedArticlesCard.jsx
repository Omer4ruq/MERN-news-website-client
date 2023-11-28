import { Card } from "flowbite-react";
import React from "react";

const ApprovedArticlesCard = ({ article }) => {
  const {
    articleTitle,
    image,
    category,
    date,
    email,
    name,
    description,
    authorImage,
  } = article;
  return (
    <div>
      <Card className=" hover:scale-90 transition-all duration-300 ease-in-out cursor-pointer">
        <div>
          <img className="w-[500px] h-32" src={image} alt="" />
        </div>
        <h5 className="text-sm h-10 font-bold tracking-tight text-gray-900 dark:text-white">
          {articleTitle}
        </h5>
        <p className="font-medium text-sm  text-gray-700 dark:text-gray-400">
          {/* Here are you will find the best car washer in you Area. Who are the
          very much professiolas. And Authorized by our field mambers. */}
          <div
            className="flex gap-2 ml-4
          "
          >
            {/* <FaTag className="w-8"></FaTag> */}
            <div className="mt-4 text-xs"> {name}</div>
          </div>
        </p>
      </Card>
    </div>
  );
};

export default ApprovedArticlesCard;
