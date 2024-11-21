import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { ChevronRight } from "lucide-react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import SliderNewsCard from "./SliderNewsCard";
import useArticles from "../hooks/useArticles";

const SliderNews = () => {
  const [articles] = useArticles();
  const war = articles.filter((item) => item.category === "War").slice(0, 6); // Fetch top 6 articles for looping

  return (
    <div className="p-4 md:p-8">
      {/* Header Section */}
      <div className="mx-0 border-0 h-[2px] w-full bg-[rgb(58,60,62)] mb-4"></div>
      <div className="flex items-center mb-4">
        <h1 className="text-[rgb(32,34,36)] text-sm font-bold font-noto">
          Weekend Reads
        </h1>
        <ChevronRight />
      </div>

      {/* Swiper Slider */}
      <Swiper
        spaceBetween={20} // Space between slides
        slidesPerView={2} // Show 2 articles at a time
        loop={true} // Infinite looping
        autoplay={{
          delay: 2000, // Delay before sliding to the next set (in milliseconds)
          disableOnInteraction: false, // Continue autoplay even after user interaction
        }}
        pagination={{ clickable: true }} // Enable pagination dots
        navigation // Enable next/previous navigation
        modules={[Autoplay, Pagination, Navigation]} // Include modules
        className="w-full"
      >
        {war.map((article) => (
          <SwiperSlide key={article.id}>
            <SliderNewsCard article={article} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SliderNews;
