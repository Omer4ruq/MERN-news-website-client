import React from "react";
import { NavLink } from "react-router-dom";

const SportsNavbar = () => {
  return (
    <div>
      <div className="bg-[#FFD230] w-full ">
        <h1 className="text-3xl font-bold pt-2 pb-2 pl-8 text-start">SPORTS</h1>
        <hr className="mt-2 border-gray-300 " />
      </div>
      <div className="bg-[#FFD230] w-full">
        <div className="pl-8 pr-4 pt-2 pb-0">
          <div className="flex justify-start">
            <ul className="flex space-x-2 md:space-x-1 text-xs font-sans font-normal md:font-semibold">
              <NavLink
                to="all-sports"
                className={({ isActive }) =>
                  `flex gap-2 ${
                    isActive
                      ? "border-b-4 border-black  font-bold text-orange-700"
                      : "hover:border-b-4 border-black  cursor-pointer hover:text-orange-700"
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
                      ? "border-b-4 border-black font-bold text-orange-700"
                      : "hover:border-b-4 border-black cursor-pointer hover:text-orange-700"
                  }`
                }
              >
                <li className="flex gap-2">
                  <h1 className="pb-2 pl-2">Football</h1>
                  <div className="bg-gray-600 mx-[2px] h-4 w-[1px]"></div>
                </li>
              </NavLink>

              <NavLink
                to="/cricket"
                className={({ isActive }) =>
                  `flex gap-2 ${
                    isActive
                      ? "border-b-4 border-black font-bold text-orange-700"
                      : "hover:border-b-4 border-black cursor-pointer hover:text-orange-700"
                  }`
                }
              >
                <li className="flex gap-2">
                  <h1 className="pb-2 ">Cricket</h1>
                  <div className="bg-gray-600 mx-[2px] h-4 w-[1px]"></div>
                </li>
              </NavLink>

              {/* Repeat NavLink for other links (e.g., Rugby, Tennis) */}

              <NavLink
                to="/nba"
                className={({ isActive }) =>
                  `flex gap-2 ${
                    isActive
                      ? "border-b-4 border-black font-bold text-orange-700"
                      : "hover:border-b-4 border-black cursor-pointer hover:text-orange-700"
                  }`
                }
              >
                <li className="flex gap-2">
                  <h1 className="pb-2 ">NBA</h1>
                </li>
              </NavLink>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SportsNavbar;
