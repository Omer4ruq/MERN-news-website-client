import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import useAdmin from "../hooks/useAdmin";
import SubNavbar from "../components/SubNavbar";

const Main = () => {
  // const [isAdmin] = useAdmin();
  const isAdmin = true;
  return (
    <div className="">
      <Navbar></Navbar>
      <SubNavbar></SubNavbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
