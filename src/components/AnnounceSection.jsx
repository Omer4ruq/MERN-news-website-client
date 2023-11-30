import React from "react";

const AnnounceSection = () => {
  return (
    <div className=" min-h-fit  ">
      {/* <div className="bg-gradient-to-r from-orange-500 to-pink-600 min-h-screen flex items-center justify-center">
        <img
          src="https://i.ibb.co/4tY62f8/istockphoto-1297776154-612x612.jpg"
          alt=""
          className="w-full h-auto mb-4"
        />

        <div className="text-white text-lg font-bold">Your Text Here</div>
      </div> */}
      <div className=" bg-red-600 flex items-center justify-center">
        <div className="relative  w-full">
          <img
            src="https://i.ibb.co/ggBd4yn/p0gw59r6.jpg"
            alt="Your Image"
            className="ml-[480px] w-auto h-96  "
          />

          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-l from-transparent via-red-600  to-red-600 "></div>
          <div className="absolute top-1/2 left-1/12 transform -translate-y-1/2 text-white text-4xl font-bold z-10">
            Nigella’s Amsterdam Christmas
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnnounceSection;
