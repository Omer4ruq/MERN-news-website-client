import React from "react";
import { NavLink } from "react-router-dom";

const LiveNewsNavbar = () => {
  return (
    <div>
      <div className="bg-[#B80000] w-full ">
        <h1 className="text-3xl font-bold pt-2 pb-2 pl-8 text-start">News</h1>
        <hr className="  border-gray-400 " />
      </div>
      <div className="bg-[#B80000] w-full">
        <div className="pl-8 pr-4 pt-2 pb-0">
          <div className="flex justify-start">
            <ul className="flex space-x-2 md:space-x-1 text-xs text-white font-sans font-normal md:font-semibold">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `flex gap-2 ${
                    isActive
                      ? "border-b-4 border-white  font-bold text-white"
                      : "hover:border-b-4 border-whitecursor-pointer hover:text-white"
                  }`
                }
              >
                <li className="flex gap-2">
                  <h1 className="pb-2 pl-2">Home</h1>
                  <div className="bg-gray-600 mx-[2px] h-4 w-[1px]"></div>
                </li>
              </NavLink>

              <NavLink
                to="football"
                className={({ isActive }) =>
                  `flex gap-2 ${
                    isActive
                      ? "border-b-4 border-white font-bold text-white"
                      : "hover:border-b-4 border-white cursor-pointer hover:text-white"
                  }`
                }
              >
                <li className="flex gap-2">
                  <h1 className="pb-2 pl-2">Israel-Gaza War</h1>
                  <div className="bg-gray-600 mx-[2px] h-4 w-[1px]"></div>
                </li>
              </NavLink>

              <NavLink
                to="/sports/all-sports"
                className={({ isActive }) =>
                  `flex gap-2 ${
                    isActive
                      ? "border-b-4 border-white font-bold text-white"
                      : "hover:border-b-4 border-white cursor-pointer hover:text-white"
                  }`
                }
              >
                <li className="flex gap-2">
                  <h1 className="pb-2 ">War In Ukrain</h1>
                  <div className="bg-gray-600 mx-[2px] h-4 w-[1px]"></div>
                </li>
              </NavLink>

              {/* Repeat NavLink for other links (e.g., Rugby, Tennis) */}

              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `flex gap-2 ${
                    isActive
                      ? "border-b-4 border-white font-bold text-white"
                      : "hover:border-b-4 border-white cursor-pointer hover:text-white"
                  }`
                }
              >
                <li className="flex gap-2">
                  <h1 className="pb-2 ">Climate</h1>
                </li>
              </NavLink>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveNewsNavbar;
