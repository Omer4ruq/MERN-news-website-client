import React, { useContext, useEffect, useState } from "react";
import useArticles from "../hooks/useArticles";
import { FaEdit, FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import { axiosSecure } from "../hooks/useAxiosSecure";
import { AuthContext } from "../providers/AuthProviders";

const MyArticles = () => {
  const { user } = useContext(AuthContext);
  // const [article, , refetch] = useArticles();
  const [article, setArticle] = useState([]);
  const url = `https://newspaper-server-zeta.vercel.app/my-article?email=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setArticle(data));
  }, []);
  const handleDeleteItem = (article) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosSecure.delete(`/article/${article._id}`);
        // console.log(res.data);
        if (res.data.deletedCount > 0) {
          // refetch to update the ui
          // refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${article.name} has been deleted`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      }
    });
  };
  return (
    <div>
      <div>
        <div className="flex">
          <div className=" mx-40 sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-fit py-2 sm:px-6 lg:px-2">
              <div className="overflow-hidden">
                <table className="min-w-fit text-center text-sm font-light ">
                  <thead className="border-b font-medium border-neutral-500">
                    <tr>
                      <th scope="col" className="ml-1">
                        #
                      </th>

                      <th scope="col" className=" ">
                        Title
                      </th>
                      <th scope="col" className="">
                        Author Email
                      </th>
                      <th scope="col" className="">
                        Author Name
                      </th>
                      <th scope="col" className="">
                        Status
                      </th>

                      <th scope="col" className="">
                        Update
                      </th>
                      <th scope="col" className="">
                        Delete
                      </th>
                    </tr>
                  </thead>
                  {article.map((article, index) => (
                    <tbody key={article._id}>
                      <tr className="border-b border-neutral-500 ">
                        <td className="whitespace-nowrap  font-medium">
                          {index + 1}
                        </td>

                        <td className="whitespace-nowrap w-8 px-2 py-4">
                          <h1 className="text-xs font-bold">
                            <div> {article.articleTitle}</div>

                            <button
                              // onClick={() => declineStatus(article)}

                              type="button"
                              className="w-20 py-1 font-semibold rounded bg-red-800 text-white"
                            >
                              Details
                            </button>
                          </h1>
                        </td>
                        <td className="whitespace-nowrap ">{article.email}</td>
                        <td className="whitespace-nowrap ">{article.name}</td>
                        <td className="whitespace-nowrap ">
                          {article.status === "approved" ? (
                            <div>
                              {" "}
                              <h1 className="font-semibold">
                                {article.status}
                              </h1>{" "}
                              <div className="flex gap-2"></div>
                            </div>
                          ) : (
                            <h1 className="font-semibold">{article.status}</h1>
                          )}
                        </td>
                        <td className="whitespace-nowrap ">
                          <FaEdit
                            onClick={() => handleDeleteItem(article)}
                            className="ml-4 text-2xl  text-red-600"
                          ></FaEdit>
                        </td>
                        <td className="whitespace-nowrap ">
                          <FaTrash
                            onClick={() => handleDeleteItem(article)}
                            className="ml-4 text-2xl  text-red-600"
                          ></FaTrash>
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
  );
};

export default MyArticles;
