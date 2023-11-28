import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  const isAdmin = true;
  return (
    <div>
      <div className="grid grid-flow-col-dense">
        <aside className="w-20 min-h-screen sm:w-40 bg-gray-900 text-gray-100">
          <nav className="">
            <div className="">
              <h2 className="text-sm font-semibold tracki uppercase text-gray-400 ">
                Getting Started
              </h2>
              <ul className="menu p-4">
                <li>
                  <NavLink to="users">ALl Users</NavLink>
                </li>
                <li>
                  <NavLink to="publisher">Add Publisher</NavLink>
                </li>
                <li>
                  <NavLink to="article">All Articles</NavLink>
                </li>
              </ul>
            </div>
          </nav>
        </aside>
        <div className="flex-1 p-10 ml-16">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
