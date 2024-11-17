import React from "react";

const Advertise = ({ img }) => {
  return (
    <div>
      <div className="pt-4 pb-4 border-t border-b border-gray-600 bg-gray-200 flex justify-center">
        <img src={img} alt="" className="max-w-max w-full" />
      </div>
    </div>
  );
};

export default Advertise;
