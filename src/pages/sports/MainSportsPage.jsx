import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";
import SubNavbar from "../../components/SubNavbar";
import Footer from "../../components/Footer";
import SportsNavbar from "./SportsNavbar";

const MainSportsPage = () => {
  return (
    <div>
      <Navbar></Navbar>
      <SubNavbar></SubNavbar>
      <SportsNavbar></SportsNavbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default MainSportsPage;
