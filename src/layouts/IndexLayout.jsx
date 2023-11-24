import React from "react";
import { Outlet } from "react-router-dom";
import Banner from "../components/LandingPage/Banner";
import Footer from "../components/LandingPage/Footer";
import Header from "../components/LandingPage/Header";

export const IndexLayout = () => {
  return (
    <>
      <Banner/>  
      <Header />
      <Outlet />
     <Footer />  
    </>
  );
};