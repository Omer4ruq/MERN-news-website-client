import React, { useContext, useState } from "react";
import logo from "../assets/image/logo.png";
import logo2 from "../assets/image/logo2.png";
import { FaHome, FaUser, FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../providers/AuthProviders";
import { Avatar, Dropdown } from "flowbite-react";
import useAdmin from "../hooks/useAdmin";
import { div, h1 } from "framer-motion/client";
import { IoSearch } from "react-icons/io5";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isAdmin] = useAdmin();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleSignOut = () => {
    logOut().then().catch();
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div>
      {user ? (
        <div className="flex justify-between items-center text-white bg-black p-2 relative">
          {/* Logo and Navbar Toggle */}
          <NavLink to="/" className="flex items-center ml-4">
            <img src={logo} className="h-10 mr-2" alt="Logo" />
            <button className="lg:hidden text-white" onClick={toggleSidebar}>
              {sidebarOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </NavLink>

          {/* Desktop Navbar Links */}
          <div className="hidden lg:flex gap-4">
            <NavLink to="/" className="hover:underline">
              Home
            </NavLink>
            <NavLink to="/add-articles" className="hover:underline">
              Add Articles
            </NavLink>
            <NavLink to="/approved-articles" className="hover:underline">
              All Articles
            </NavLink>
            {isAdmin && (
              <NavLink to="/dashboard" className="hover:underline">
                Dashboard
              </NavLink>
            )}
            <NavLink to="/my-articles" className="hover:underline">
              My Articles
            </NavLink>
            <NavLink to="/subscribtion" className="hover:underline">
              Subscription
            </NavLink>
          </div>

          {/* User Avatar */}
          <div className=" lg:flex items-center z-30">
            {user ? (
              <div className="flex items-center gap-2 mr-4">
                {isAdmin ? (
                  <div>
                    <h1 className="text-red-200 font-bold">Admin</h1>
                  </div>
                ) : null}
                <Dropdown
                  arrowIcon={false}
                  inline
                  label={<Avatar img={user.photoURL} rounded />}
                >
                  <Dropdown.Header className="bg-black text-white text-start  ">
                    <NavLink>
                      <span className="block text-sm text-slate-500">
                        {user.displayName}
                      </span>
                    </NavLink>

                    <hr className="mt-1 border-gray-300 opacity-40" />
                    <NavLink>
                      <span className="block text-sm hover:text-amber-400">
                        My Articles
                      </span>
                    </NavLink>
                    <hr className="mt-1 border-gray-300 opacity-40" />
                    <span className="block truncate text-sm font-medium">
                      {user.email}
                    </span>
                    <hr className="mt-1 border-gray-300 opacity-40" />
                  </Dropdown.Header>
                  <Dropdown.Item onClick={handleSignOut}>
                    Sign Out
                  </Dropdown.Item>
                </Dropdown>
              </div>
            ) : (
              <NavLink to="/login" className="flex items-center gap-2">
                <FaUser /> Sign In
              </NavLink>
            )}
          </div>

          {/* Mobile Sidebar */}
          <div
            className={`fixed top-0 left-0 h-full w-64 bg-black text-white transition-transform transform ${
              sidebarOpen ? "translate-x-0" : "-translate-x-full"
            } lg:hidden z-50 overflow-y-auto`}
          >
            <div className="flex justify-end p-4">
              <button onClick={toggleSidebar} className="text-white">
                <FaTimes size={24} />
              </button>
            </div>
            <div className="flex flex-col gap-4 p-4">
              <NavLink
                to="/"
                onClick={toggleSidebar}
                className="hover:underline"
              >
                Home
              </NavLink>
              <NavLink
                to="/add-articles"
                onClick={toggleSidebar}
                className="hover:underline"
              >
                Add Articles
              </NavLink>
              <NavLink
                to="/approved-articles"
                onClick={toggleSidebar}
                className="hover:underline"
              >
                All Articles
              </NavLink>
              {isAdmin && (
                <NavLink
                  to="/dashboard"
                  onClick={toggleSidebar}
                  className="hover:underline"
                >
                  Dashboard
                </NavLink>
              )}
              <NavLink
                to="/my-articles"
                onClick={toggleSidebar}
                className="hover:underline"
              >
                My Articles
              </NavLink>
              <NavLink
                to="/subscribtion"
                onClick={toggleSidebar}
                className="hover:underline"
              >
                Subscription
              </NavLink>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex justify-between items-center  text-black bg-white p-2 relative ">
          {/* Desktop Navbar Links */}

          {/* Logo and Navbar Toggle */}

          <div className="flex gap-6 ">
            <button className="pl-4 text-black " onClick={toggleSidebar}>
              {sidebarOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
            <IoSearch className="text-2xl" />
          </div>

          <NavLink to="/" className="max-w-screen-xl items-center">
            <img src={logo2} className="h-6 md:h-8 md:ml-10" alt="Logo" />
          </NavLink>
          {/* User Avatar */}
          <div className=" lg:flex  ">
            {user ? (
              <div className="flex  gap-2 ">
                <Dropdown
                  arrowIcon={false}
                  inline
                  label={<Avatar img={user.photoURL} rounded />}
                >
                  <Dropdown.Header className="z-4000">
                    <span className="block text-sm">{user.displayName}</span>
                    <span className="block text-sm">My Articles</span>
                    <span className="block truncate text-sm font-medium">
                      {user.email}
                    </span>
                  </Dropdown.Header>
                  <Dropdown.Item onClick={handleSignOut}>
                    Sign Out
                  </Dropdown.Item>
                </Dropdown>
              </div>
            ) : (
              <div className="flex gap-4 ">
                {" "}
                <NavLink to="/signup">
                  <button className="hidden md:block m-0 px-2 py-1 text-base text-white bg-black   hover:bg-slate-700 font-robotoSlab align-baseline">
                    Register
                  </button>
                </NavLink>
                <NavLink
                  to="/login"
                  className="flex text-base items-center gap-2 hover:black"
                >
                  <FaUser /> Sign In
                </NavLink>
              </div>
            )}
          </div>

          {/* Mobile Sidebar */}
          <div
            className={`fixed top-0 left-0 h-full w-64 bg-black text-white transition-transform transform ${
              sidebarOpen ? "translate-x-0" : "-translate-x-full"
            } lg:hidden z-50 overflow-y-auto`}
          >
            <div className="flex justify-end p-4">
              <button onClick={toggleSidebar} className="text-white">
                <FaTimes size={24} />
              </button>
            </div>
            <div className="flex flex-col gap-4 p-4">
              <NavLink
                to="/"
                onClick={toggleSidebar}
                className="hover:underline"
              >
                Home
              </NavLink>
              <NavLink
                to="/add-articles"
                onClick={toggleSidebar}
                className="hover:underline"
              >
                Add Articles
              </NavLink>
              <NavLink
                to="/approved-articles"
                onClick={toggleSidebar}
                className="hover:underline"
              >
                All Articles
              </NavLink>
              {isAdmin && (
                <NavLink
                  to="/dashboard"
                  onClick={toggleSidebar}
                  className="hover:underline"
                >
                  Dashboard
                </NavLink>
              )}
              <NavLink
                to="/my-articles"
                onClick={toggleSidebar}
                className="hover:underline"
              >
                My Articles
              </NavLink>
              <NavLink
                to="/subscribtion"
                onClick={toggleSidebar}
                className="hover:underline"
              >
                Subscription
              </NavLink>
            </div>
            <hr className="mt-0 border-gray-300 " />
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
