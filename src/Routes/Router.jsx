import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home";
import Login from "../pages/login";
import SignUp from "../pages/SignUp";
import Dashboard from "../layout/Dashboard";
import News from "../pages/dashboard/News";
import AllUsers from "../pages/dashboard/AllUsers";

import AddPublisher from "../pages/dashboard/AddPublisher";
import AddArticles from "../pages/AddArticles";
import PrivateRoutes from "./PrivateRoutes";
import AllArticles from "../pages/dashboard/AllArticles";
import MyArticles from "../pages/MyArticles";
import ApprovedArticles from "../pages/ApprovedArticles";
import Details from "../pages/Details";
import Payment from "../pages/payment/Payment";
import Subscribtion from "../pages/Subscribtion";
import MyProfile from "../pages/MyProfile";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/payment",
        element: <Payment></Payment>,
      },
      {
        path: "/my-articles",
        element: <MyArticles></MyArticles>,
      },
      {
        path: "/subscribtion",
        element: <Subscribtion></Subscribtion>,
      },
      {
        path: "/my-profile",
        element: <MyProfile></MyProfile>,
      },
      {
        path: "/add-articles",
        element: (
          <PrivateRoutes>
            <AddArticles></AddArticles>
          </PrivateRoutes>
        ),
        loader: () =>
          fetch(`https://newspaper-server-zeta.vercel.app/publisher`),
      },

      {
        path: "/approved-articles",
        element: <ApprovedArticles></ApprovedArticles>,
        // loader: () => fetch(`https://newspaper-server-zeta.vercel.app/article`),
      },
      {
        path: "details-news/:id",
        element: <Details></Details>,
        loader: ({ params }) =>
          fetch(
            `https://newspaper-server-zeta.vercel.app/article/${params.id}`
          ),
      },
    ],
  },
  {
    path: "dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "news",
        element: <News></News>,
      },
      {
        path: "users",
        element: <AllUsers></AllUsers>,
      },
      {
        path: "publisher",
        element: <AddPublisher></AddPublisher>,
      },
      {
        path: "article",
        element: <AllArticles></AllArticles>,
      },
    ],
  },
]);
