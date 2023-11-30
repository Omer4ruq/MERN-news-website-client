import React, { useContext } from "react";
import logo from "../assets/image/logo.png";
import { FaHome, FaUser } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../providers/AuthProviders";
("use client");

import { Avatar, Dropdown } from "flowbite-react";
import useAdmin from "../hooks/useAdmin";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  // const isAdmin = true;
  const [isAdmin] = useAdmin();
  const handleSignOut = () => {
    logOut().then().catch();
  };
  return (
    <div className="flex text-white  bg-black">
      <div className="flex ">
        <img src={logo} className="h-10" alt="" />
        {user ? (
          <div className="flex text-white">
            <div className="flex gap-4">
              <NavLink to="/my-profile">
                {" "}
                <Dropdown
                  arrowIcon={false}
                  inline
                  label={
                    <Avatar alt="User settings" img={user.photoURL} rounded />
                  }
                >
                  {" "}
                </Dropdown>
              </NavLink>
              <button>
                <h1 onClick={handleSignOut} className="text-sm font-semibold">
                  Sign Out
                </h1>
              </button>

              {/* <Dropdown.Header>
                  <span className="block text-sm">{user.displayName}</span>
                  <span className="block truncate text-sm font-medium">
                    {user.email}
                  </span>
                </Dropdown.Header> */}
              {/* <NavLink to="/dashboard/news">
                  {" "}
                  <Dropdown.Item>Dashboard</Dropdown.Item>
                </NavLink>

                <Dropdown.Item>Settings</Dropdown.Item>
                <Dropdown.Item>Earnings</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item onClick={handleSignOut}>Sign out</Dropdown.Item> */}
            </div>
          </div>
        ) : (
          <NavLink to="/login">
            {" "}
            <button className="flex  text-white mt-2 gap-2 ml-4 border-spacing-4 hover:underline underline-offset-8">
              <FaUser className=" text-2xl"></FaUser>
              <h1 className="text-sm font-semibold">Sign In</h1>
            </button>
          </NavLink>
        )}
      </div>
      {isAdmin ? (
        <div className=" vertical-align: middle; text-white flex  items-center gap-2 md:gap-8 text-[10px] md:text-[15px] font-normal cursor-pointer  ml-2 md:ml-16">
          <NavLink className="hover:underline underline-offset-8" to="/">
            <div className="flex ">
              <h2 className="hidden md:block text-white">Home</h2>
            </div>
          </NavLink>
          <NavLink
            className="hover:underline underline-offset-8"
            to="/add-articles"
          >
            <div className="flex ">
              <h2 className="hidden md:block text-white">Add Articles</h2>
            </div>
          </NavLink>
          <NavLink
            className="hover:underline underline-offset-8"
            to="/approved-articles"
          >
            <div className="flex ">
              <h2 className="hidden md:block text-white">All Articles</h2>
            </div>
          </NavLink>
          <NavLink
            className="hover:underline underline-offset-8"
            to="/dashboard"
          >
            <div className="flex gap-2">
              <h2 className="hidden md:block text-white">Dashboard</h2>
            </div>
          </NavLink>{" "}
          <NavLink
            className="hover:underline underline-offset-8"
            to="/my-articles"
          >
            <div className="flex gap-2">
              <h2 className="hidden md:block text-white">My Articals</h2>
            </div>
          </NavLink>
          <NavLink className="hover:underline underline-offset-8" to="/">
            <div className="flex gap-2">
              <h2 className="hidden md:block text-white">Premium Articles</h2>
            </div>
          </NavLink>
          <NavLink
            className="hover:underline underline-offset-8"
            to="/subscribtion"
          >
            <div className="flex gap-2">
              <h2 className="hidden md:block text-white">Subscribtion</h2>
            </div>
          </NavLink>
        </div>
      ) : (
        <div className=" vertical-align: middle; text-white flex  items-center gap-2 md:gap-8 text-[10px] md:text-[15px] font-normal cursor-pointer  ml-2 md:ml-16">
          <NavLink className="hover:underline underline-offset-8" to="/">
            <div className="flex ">
              <h2 className="hidden md:block text-white">Home</h2>
            </div>
          </NavLink>
          <NavLink
            className="hover:underline underline-offset-8"
            to="/add-articles"
          >
            <div className="flex ">
              <h2 className="hidden md:block text-white">Add Articles</h2>
            </div>
          </NavLink>
          <NavLink
            className="hover:underline underline-offset-8"
            to="/approved-articles"
          >
            <div className="flex ">
              <h2 className="hidden md:block text-white">All Articles</h2>
            </div>
          </NavLink>{" "}
          <NavLink
            className="hover:underline underline-offset-8"
            to="/my-articles"
          >
            <div className="flex gap-2">
              <h2 className="hidden md:block text-white">My Articals</h2>
            </div>
          </NavLink>
          <NavLink className="hover:underline underline-offset-8" to="/">
            <div className="flex gap-2">
              <h2 className="hidden md:block text-white">Premium Articles</h2>
            </div>
          </NavLink>
          <NavLink
            className="hover:underline underline-offset-8"
            to="/subscribtion"
          >
            <div className="flex gap-2">
              <h2 className="hidden md:block text-white">Subscribtion</h2>
            </div>
          </NavLink>
        </div>
      )}

      <div></div>
    </div>
  );
};

export default Navbar;
