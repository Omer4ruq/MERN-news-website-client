import React, { useContext, useEffect, useState } from "react";
import useArticles from "../hooks/useArticles";
import { FaEdit, FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import { axiosSecure } from "../hooks/useAxiosSecure";
import { AuthContext } from "../providers/AuthProviders";

const MyArticles = () => {
  const { user } = useContext(AuthContext);
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
        if (res.data.deletedCount > 0) {
          setArticle((prev) => prev.filter((item) => item._id !== article._id));
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
    <div className="px-4 py-6 lg:px-20">
      <h1 className="text-2xl font-bold text-center mb-6">My Articles</h1>
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-center border border-gray-200 rounded-md">
          <thead className="bg-gray-200 text-gray-700">
            <tr>
              <th className="p-3">#</th>
              <th className="p-3">Title</th>
              <th className="p-3">Author Email</th>
              <th className="p-3">Author Name</th>
              <th className="p-3">Status</th>
              <th className="p-3">Update</th>
              <th className="p-3">Delete</th>
            </tr>
          </thead>
          <tbody>
            {article.map((article, index) => (
              <tr
                key={article._id}
                className={`${
                  index % 2 === 0 ? "bg-gray-50" : "bg-white"
                } border-b hover:bg-gray-100`}
              >
                <td className="p-3">{index + 1}</td>
                <td className="p-3">
                  <h1 className="font-medium">{article.articleTitle}</h1>
                  <button className="mt-2 px-3 py-1 text-xs font-semibold bg-red-800 text-white rounded">
                    Details
                  </button>
                </td>
                <td className="p-3">{article.email}</td>
                <td className="p-3">{article.name}</td>
                <td className="p-3 font-semibold text-green-600">
                  {article.status}
                </td>
                <td className="p-3">
                  <FaEdit
                    className="text-blue-500 text-xl cursor-pointer hover:text-blue-700"
                    onClick={() => console.log("Edit functionality")}
                  />
                </td>
                <td className="p-3">
                  <FaTrash
                    className="text-red-600 text-xl cursor-pointer hover:text-red-800"
                    onClick={() => handleDeleteItem(article)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyArticles;
