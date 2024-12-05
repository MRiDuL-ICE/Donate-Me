import React from "react";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/Layout/MainLayout";
import Home from "../pages/Home";
import DonationCampaigns from "../pages/DonationCampaigns";
import DonationDetails from "../pages/DonationDetails";
import ErrorPage from "../pages/ErrorPage";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../pages/Dashboard";
import ProfileUpdate from "../pages/ProfileUpdate";
import DashboardLayout from "../pages/DashboardLayout";
import ForgetPassword from "../pages/ForgetPassword";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "donationcampaigns",
        element: <DonationCampaigns></DonationCampaigns>,
      },

      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "donationdetails/:id",
    element: (
      <PrivateRoute>
        <DonationDetails></DonationDetails>
      </PrivateRoute>
    ),
    loader: ({ params }) => fetch(`/data.json/${params.id}`),
  },
  {
    path: '/dashboard',
    element: <PrivateRoute>
      <DashboardLayout></DashboardLayout>
    </PrivateRoute>,
    children: [
      {
        path: '',
        element: <Dashboard></Dashboard>
      },
      {
        path: 'updateprofile',
        element: <ProfileUpdate></ProfileUpdate>
      },
    ]
  },
  {
    path: 'forgetpassword',
    element: <ForgetPassword></ForgetPassword>
  },
  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },
]);

export default router;
