import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
("use client");

import { FileInput, Label } from "flowbite-react";
import Swal from "sweetalert2";
import useAxiosPublic from "../hooks/useAxiosPublic";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../providers/AuthProviders";
import moment from "moment";

import Select from "react-select";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddArticles = () => {
  const isAdmin = true;
  const { user } = useContext(AuthContext);
  const publishersList = useLoaderData();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const [selectedOption, setSelectedOption] = useState(null);
  const { register, handleSubmit, setValue } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    if (res.data.success) {
      const articleItem = {
        publisherName: data.publisherName,
        status: data.status,
        articleTitle: data.articleTitle,
        date: data.date,
        email: data.email,
        name: data.name,
        authorImage: data.authorImage,
        tags: data.tags,
        description: data.description,
        image: res.data.data.display_url,
      };
      const articleRes = await axiosSecure.post("/article", articleItem);
      console.log(articleRes.data);
      if (articleRes.data.insertedId) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Artical Added Succesfully",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
    console.log(res.data);
  };
  return (
    <div>
      <form>
        {/* <div>
          <input {...register("firstName")} />
        </div> */}

        {/* <input type="submit" /> */}
      </form>
      <section className="p-6 bg-gray-800 text-gray-50">
        <form
          action=""
          onSubmit={handleSubmit(onSubmit)}
          className="container flex flex-col mx-auto space-y-12"
        >
          <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-gray-900">
            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
              <div className="col-span-full sm:col-span-3">
                <label className="text-sm">Article Title</label>
                <input
                  {...register("articleTitle")}
                  id="articleTitle"
                  type="text"
                  placeholder="Article Title"
                  name="articleTitle"
                  className="w-full rounded-md focus:ring focus:ri focus:ri border-gray-700 text-gray-900"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label className="text-sm">Publisher</label>
                <div>
                  {" "}
                  <select
                    className="w-full rounded-md focus:ring focus:ri focus:ri border-gray-700 text-gray-900"
                    name="publisherName"
                    {...register("publisherName")}
                    defaultValue={""}
                  >
                    <option selected>Select</option>
                    {publishersList.map((publisher) => (
                      <option key={publishersList._id}>
                        {publisher.publisherName}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="col-span-full sm:col-span-3">
                <label className="text-sm">Email</label>
                <input
                  {...register("email")}
                  id="email"
                  type="email"
                  placeholder="Email"
                  name="email"
                  defaultValue={user.email}
                  className="w-full rounded-md focus:ring focus:ri focus:ri border-gray-700 text-gray-900"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label className="text-sm">Author name</label>
                <input
                  {...register("name")}
                  id="name"
                  type="name"
                  placeholder="name"
                  name="name"
                  defaultValue={user.displayName}
                  className="w-full rounded-md focus:ring focus:ri focus:ri border-gray-700 text-gray-900"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label className="text-sm">Author Image</label>
                <input
                  {...register("authorImage")}
                  id="authorImage"
                  type="text"
                  placeholder="name"
                  name="authorImage"
                  defaultValue={user.photoURL}
                  className="w-full rounded-md focus:ring focus:ri focus:ri border-gray-700 text-gray-900"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label className="text-sm">Approve Status</label>

                {isAdmin ? (
                  <select
                    className="w-full rounded-md focus:ring focus:ri focus:ri bg-green-500 border-gray-700 text-gray-900"
                    name="status"
                    {...register("status")}
                    defaultValue={``}
                  >
                    <option>Pending</option>
                    <option>Approve</option>
                  </select>
                ) : (
                  <select
                    className="w-full rounded-md focus:ring focus:ri focus:ri bg-green-500 border-gray-700 text-gray-900"
                    name="status"
                    {...register("status")}
                    defaultValue={``}
                  >
                    <option selected>Pending</option>
                  </select>
                )}
              </div>

              <div className="col-span-full">
                <label className="text-sm">Description</label>
                <textarea
                  {...register("description")}
                  id="bio"
                  name="description"
                  placeholder="Description"
                  className="w-full rounded-md focus:ring focus:ri focus:ri border-gray-700 text-gray-900"
                ></textarea>
              </div>
              <div className="col-span-full">
                <label className="text-sm">Submit Time</label>
                <input
                  type="text"
                  {...register("date")}
                  className="w-full bg-green-500 text-gray-900"
                  defaultValue={moment().format("MMMM Do YYYY, h:mm:ss a")}
                />
              </div>
              <div>
                <label className="text-sm">Tags</label>
                <Select
                  {...register("tags")}
                  isMulti
                  name="tags"
                  options={options}
                  className="basic-multi-select"
                  classNamePrefix="select"
                />
              </div>
              <div id="fileUpload" className="col-span-full text-gray-900">
                <div className="mb-2 block text-gray-900">
                  <Label htmlFor="file" value="Upload file" />
                </div>
                <FileInput
                  {...register("image", { required: true })}
                  id="file"
                  helperText="A profile picture is useful to confirm your are logged into your account"
                />
              </div>

              <button
                type="submit"
                className="bg-blue-500 
         hover:bg-blue-700 text-white font-bold py-2 px-4 rounded h-10 w-72 mt-1 ml-28"
              >
                Submit
              </button>
            </div>
          </fieldset>
        </form>
      </section>
    </div>
  );
};

export default AddArticles;
