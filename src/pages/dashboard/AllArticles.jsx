import React from "react";
("use client");
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { Button, Checkbox, Label, Modal, TextInput } from "flowbite-react";
import { useState } from "react";
import { Table, Column, HeaderCell, Cell } from "rsuite-table";
import useArticles from "../../hooks/useArticles";
import Swal from "sweetalert2";
import { FaCheck, FaSign, FaTrash } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";

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

    const menuItem = {
      status: article.status,
    };
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

    const menuItem = {
      premium: article.premium,
    };
    const menuRes = await axiosSecure.patch(
      `/articlepremium/${article._id}`,
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

  const declineStatus = async (article) => {
    article.status = `Decline. (${note})`;

    const menuItem = {
      status: article.status,
    };
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
            title: `${article.name} has been deleted`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      }
    });
  };

  return (
    <div className="-ml-16 w-full">
      <div>
        <h1>{article.length}</h1>
        <div className="flex">
          <div className="mx-40 sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full text-center text-sm font-light">
                  <thead className="border-b font-medium border-neutral-500">
                    <tr>
                      <th scope="col" className="ml-1">
                        #
                      </th>
                      <th scope="col" className="ml-1">
                        Author Photo
                      </th>
                      <th scope="col">Title</th>
                      <th scope="col">Author Email</th>
                      <th scope="col">Author Name</th>
                      <th scope="col">Status</th>
                      <th scope="col">Delete</th>
                      <th scope="col">Premium</th>
                    </tr>
                  </thead>
                  {sortedArticles.map((article, index) => (
                    <tbody key={article._id}>
                      <tr className="border-b border-neutral-500">
                        <td className="whitespace-nowrap font-medium">
                          {index + 1}
                        </td>
                        <td className="whitespace-nowrap ml-1">
                          <img
                            className="w-12 h-12"
                            src={article.authorImage}
                            alt="Author"
                          />
                        </td>
                        <td className="whitespace-nowrap w-8 px-2 py-4">
                          <h1 className="text-xs font-bold">
                            {article.articleTitle}
                          </h1>
                        </td>
                        <td className="whitespace-nowrap">{article.email}</td>
                        <td className="whitespace-nowrap">{article.name}</td>
                        <td className="whitespace-nowrap">
                          <NavLink to={`/details-news/${article._id}`}>
                            <button className="bg-black rounded-md w-20 text-slate-50">
                              Details
                            </button>
                          </NavLink>
                        </td>
                        <td className="whitespace-nowrap">
                          {article.status === "Pending" ? (
                            <div>
                              <h1 className="font-semibold">
                                {article.status}
                              </h1>
                              <div className="flex gap-2">
                                <button
                                  onClick={() => handleStatus(article)}
                                  type="button"
                                  className="w-20 font-semibold rounded bg-gray-500 text-gray-50"
                                >
                                  Approve
                                </button>
                                <button
                                  onClick={() => setOpenModal(true)}
                                  type="button"
                                  className="w-20 py-1 font-semibold rounded bg-red-800 text-white"
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
                                      <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                                        Provide Feedback
                                      </h3>
                                      <div>
                                        <Label
                                          htmlFor="text"
                                          value="Give feedback"
                                        />
                                        <TextInput
                                          id="text"
                                          placeholder="Write a note"
                                          value={note}
                                          onChange={(event) =>
                                            setNote(event.target.value)
                                          }
                                          required
                                        />
                                      </div>
                                      <div className="w-full">
                                        <button
                                          onClick={() => declineStatus(article)}
                                          type="button"
                                          className="w-20 font-semibold rounded bg-gray-500 text-black"
                                        >
                                          Decline
                                        </button>
                                      </div>
                                    </div>
                                  </Modal.Body>
                                </Modal>
                              </div>
                            </div>
                          ) : (
                            <h1 className="font-semibold">{article.status}</h1>
                          )}
                        </td>
                        <td className="whitespace-nowrap">
                          <FaTrash
                            onClick={() => handleDeleteItem(article)}
                            className="ml-4 text-2xl text-red-600"
                          />
                        </td>
                        <td className="whitespace-nowrap">
                          {article.premium === "premium" ? (
                            <FaCheck className="ml-5" />
                          ) : (
                            <button
                              onClick={() => handlePremium(article)}
                              type="button"
                              className="w-20 font-semibold rounded bg-gray-500 text-gray-50"
                            >
                              Premium
                            </button>
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
  );
};

export default AllArticles;
