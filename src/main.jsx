import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { router } from "./Routes/Router.jsx";
import { RouterProvider } from "react-router-dom";
import AuthProvider from "./providers/AuthProviders.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import PrivateRoutes from "./Routes/PrivateRoutes.jsx";
import { Helmet, HelmetProvider } from "react-helmet-async";

const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <AuthProvider>
        {" "}
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </AuthProvider>
    </HelmetProvider>
  </React.StrictMode>
);
