import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { setIsLoader } from "../../store/reducers";
import { FeedBackForm } from "../feedBackForm";
import { Footer } from "../footer";
import { Header } from "../header";
import { Loader } from "../loader";

export const Layout = ({ ...props }) => {
  const dispatch = useDispatch();
  const { isLoader } = useSelector((store) => store.settingsReducer);

  useEffect(() => {
    setTimeout(() => {
      dispatch(setIsLoader(false));
    }, 5000);
  }, []);
  return (
    <>
      {isLoader ? (
        <Loader />
      ) : (
        <>
          <FeedBackForm />
          <Header />
          <Outlet />
          <Footer />
        </>
      )}
    </>
    /*<>
      <Loader />
    </>*/
  );
};
