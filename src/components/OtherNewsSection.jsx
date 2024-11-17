import React from "react";
import useArticles from "../hooks/useArticles";
import OtherSectionCard from "./OtherSectionCard";
import { FaGreaterThan } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";

const OtherNewsSection = () => {
  const [article] = useArticles();
  const war = article.filter((item) => item.category === "War").slice(0, 2);
  const science = article
    .filter((item) => item.category === "Scince and Technology")
    .slice(0, 2);
  const travel = article
    .filter((item) => item.category === "Earth")
    .slice(0, 2);
  const earth = article.filter((item) => item.category === "Earth").slice(0, 2);
  return (
    <div className="p-4 md:p-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
        <section className="md:col-span-1 -mt-1">
          <div className="mx-0 border-0 h-[2px] w-full bg-[rgb(58,60,62)] mb-4"></div>
          <div className="flex gap-1">
            <h1 className="text-start text-sm mb-4 font-semibold font-noto items-center">
              Israel-Gaza war
            </h1>
            <FaAngleRight className="items-center text-xl" />
            {/* <FaGreaterThan className="items-center font-extralight text-xl" /> */}
          </div>

          {war.map((article) => (
            <OtherSectionCard
              key={article._id}
              article={article}
            ></OtherSectionCard>
          ))}
        </section>
        <section className="md:col-span-1 -mt-1">
          <div className="mx-0 border-0 h-[2px] w-full bg-[rgb(58,60,62)] mb-4"></div>
          <div className="flex gap-1">
            <h1 className="text-start text-sm mb-4 font-semibold font-noto items-center">
              Scince and Technology
            </h1>
            <FaAngleRight className="items-center text-xl" />
            {/* <FaGreaterThan className="items-center font-extralight text-xl" /> */}
          </div>
          {science.map((article) => (
            <OtherSectionCard
              key={article._id}
              article={article}
            ></OtherSectionCard>
          ))}
        </section>
        <section className="md:col-span-1 -mt-1">
          <div className="mx-0 border-0 h-[2px] w-full bg-[rgb(58,60,62)] mb-4"></div>
          <div className="flex gap-1">
            <h1 className="text-start text-sm mb-4 font-semibold font-noto items-center">
              Travel
            </h1>
            <FaAngleRight className="items-center text-xl" />
            {/* <FaGreaterThan className="items-center font-extralight text-xl" /> */}
          </div>
          {travel.map((article) => (
            <OtherSectionCard
              key={article._id}
              article={article}
            ></OtherSectionCard>
          ))}
        </section>
        <section className="md:col-span-1 -mt-1">
          <div className="mx-0 border-0 h-[2px] w-full bg-[rgb(58,60,62)] mb-4"></div>
          <div className="flex gap-1">
            <h1 className="text-start text-sm mb-4 font-semibold font-noto items-center">
              Earth
            </h1>
            <FaAngleRight className="items-center text-xl" />
            {/* <FaGreaterThan className="items-center font-extralight text-xl" /> */}
          </div>
          {earth.map((article) => (
            <OtherSectionCard
              key={article._id}
              article={article}
            ></OtherSectionCard>
          ))}
        </section>
      </div>
    </div>
  );
};

export default OtherNewsSection;
