import React from "react";
import { FaFacebookF, FaXTwitter } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram, FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import logo2 from "../assets/image/logo2.png";
import { NavLink } from "react-router-dom";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="pt-4 bg-white text-black">
        <hr className="mt-0 border-black " />
        <div className="ml-5 ">
          <img src={logo2} className="h-6 md:h-8  mt-5 " alt="Logo" />
          <div className="mt-4 text-start  md:flex gap-4">
            <NavLink to="/">
              <h1 className="font-sans font-semibold hover:underline ">Home</h1>
            </NavLink>
            <NavLink to="/">
              <h1 className="font-sans font-semibold hover:underline">News</h1>
            </NavLink>
            <NavLink to="/">
              <h1 className="font-sans font-semibold hover:underline">
                Sports
              </h1>
            </NavLink>
            <NavLink to="/">
              <h1 className="font-sans font-semibold hover:underline">
                Business
              </h1>
            </NavLink>
            <NavLink to="/">
              <h1 className="font-sans font-semibold hover:underline">
                Innovation
              </h1>
            </NavLink>
            <NavLink to="/">
              <h1 className="font-sans font-semibold hover:underline">
                Culture
              </h1>
            </NavLink>
            <NavLink to="/">
              <h1 className="font-sans font-semibold hover:underline">Arts</h1>
            </NavLink>
            <NavLink to="/">
              <h1 className="font-sans font-semibold hover:underline">
                Travel
              </h1>
            </NavLink>
            <NavLink to="/">
              <h1 className="font-sans font-semibold hover:underline">Earth</h1>
            </NavLink>
            <NavLink to="/">
              <h1 className="font-sans font-semibold hover:underline">
                Weather
              </h1>
            </NavLink>
          </div>
          <div className=" flex gap-8 items-center mt-4">
            <h1 className="font-bold">Follow BBC on:</h1>
            <div className="flex gap-5 text-2xl">
              <FaXTwitter></FaXTwitter>
              <FaFacebookF></FaFacebookF>
              <FaInstagram></FaInstagram>
              <FaLinkedin></FaLinkedin>
              <FaYoutube className="" />
            </div>
          </div>
          <div className="mt-4 text-start  text-xs  md:text-sm flex gap-2">
            <NavLink to="/">
              <h1 className="font-sans   hover:underline ">Terms of Use</h1>
            </NavLink>
            <NavLink to="/">
              <h1 className="font-sans  hover:underline">About the BBC</h1>
            </NavLink>
            <NavLink to="/">
              <h1 className="font-sans  hover:underline">Privacy Policy</h1>
            </NavLink>
            <NavLink to="/">
              <h1 className="font-sans hidden md:block hover:underline">
                Cookies
              </h1>
            </NavLink>
            <NavLink to="/">
              <h1 className="font-sans hidden md:block hover:underline">
                Accessibility Help
              </h1>
            </NavLink>
            <NavLink to="/">
              <h1 className="font-sans  hover:underline">Contact the BBC</h1>
            </NavLink>
            <NavLink to="/">
              <h1 className="font-sans hidden md:block hover:underline">
                Do not share or sell my info
              </h1>
            </NavLink>
            <NavLink to="/">
              <h1 className="font-sans  hover:underline">Advertise with us</h1>
            </NavLink>
            <NavLink to="/">
              <h1 className="font-sans  hover:underline">
                Contact technical support
              </h1>
            </NavLink>
            <NavLink to="/">
              <h1 className="font-sans hidden md:block hover:underline">
                Weather
              </h1>
            </NavLink>
          </div>
          <div className="flex items-center pt-8 pb-4 text-sm">
            <span className="text-gray-400">
              © Copyright 2024 BBC. All rights reserved. The BBC is not
              responsible for the content of external sites. Read about our
              approach to external linking.
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
