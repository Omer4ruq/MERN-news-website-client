import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import useArticles from "../hooks/useArticles";
import LeftSideArticlesCard from "./LeftSideArticlesCard";
import { FaRegDotCircle } from "react-icons/fa";
import RightSideArticleSide from "./RightSideArticleSide";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"; // Import Framer Motion

const LatestNews = () => {
  const [article, refetch] = useArticles();

  const leftSideArticle = article.slice(0, 2);

  // Sort articles by date (newest first)
  const sortedByDate = article.sort(
    (a, b) => new Date(a.date) - new Date(b.date)
  );

  const rightSideArticle = article
    .filter((item) => item.category === "War")
    .slice(0, 3);
  const latestArticles = sortedByDate.slice(0, 4);
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Delays between children animations
      },
    },
  };

  // Animation variants for individual items
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };
  return (
    <div>
      {/* <div className="flex overflow-hidden">
        <h1 className="text-2xl font-semibold text-red-600">I</h1>
        <h1 className="mb-2 ml-2 text-2xl font-semibold text-start pt-0">
          Latest News
        </h1>
      </div> */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 p-2 md:p-6">
        {/* for mobile screen */}
        <section className="col-span-2 block md:hidden ">
          {latestArticles.map((article) =>
            article.liveStatus === "yes" ? (
              <Link to="live" key={article._id} className="hover:underline">
                <div className="w-full">
                  <img
                    className="w-full h-auto md:h-[300px] bg-gradient-to-b from-black to-transparent"
                    src={article.image}
                    alt={article.articleTitle}
                  />
                  <div className="flex gap-1 mt-4">
                    <FaRegDotCircle className="text-4xl font-extrabold text-red-700" />

                    <h1 className=" text-3xl font-semibold text-start font-noto overflow-hidden">
                      <span className="text-3xl font-bold text-red-700">
                        LIVE
                      </span>{" "}
                      {article.articleTitle}
                    </h1>
                  </div>

                  <h1 className=" text-sm font-base text-start pt-4">
                    {article.description}
                  </h1>
                </div>
                <div className="mt-8 p-4">
                  <ul className="font-semibold ">
                    <li className="list-disc gap-0 pb-2">
                      <h1 className="text-start">
                        Who has joined Trump's team and who is being linked to
                        it?
                      </h1>
                    </li>
                    <li className="list-disc gap-0 pb-2">
                      <h1 className="text-start">
                        Optimism and uncertainty at summit as Middle East awaits
                        Trump’s return
                      </h1>
                    </li>
                    <li className="list-disc gap-0">
                      <h1 className="text-start">
                        Power in the Palms: Inside the pilgrimage to Mar-a-Lago
                      </h1>
                    </li>
                  </ul>
                </div>
              </Link>
            ) : null
          )}
        </section>
        <section className="col-span-2 block md:hidden">
          {/* for mobile screen */}
          {leftSideArticle.map((article) => (
            <LeftSideArticlesCard
              key={article._id}
              article={article}
            ></LeftSideArticlesCard>
          ))}
        </section>

        {/* Left Side Articles */}
        <motion.section
          className="hidden md:block md:col-span-1"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {leftSideArticle.map((article) => (
            <motion.div key={article._id} variants={itemVariants}>
              <LeftSideArticlesCard article={article} />
            </motion.div>
          ))}
        </motion.section>

        <section className="md:col-span-2 hidden md:block ">
          {/* for laptop screen */}
          {latestArticles.map((article) =>
            article.liveStatus === "yes" ? (
              <Link to="live" key={article._id} className="hover:underline">
                <div className="w-full ">
                  <img
                    className="w-full  h-auto md:h-full "
                    src={article.image}
                    alt={article.articleTitle}
                  />
                  <div className="flex gap-1 mt-4">
                    <FaRegDotCircle className="text-4xl font-extrabold text-red-700" />

                    <h1 className=" text-3xl font-semibold text-start font-noto overflow-hidden">
                      <span className="text-3xl font-bold text-red-700">
                        LIVE
                      </span>{" "}
                      {article.articleTitle}
                    </h1>
                  </div>

                  <h1 className=" text-sm font-base text-start pt-4">
                    {article.description}
                  </h1>
                </div>
                <div className="mt-8 p-5">
                  <ul className="font-semibold ">
                    <li className="list-disc gap-0 pb-2">
                      <h1 className="text-start">
                        Who has joined Trump's team and who is being linked to
                        it?
                      </h1>
                    </li>
                    <li className="list-disc gap-0 pb-2">
                      <h1 className="text-start">
                        Optimism and uncertainty at summit as Middle East awaits
                        Trump’s return
                      </h1>
                    </li>
                    <li className="list-disc gap-0">
                      <h1 className="text-start">
                        Power in the Palms: Inside the pilgrimage to Mar-a-Lago
                      </h1>
                    </li>
                  </ul>
                </div>
              </Link>
            ) : null
          )}
        </section>
        <motion.section
          className="md:col-span-1 -mt-1"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {rightSideArticle.map((article) => (
            <motion.div key={article._id} variants={itemVariants}>
              <RightSideArticleSide article={article} />
            </motion.div>
          ))}
        </motion.section>
      </div>
    </div>
  );
};

export default LatestNews;
