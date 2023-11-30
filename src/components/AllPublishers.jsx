import React from "react";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const AllPublishers = () => {
  const axiosPublic = useAxiosPublic();
  const { data: publisher = [] } = useQuery({
    queryKey: ["publisher"],
    queryFn: async () => {
      const res = await axiosPublic.get("/publisher");
      console.log(publisher);
      return res.data;
    },
  });
  return (
    <div>
      <div className="flex">
        <h1 className="text-2xl font-semibold text-red-600">I</h1>
        <h1 className="mb-2 ml-2 text-2xl font-semibold text-start pt-0 ">
          Publishers
        </h1>
      </div>
      <section className="py-6 bg-gray-800">
        <div className="container flex flex-col justify-center ml-48 p-4 mx-auto">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 sm:grid-cols-2">
            {publisher.map((publisher) => (
              <img
                key={publisher._id}
                className="object-cover w-full bg-gray-500 aspect-square"
                src={publisher.image}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AllPublishers;
