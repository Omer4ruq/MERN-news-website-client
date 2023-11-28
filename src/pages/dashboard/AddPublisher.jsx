import React from "react";
import { useForm } from "react-hook-form";
("use client");

import { FileInput, Label } from "flowbite-react";
import { Button, Checkbox, TextInput } from "flowbite-react";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddPublisher = () => {
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    if (res.data.success) {
      const publisherItem = {
        publisherName: data.publisherName,
        image: res.data.data.display_url,
      };
      const publisherRes = await axiosSecure.post("/publisher", publisherItem);
      console.log(publisherRes.data);
      if (publisherRes.data.insertedId) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Publisher Added Succesfully",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
    console.log(res.data);
  };
  return (
    <div>
      <div>
        <h1>Add Publishers</h1>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-sm ">
        <div className="flex items-center  py-4">
          <div className="ml-32 gap-8">
            <input
              {...register("publisherName")}
              type="text"
              className="appearapy-5nce-none  bg-transparent w-full border-t-0 border-r-0 border-l-0 border-b-2 border-teal-500 text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none mb-4"
              placeholder="Publisher Name"
              name="publisherName"
              aria-label="Full name"
            />
            <div id="fileUpload" className="max-w-md">
              <div className="mb-2 block">
                <Label htmlFor="file" value="Upload Logo" />
              </div>
              <FileInput
                {...register("image", { required: true })}
                id="file"
                helperText=""
              />
            </div>

            {/* <button
                className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
                type="button"
              >
                Sign Up
              </button>
              <button
                className="flex-shrink-0 border-transparent border-4 text-teal-500 hover:text-teal-800 text-sm py-1 px-2 rounded"
                type="button"
              >
                Cancel
              </button> */}
          </div>
        </div>
        <button
          type="submit"
          className="bg-blue-500 
         hover:bg-blue-700 text-white font-bold py-2 px-4 rounded h-10 w-72 mt-1 ml-28"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddPublisher;
