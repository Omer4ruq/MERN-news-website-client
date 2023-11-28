import React from "react";
("use client");
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { Button } from "flowbite-react";

const AllArticles = () => {
  const axiosSecure = useAxiosSecure();
  const { data: article = [] } = useQuery({
    queryKey: ["article"],
    queryFn: async () => {
      const res = await axiosSecure.get("/article");
      console.log(article);
      return res.data;
    },
  });
  return (
    <div>
      <div>
        <h1>{article.length}</h1>
        <div>
          <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                <div className="overflow-hidden">
                  <table className="min-w-full text-left text-sm font-light">
                    <thead className="border-b font-medium dark:border-neutral-500">
                      <tr>
                        <th scope="col" className="px-6 py-4">
                          #
                        </th>
                        <th scope="col" className="px-6 py-4">
                          Author Photo
                        </th>
                        <th scope="col" className="px-6 py-4">
                          Title
                        </th>
                        <th scope="col" className="px-6 py-4">
                          Author Email
                        </th>
                        <th scope="col" className="px-6 py-4">
                          Author Name
                        </th>
                        <th scope="col" className="px-6 py-4">
                          Status
                        </th>
                      </tr>
                    </thead>
                    {article.map((article, index) => (
                      <tbody key={article._id}>
                        <tr className="border-b dark:border-neutral-500">
                          <td className="whitespace-nowrap px-6 py-4 font-medium">
                            {index + 1}
                          </td>
                          <td className="whitespace-nowrap px-6 py-4 ">
                            {" "}
                            <img
                              className="w-12 h-12"
                              src={article.authorImage}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </td>
                          <td className="whitespace-nowrap px-6 py-4">
                            {article.articleTitle}
                          </td>
                          <td className="whitespace-nowrap px-6 py-4">
                            {article.email}
                          </td>
                          <td className="whitespace-nowrap px-6 py-4">
                            {article.name}
                          </td>
                          <td className="whitespace-nowrap px-6 py-4">
                            {article.status === "Pending" ? (
                              <button
                                type="button"
                                className="px-8 py-3 font-semibold rounded bg-gray-100 text-gray-800"
                              >
                                Approve
                              </button>
                            ) : (
                              <button className="btn btn-ghost btn-xs"></button>
                            )}
                          </td>
                        </tr>
                      </tbody>
                    ))}
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllArticles;
