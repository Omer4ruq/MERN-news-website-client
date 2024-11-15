import React from "react";
import useArticles from "../hooks/useArticles";
import { FaRegDotCircle } from "react-icons/fa";
import { FaRegPlayCircle } from "react-icons/fa";
import LiveNewsNavbar from "../components/LiveNewsNavbar";

const LivePage = () => {
  const [article, refetch] = useArticles();
  return (
    <div>
      <div>
        <LiveNewsNavbar></LiveNewsNavbar>
      </div>
      <div>
        {article.map((article) =>
          article.liveStatus === "yes" ? (
            <div key={article._id} className="bg-black w-full ">
              <div className="w-full flex justify-between space-x-4 pl-10 pr-10 items-center">
                <div className="">
                  <div className="flex gap-1  items-center mb-4">
                    <FaRegDotCircle className="text-2xl font-extrabold text-slate-700" />
                    <h1 className="text-2xl font-bold text-slate-700">LIVE</h1>
                  </div>
                  <h1 className=" text-xl text-white font-semibold text-start font-noto overflow-hidden">
                    {" "}
                    {article.articleTitle}
                  </h1>
                </div>
                <div>
                  <img
                    className="w-full h-auto relative bg-gradient-to-b from-black to-transparent"
                    src={article.image}
                    alt={article.articleTitle}
                  />
                  <FaRegPlayCircle className="absolute -mt-40 ml-52 text-6xl text-red-600 cursor-pointer transform transition-transform duration-300 hover:scale-125" />
                </div>

                {/* <h1 className=" text-sm font-base text-start pt-4">
                    {article.description}
                  </h1> */}
              </div>
              {/* <div className="mt-8 p-4">
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
                </div> */}
            </div>
          ) : null
        )}
      </div>
    </div>
  );
};

export default LivePage;
