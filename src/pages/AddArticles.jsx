import React, { useContext, useRef, useState, useMemo } from "react";
import { useForm } from "react-hook-form";
("use client");
import CreatableSelect from "react-select/creatable";
import { FileInput, Label } from "flowbite-react";
import Swal from "sweetalert2";
import useAxiosPublic from "../hooks/useAxiosPublic";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../providers/AuthProviders";
import moment from "moment";
import JoditEditor from "jodit-react";
import HTMLReactParser from "html-react-parser";

import Select from "react-select";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddArticles = () => {
  const isAdmin = true;
  const { user } = useContext(AuthContext);
  const publishersList = useLoaderData();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const [selectedOptions, setSelectedOptions] = useState(null);
  const [content, setContent] = useState("");
  const { register, handleSubmit, setValue } = useForm();
  const editor = useRef(null);
  const options = [
    { value: "politics", label: "politics" },
    { value: "war", label: "war" },
    { value: "sports", label: "sports" },
    { value: "technology", label: "technology" },
    { value: "travelling", label: "travelling" },
    { value: "globalNews", label: "globalNews" },
    { value: "BD", label: "BD" },
    { value: "entertainment", label: "entertainment" },
    { value: "education", label: "education" },
    { value: "innovation", label: "Next.js" },
    { value: "crime", label: "crime" },
    { value: "business", label: "business" },
    { value: "culture", label: "culture" },
    { value: "arts", label: "arts" },
    { value: "envoirnment", label: "envoirnment" },
    { value: "earth", label: "earth" },
  ];
  const onSubmit = async (data) => {
    data.tags = selectedOptions;
    data.content = content;

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
        liveStatus: data.liveStatus,
        category: data.category,
        subCategory: data.subCategory,
        articleTitle: data.articleTitle,
        date: data.date,
        email: data.email,
        name: data.name,
        authorImage: data.authorImage,
        tags: data.tags,
        description: data.description,
        content: data.content,
        image: res.data.data.display_url,
        views: 0,
        premium: null,
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
      <section className="p-6 bg-gray-800 text-gray-50 ">
        <form
          action=""
          onSubmit={handleSubmit(onSubmit)}
          className="container flex flex-col mx-auto space-y-12 "
        >
          <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-gray-900 pl-44">
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
              <div className="col-span-full sm:col-span-3">
                <label className="text-sm">Live Status</label>

                {isAdmin ? (
                  <select
                    className="w-full rounded-md focus:ring focus:ri focus:ri bg-green-500 border-gray-700 text-gray-900"
                    name="liveStatus"
                    {...register("liveStatus")}
                    defaultValue={``}
                  >
                    <option>no</option>
                    <option>yes</option>
                  </select>
                ) : (
                  <select
                    className="w-full rounded-md focus:ring focus:ri focus:ri bg-green-500 border-gray-700 text-gray-900"
                    name="status"
                    {...register("liveStatus")}
                    defaultValue={``}
                  >
                    <option selected>No</option>
                  </select>
                )}
              </div>

              <div className="col-span-full">
                <label className="text-sm">Description</label>
                <textarea
                  className="w-full pl-3 py-1.5 focus:outline-none text-black placeholder:text-gray-700"
                  rows={6}
                  placeholder="Description"
                  {...register("description")}
                ></textarea>
              </div>

              <div className="col-span-full">
                <label className="text-sm">Details Writting</label>
                <JoditEditor
                  ref={editor}
                  value={content}
                  onChange={(newContent) => setContent(newContent)}
                  className="text-black"
                />
              </div>
              <div className="col-span-full">
                <label className="text-sm">Submit Time</label>
                <input
                  type="date"
                  {...register("date")}
                  className="block w-full flex-1 border-1 bg-white py-1.5 px-0.5 pl-3 text-gray-900 placeholder:text-gray-400
                focus:outline-none sm:text-sm sm:leading-6"
                />
              </div>
              <div className="col-span-full sm:col-span-3 ">
                <label className="text-sm ">Tags</label>
                {/* <select
                  {...register("tags")}
                  name="tags"
                  className="text-gray-900"
                >
                  <option value="sports">sports</option>
                  <option value="war">war</option>
                  <option value="health">health</option>
                  <option value="politics">politics</option>
                  <option value="education">education</option>
                  <option value="travle">travle</option>
                  <option value="scince">scince</option>
                  <option value="bd">bd</option>
                  <option value="Entertainment">Entertainment</option>
                </select> */}
                <CreatableSelect
                  defaultValue={selectedOptions}
                  onChange={setSelectedOptions}
                  options={options}
                  isMulti
                  className="block w-full flex-1 border-1 bg-white py-1.5 px-2 pl-3 text-gray-900 placeholder:text-gray-400
            focus:outline-none sm:text-sm sm:leading-6"
                ></CreatableSelect>
                {/* <Select
                  {...register("tags")}
                  name="tags"
                  defaultValue={selectedOption}
                  onChange={setSelectedOption}
                  options={options}
                /> */}
              </div>
              <div className="col-span-full sm:col-span-3 ml-8">
                <label className="text-sm">News Category</label>

                <select
                  className="w-full rounded-md focus:ring focus:ri focus:ri bg-slate-300 border-gray-700 text-slate-950"
                  name="category"
                  {...register("category")}
                  defaultValue={``}
                >
                  <option selected>Select</option>
                  <option>World News</option>
                  <option>War</option>
                  <option>Around The Bangladesh</option>
                  <option>Political News</option>
                  <option>Sports News</option>
                  <option>Entertainment News</option>
                  <option>Health and Life Style</option>
                  <option>Travel</option>
                  <option>Scince and Technology</option>
                  <option>Education</option>
                  <option>Business News</option>
                  <option>Editor's Column</option>
                  <option>Earth</option>
                </select>
              </div>
              <div className="col-span-full ml-8">
                <label className="text-sm">Sub Category</label>

                <select
                  className="w-full rounded-md focus:ring focus:ri focus:ri bg-slate-300 border-gray-700 text-slate-950"
                  name="category"
                  {...register("subCategory")}
                  defaultValue={``}
                >
                  <option selected>Select</option>
                  <option>Football</option>
                  <option>Cricket</option>
                  <option>Rugbey</option>
                  <option>Tennis</option>
                  <option>UFC</option>
                  <option>Golf</option>
                  <option>Athletics</option>
                  <option>NBA</option>
                  <option>Technology</option>
                  <option>Science & Health</option>
                  <option>Artificial Intelligence</option>
                  <option>Executive Lounge</option>
                  <option>Technology of business</option>
                  <option>Executive Lounge</option>
                  <option>Future of Business</option>
                  <option>Film & TV</option>
                  <option>Music</option>
                  <option>Style</option>
                  <option>Entertainment News</option>
                  <option>Destination</option>
                  <option>Culture & Experience</option>
                  <option>Adventures</option>
                  <option>Natural Wonders</option>
                  <option>Climate Change</option>
                  <option>War</option>
                  <option>Geo Politics</option>
                  <option>Asia</option>
                  <option>Africa</option>
                  <option>North America</option>
                  <option>South America</option>
                  <option>Australia</option>
                </select>
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
