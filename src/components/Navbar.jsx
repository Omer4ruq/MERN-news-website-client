import React, { useContext, useState } from "react";
import logo from "../assets/image/logo.png";
import { FaHome, FaUser, FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../providers/AuthProviders";
import { Avatar, Dropdown } from "flowbite-react";
import useAdmin from "../hooks/useAdmin";

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
    <div className="flex justify-between items-center text-white bg-black p-2 relative">
      {/* Logo and Navbar Toggle */}
      <NavLink to="/" className="flex items-center">
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
      <div className=" lg:flex items-center">
        {user ? (
          <div className="flex items-center gap-2">
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
              <Dropdown.Item onClick={handleSignOut}>Sign Out</Dropdown.Item>
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
          <NavLink to="/" onClick={toggleSidebar} className="hover:underline">
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
  );
};

export default Navbar;
