import React, { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return (
      <div className="w-16 h-16 ml-[550px] mt-8 border-4 text-center border-dashed rounded-full animate-spin border-violet-400"></div>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate state={{ from: location }} to="/login"></Navigate>;
};

export default PrivateRoutes;
