import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./subNavbar.css";

const SubNavbar = () => {
  return (
    <div className="sticky top-0 z-10 bg-white ">
      <div className="nav ">
        <hr className="mt-0 border-gray-300 " />
        <div className="">
          <div className="flex justify-center px-2 md:px-8">
            <ul className="flex flex-wrap gap-0 justify-center text-sm md::text-xs font-sans md:font-semibold">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `flex gap-2 ${
                    isActive
                      ? "border-b-2 border-black   "
                      : "hover:border-b-2 border-black  cursor-pointer hover:"
                  }`
                }
              >
                <li className="flex p-2">Home</li>
                {/* <div className="bg-gray-600 mx-[2px] h-4 w-[0.5px] font-"></div> */}
              </NavLink>

              <NavLink
                to="/approved-articles"
                className={({ isActive }) =>
                  `flex gap-2 ${
                    isActive
                      ? "border-b-2 border-black   "
                      : "hover:border-b-2 border-black  cursor-pointer hover:"
                  }`
                }
              >
                <li className="flex gap-2 p-2">News</li>
              </NavLink>

              <NavLink
                to="/all-sports"
                className={({ isActive }) =>
                  `flex gap-2 ${
                    isActive
                      ? "border-b-2 border-black   "
                      : "hover:border-b-2 border-black  cursor-pointer hover:"
                  }`
                }
              >
                <li className="flex gap-2 p-2">Sports</li>
              </NavLink>

              <NavLink
                to="/business"
                className={({ isActive }) =>
                  `flex gap-2 ${
                    isActive
                      ? "border-b-2 border-black   "
                      : "hover:border-b-2 border-black  cursor-pointer hover:"
                  }`
                }
              >
                <li className="flex gap-2 p-2">Business</li>
              </NavLink>
              <NavLink
                to="/innovation"
                className={({ isActive }) =>
                  `flex gap-2 ${
                    isActive
                      ? "border-b-2 border-black   "
                      : "hover:border-b-2 border-black  cursor-pointer hover:"
                  }`
                }
              >
                <li className="flex gap-2 p-2">Innovation</li>
              </NavLink>
              <NavLink
                to="/culture"
                className={({ isActive }) =>
                  `flex gap-2 ${
                    isActive
                      ? "border-b-2 border-black   "
                      : "hover:border-b-2 border-black  cursor-pointer hover:"
                  }`
                }
              >
                <li className="flex gap-2 p-2">Culture</li>
              </NavLink>
              <NavLink
                to="/arts"
                className={({ isActive }) =>
                  `flex gap-2 ${
                    isActive
                      ? "border-b-2 border-black   "
                      : "hover:border-b-2 border-black  cursor-pointer hover:"
                  }`
                }
              >
                <li className="flex gap-2 p-2">Arts</li>
              </NavLink>
              <NavLink
                to="/travel"
                className={({ isActive }) =>
                  `flex gap-2 ${
                    isActive
                      ? "border-b-2 border-black   "
                      : "hover:border-b-2 border-black  cursor-pointer hover:"
                  }`
                }
              >
                <li className="flex gap-2 p-2">Travel</li>
              </NavLink>
              <NavLink
                to="/earth"
                className={({ isActive }) =>
                  `flex gap-2 ${
                    isActive
                      ? "border-b-2 border-black   "
                      : "hover:border-b-2 border-black  cursor-pointer hover:"
                  }`
                }
              >
                <li className="flex gap-2 p-2">Earth</li>
              </NavLink>
            </ul>
          </div>
        </div>
        <hr className="mt-0 border-gray-300 " />
      </div>
    </div>
  );
};
export default SubNavbar;
