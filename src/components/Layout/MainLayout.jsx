import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import HeroSection from "../../pages/HeroSection";
import About from "../../pages/About";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="pt-4">
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
