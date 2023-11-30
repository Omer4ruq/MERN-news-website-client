import React, { useState } from "react";
import useArticles from "../hooks/useArticles";
import { Card } from "flowbite-react";
import ApprovedArticlesCard from "./ApprovedArticlesCard";
import PageTitle from "../components/PageTitle";
import { FaSearch } from "react-icons/fa";
import useAxiosPublic from "../hooks/useAxiosPublic";

const ApprovedArticles = () => {
  const [article, , refetch] = useArticles();

  const [search, setSearch] = useState("");

  const axiosPublic = useAxiosPublic();
  const handleSearch = (e) => {
    e.preventDefault();
    const searchText = e.target.search.value;
    const searchRes = axiosPublic.get(`/articleSearch/?search=${searchText}`, {
      searchText,
    });
    console.log(searchRes);
    setSearch(searchRes);
  };
  return (
    // <div>
    //   {
    //     <div className="grid grid-cols-4 gap-3">
    //     {article.map((article) => (

    //       <ApprovedArticlesCard
    //       key={article.id}
    //       article={article}
    //     ></ApprovedArticlesCard>

    //         ))}

    //   }
    //   </div>
    <div>
      <div className="flex justify-between">
        <div className="w-[1200px]">
          <PageTitle
            heading="All News"
            subHeading="From Our Editors"
          ></PageTitle>
        </div>

        <div>
          <form
            onSubmit={handleSearch}
            className="bg-slate-100  mt-20 rounded-lg flex items-center "
          >
            <input
              type="text"
              name="search"
              placeholder="Search Articles"
              className="bg-transparent border-none w-4 sm:w-64"
              // value={searchTerm}
              // onChange={(e) => setSearchTerm(e.target.value)}
              // onChange={(e) => handleSearch(e.target.value)}
            />
            <button type="submit" value={"search"}>
              {" "}
              <FaSearch className="text-slate-600"></FaSearch>
            </button>
          </form>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-3">
        {article.map((article) =>
          article.status === "approved" ? (
            <ApprovedArticlesCard
              key={article._id}
              article={article}
            ></ApprovedArticlesCard>
          ) : null
        )}
      </div>
    </div>
  );
};

export default ApprovedArticles;
