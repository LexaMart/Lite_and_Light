import React from "react";
import { Outlet } from "react-router-dom";
import { FeedBackForm } from "../feedBackForm";
import { Footer } from "../footer";
import { Header } from "../header";
import { Loader } from "../loader";

export const Layout = ({ ...props }) => {
  return (
    
    <>
      <FeedBackForm />
      <Header />
      <Outlet />
      <Footer />
    </>
    /*<>
      <Loader />
    </>*/
  );
};
