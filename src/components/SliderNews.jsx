import React from "react";
import { motion } from "framer-motion"; // Import motion from Framer Motion
import { Swiper, SwiperSlide } from "swiper/react";
import { FaQuoteLeft } from "react-icons/fa";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "./SliderNews.css";
import useArticles from "../hooks/useArticles";
import { ChevronRight } from "lucide-react";
import SliderNewsCard from "./SliderNewsCard";

const SliderNews = () => {
  const [articles] = useArticles();
  const war = articles.filter((item) => item.category === "War").slice(0, 2);

  return (
    <div className="p-2 md:p-8">
      <div className="mx-0 border-0 h-[2px] w-full bg-[rgb(58,60,62)] mb-4"></div>
      <div className="flex items-center">
        <h1 className="text-[rgb(32,34,36)] text-sm font-bold font-noto">
          Weekend Reads
        </h1>
        <ChevronRight></ChevronRight>
      </div>
      <div>
        <div className="">
          <section className="flex gap-2">
            {war.map((article) => (
              <div key={article.id}>
                <div className="">
                  <SliderNewsCard article={article}></SliderNewsCard>
                </div>
              </div>
            ))}
          </section>
        </div>
      </div>
    </div>
  );
};

export default SliderNews;
