import React from "react";
import { useLoaderData } from "react-router-dom";
import HTMLReactParser from "html-react-parser";
import RelatedArticles from "../components/RelatedArticles";
import BlackSection from "../components/BlackSection";
import { MdAdd } from "react-icons/md";
import { IoIosAdd } from "react-icons/io";
import { FaShareAlt } from "react-icons/fa";
import { Dropdown } from "flowbite-react";
import { FaFacebookF } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Details = () => {
  const article = useLoaderData();

  const { articleTitle, image, name, publisherName, content, category } =
    article;

  return (
    <div>
      <div className="flex justify-center items-center min-h-screen px-4">
        <section>
          {/* Article Title */}
          <div className="text-start mb-0 w-full font-roboto max-w-3xl mx-auto p-2  md:pt-10">
            <h1 className="font-semibold text-2xl md:text-3xl text-black mb-2 font-noto">
              {articleTitle}
            </h1>
            <div className="flex  items-start md:flex-row justify-between md:space-x-4 text-gray-400  text-xs mb-2">
              <h2>21 hours ago</h2>
              <div className="flex space-x-3 ">
                <div className="flex items-center  text-black gap-1">
                  <h2 className="text-black font-semibold cursor-pointer">
                    <Dropdown
                      className="font-normal"
                      arrowIcon={false}
                      inline
                      label={"Share"}
                    >
                      <Dropdown.Header className="z-4000 space-y-3">
                        <span className=" text-sm flex gap-2 items-center  hover:underline">
                          <FaFacebookF /> Facebook
                        </span>
                        <span className=" text-sm flex gap-2 items-center hover:underline">
                          <FaSquareXTwitter /> X (Twitter)
                        </span>
                        <span className=" text-sm flex gap-2 items-center hover:underline">
                          <FaInstagramSquare /> Instagram
                        </span>
                        <span className=" text-sm flex gap-2 items-center hover:underline">
                          <FaLinkedin /> Linkedin
                        </span>
                      </Dropdown.Header>
                    </Dropdown>
                  </h2>
                  <div>
                    <FaShareAlt className="text-black  font-extrabold" />
                  </div>
                </div>

                <div className="flex items-center font-extrabold">
                  <h2 className="text-black  cursor-pointer ">Save</h2>
                  <div>
                    <IoIosAdd className="text-black text-2xl font-extrabold" />
                  </div>
                </div>
              </div>
            </div>
            <h1 className="text-sm font-bold text-black">{name}</h1>
            <h2 className="text-gray-400 font-thin text-xs">{publisherName}</h2>
          </div>

          {/* Article Image */}
          <div className="flex justify-center mb-6 ">
            <img
              src={image}
              alt="Article"
              className="w-full max-w-[900px] h-auto "
            />
          </div>

          {/* Article Content */}
          <div className="text-gray-700 text-justify leading-relaxed px-2 md:px-44 mb-10">
            <p>{HTMLReactParser(content)}</p>
          </div>
        </section>
      </div>

      <div className="">
        <div className="">
          <RelatedArticles category={category}></RelatedArticles>
        </div>
      </div>
    </div>
  );
};

export default Details;
