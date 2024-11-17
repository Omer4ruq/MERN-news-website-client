import React, { useContext } from "react";
import image from "../assets/image/signin.png";
import logo from "../assets/image/logo.png";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../providers/AuthProviders";
import SocialLogin from "../components/SocialLogin";
import { FaWindowClose } from "react-icons/fa";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");

    signIn(email, password)
      .then((result) => {
        navigate(from);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "User Logged in Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="flex  h-auto bg-black">
      {/* Left Section */}
      <div className="flex flex-col items-center md:w-3/4 p-16 md:p-16">
        <img src={logo} className="h-12 md:h-14 mb-6" alt="Logo" />
        <h1 className="text-white text-2xl md:text-4xl font-semibold text-center mb-10">
          Sign in with your email
        </h1>
        <form
          onSubmit={handleLogin}
          className="w-full max-w-xs md:max-w-sm mx-auto space-y-4"
        >
          <input
            type="text"
            name="email"
            placeholder="Email"
            className="appearance-none bg-transparent  w-full border-t-0 border-r-0 border-l-0 border-b-2 border-teal-500 text-white mr-3 py-1 px-2 leading-tight focus:outline-none mb-4"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="appearance-none bg-transparent  w-full border-t-0 border-r-0 border-l-0 border-b-2 border-teal-500 text-white mr-3 py-1 px-2 leading-tight focus:outline-none mb-4"
          />
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 "
          >
            Sign in
          </button>
          <SocialLogin />
        </form>
        <div className="text-center mt-6">
          <h2 className="text-white text-lg md:text-xl font-bold">
            Don’t have a BBC account?
          </h2>
          <NavLink to="/signup" className="underline text-blue-500">
            Registration
          </NavLink>
        </div>
      </div>

      {/* Right Section */}
      <div className="hidden md:flex items-center justify-center">
        <img
          src={image}
          className="h-auto w-auto p-4 object-cover"
          alt="Sign In Illustration"
        />
        <div className="text-white absolute -mt-[600px] ml-[300px] text-4xl">
          <NavLink to="/">
            <FaWindowClose />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Login;
