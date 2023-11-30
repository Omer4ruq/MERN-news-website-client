import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import useAdmin from "../hooks/useAdmin";

const Main = () => {
  // const [isAdmin] = useAdmin();
  const isAdmin = true;
  return (
    <div className="">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
