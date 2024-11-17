import React, { useContext, useState } from "react";
import image from "../assets/image/signin.png";
import logo from "../assets/image/logo.png";
import { NavLink, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { getAuth } from "firebase/auth";
import { app } from "../firebase/firebase.config";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { AuthContext } from "../providers/AuthProviders";
import SocialLogin from "../components/SocialLogin";
import { FaWindowClose } from "react-icons/fa";

const SignUp = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const [registerError, setRegisterError] = useState("");
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();
  const auth = getAuth(app);

  const handleSignUp = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    const displayName = form.get("displayName");
    const photoURL = form.get("photoURL");

    if (password.length < 6 || !/[!@#$%^&*]/.test(password)) {
      setRegisterError(
        "Password must be at least 6 characters and contain a special character."
      );
      Swal.fire({ icon: "error", title: "Oops...", text: registerError });
      return;
    }

    createUser(email, password, displayName, photoURL)
      .then(() => {
        updateUserProfile(displayName, photoURL).then(() => {
          const userInfo = { displayName, email, photoURL, premiumTaken: null };
          axiosPublic.post("/users", userInfo).then(() => {
            Swal.fire({
              icon: "success",
              title: "User Created Successfully",
              timer: 1500,
            });
            navigate("/");
          });
        });
      })
      .catch((error) => {
        setRegisterError(error.message);
        Swal.fire({ icon: "error", title: "Error", text: error.message });
      });
  };

  return (
    <div className="flex  bg-black h-auto ">
      {/* Left Section */}
      <div className="flex flex-col items-center md:w-3/4  p-8 md:p-8">
        <img src={logo} className="h-14 mb-4" alt="Logo" />
        <h1 className="text-white text-2xl md:text-4xl font-semibold text-center md:text-left mb-4">
          Register with the BBC
        </h1>
        <form onSubmit={handleSignUp} className="w-full max-w-md space-y-4 ">
          <input
            type="text"
            name="email"
            className="appearance-none bg-transparent  w-full border-t-0 border-r-0 border-l-0 border-b-2 border-teal-500 text-white mr-3 py-1 px-2 leading-tight focus:outline-none mb-4"
            placeholder="Email"
          />
          <input
            type="password"
            name="password"
            className="appearance-none bg-transparent  w-full border-t-0 border-r-0 border-l-0 border-b-2 border-teal-500 text-white mr-3 py-1 px-2 leading-tight focus:outline-none mb-4"
            placeholder="Password"
          />
          <input
            type="text"
            name="displayName"
            className="appearance-none bg-transparent  w-full border-t-0 border-r-0 border-l-0 border-b-2 border-teal-500 text-white mr-3 py-1 px-2 leading-tight focus:outline-none mb-4"
            placeholder="Name"
          />
          <input
            type="text"
            name="photoURL"
            className="appearance-none bg-transparent  w-full border-t-0 border-r-0 border-l-0 border-b-2 border-teal-500 text-white mr-3 py-1 px-2 leading-tight focus:outline-none mb-4"
            placeholder="Photo URL"
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4  w-full"
          >
            Submit
          </button>
          <SocialLogin />
        </form>
        <div className="text-white mt-4">
          <p className="text-lg">Already have an account?</p>
          <NavLink to="/login" className="text-blue-500 underline">
            Login
          </NavLink>
        </div>
      </div>

      {/* Right Section */}
      <div className=" hidden md:flex items-center justify-center md:w-1/2 p-6">
        <img src={image} className="w-full h-auto  object-cover" alt="Signup" />

        <div className="text-white absolute -mt-[550px] ml-[300px] text-4xl">
          <NavLink to="/">
            <FaWindowClose />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
