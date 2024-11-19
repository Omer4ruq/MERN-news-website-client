import React, { useState } from "react";
import useArticles from "../hooks/useArticles";
import { Card } from "flowbite-react";
import ApprovedArticlesCard from "./ApprovedArticlesCard";
import PageTitle from "../components/PageTitle";
import { FaSearch } from "react-icons/fa";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { useInfiniteQuery } from "@tanstack/react-query";
import InfiniteScroll from "react-infinite-scroll-component";
import NewsCard from "../components/NewsCard";
import { Helmet } from "react-helmet-async";

// const getArticles = async ({ pageParam = 0 }) => {
//   const res = await fetch(
//     `https://newspaper-server-zeta.vercel.app/article?limit=10&offset=${pageParam}`
//   );
//   const data = await res.json();
//   return { ...data, prevOffset: pageParam };
// };

const ApprovedArticles = () => {
  const [articles, , refetch] = useArticles();

  const sortedArticles = articles
    ? [...articles].sort(
        (a, b) => new Date(b.postingDate) - new Date(a.postingDate)
      )
    : [];

  // const { data, fetchNextPage, hasNextPage } = useInfiniteQuery({
  //   queryKey: ["articles"],
  //   queryFn: getArticles,
  //   getNextPageParam: (lastPage) => {
  //     if (lastPage.prevOffset + 10 > lastPage.articlesCount) {
  //       return false;
  //     }
  //     return lastPage.prevOffset + 10;
  //   },
  // });

  // console.log(data);

  // const articles = data?.pages.reduce((acc, page) => {
  //   console.log(page);
  //   return [...acc, ...page.articles];
  // }, []);
  // const [search, setSearch] = useState("");

  const axiosPublic = useAxiosPublic();
  const handleSearch = async (e) => {
    e.preventDefault();
    const searchText = e.target.search.value;
    const searchRes = await axiosPublic.get(
      `/articleSearch?search=${searchText}`,
      {
        searchText,
      }
    );
    console.log(searchRes);
    // setSearch(searchRes);
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
    <div className="p-4">
      <Helmet>
        <title>BBC All News</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
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
      {/* <InfiniteScroll
        dataLength={articles ? articles.dataLength : 0}
        next={() => fetchNextPage()}
        hasMore={hasNextPage}
        loading={<div>Loading..</div>}
      >
      
      </InfiniteScroll> */}
      <div>
        {sortedArticles && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2  pb-4">
            {sortedArticles.map((article) =>
              article.status === "approved" ? (
                <NewsCard
                  key={article._id}
                  article={article}
                  size={"full"}
                ></NewsCard>
              ) : null
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ApprovedArticles;
