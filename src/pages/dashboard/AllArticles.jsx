import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import Swal from "sweetalert2";
import { FaCheck, FaTrash } from "react-icons/fa";
import { Modal, TextInput, Label } from "flowbite-react";
import useArticles from "../../hooks/useArticles";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const AllArticles = () => {
  const [openModal, setOpenModal] = useState(false);
  const [note, setNote] = useState("");
  const { register, handleSubmit, setValue } = useForm();
  const [article, , refetch] = useArticles();
  const axiosSecure = useAxiosSecure();

  // Sort articles by submission date in descending order
  const sortedArticles = [...article].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  const handleStatus = async (article) => {
    article.status = "approved";
    const menuItem = { status: article.status };
    const menuRes = await axiosSecure.patch(
      `/article/${article._id}`,
      menuItem
    );
    if (menuRes.data.modifiedCount > 0) {
      refetch();
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: `${article.name} is updated to the menu.`,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  const handlePremium = async (article) => {
    article.premium = "premium";
    const menuItem = { premium: article.premium };
    const menuRes = await axiosSecure.patch(
      `/articlepremium/${article._id}`,
      menuItem
    );
    if (menuRes.data.modifiedCount > 0) {
      refetch();
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: `${article.name} is updated to premium.`,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  const declineStatus = async (article) => {
    article.status = `Decline. (${note})`;
    const menuItem = { status: article.status };
    const menuRes = await axiosSecure.patch(
      `/article/${article._id}`,
      menuItem
    );
    if (menuRes.data.modifiedCount > 0) {
      refetch();
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: `Feedback Delivered.`,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

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
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${article.name} has been deleted.`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      }
    });
  };

  return (
    <div className="container mx-auto ">
      <div>
        <h1 className="text-center text-lg md:text-2xl font-semibold mb-4">
          All Articles ({article.length})
        </h1>
        <div className="overflow-x-auto">
          <table className="w-full text-center text-sm md:text-base">
            <thead className="border-b bg-gray-100">
              <tr>
                <th className="p-2">#</th>
                <th className="p-2">Author Photo</th>
                <th className="p-2">Title</th>
                <th className="p-2">Author Email</th>
                <th className="p-2">Author Name</th>
                <th className="p-2">Actions</th>
                <th className="p-2">Delete</th>
                <th className="p-2">Premium</th>
              </tr>
            </thead>
            <tbody>
              {sortedArticles.map((article, index) => (
                <tr key={article._id} className="border-b hover:bg-gray-50">
                  <td className="p-2">{index + 1}</td>
                  <td className="p-2">
                    <img
                      className="w-12 h-12 mx-auto rounded-full"
                      src={article.authorImage}
                      alt="Author"
                    />
                  </td>
                  <td className="p-2 text-sm font-semibold">
                    {article.articleTitle}
                  </td>
                  <td className="p-2 text-xs">{article.email}</td>
                  <td className="p-2 text-xs">{article.name}</td>
                  <td className="p-2 flex flex-col md:flex-row justify-center  items-center gap-2">
                    <NavLink to={`/details-news/${article._id}`}>
                      <button className="bg-black text-white text-sm px-2 py-1 ">
                        Details
                      </button>
                    </NavLink>
                    {article.status === "Pending" && (
                      <>
                        <button
                          onClick={() => handleStatus(article)}
                          className="bg-gray-500 text-white text-sm px-2 py-1 "
                        >
                          Approve
                        </button>
                        <button
                          onClick={() => setOpenModal(true)}
                          className="bg-red-800 text-white text-sm px-2 py-1 "
                        >
                          Decline
                        </button>
                        <Modal
                          show={openModal}
                          size="md"
                          onClose={() => setOpenModal(false)}
                          popup
                        >
                          <Modal.Header />
                          <Modal.Body>
                            <div className="space-y-6">
                              <h3 className="text-xl font-medium">
                                Provide Feedback
                              </h3>
                              <Label htmlFor="note" value="Feedback" />
                              <TextInput
                                id="note"
                                placeholder="Write your feedback"
                                value={note}
                                onChange={(e) => setNote(e.target.value)}
                              />
                              <button
                                onClick={() => declineStatus(article)}
                                className="bg-gray-500 text-black rounded-md px-4 py-2"
                              >
                                Submit
                              </button>
                            </div>
                          </Modal.Body>
                        </Modal>
                      </>
                    )}
                  </td>
                  <td className="p-2">
                    <FaTrash
                      onClick={() => handleDeleteItem(article)}
                      className="text-red-600 cursor-pointer mx-auto"
                    />
                  </td>
                  <td className="p-2">
                    {article.premium === "premium" ? (
                      <FaCheck className="text-green-600" />
                    ) : (
                      <button
                        onClick={() => handlePremium(article)}
                        className="bg-gray-500 text-white text-sm px-2 py-1 "
                      >
                        Premium
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllArticles;
