import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { MainSlider } from "../../components/mainSlider";
import { MainGreet } from "./components/mainGreet";
import { MainColl } from "./components/mainColl";
import { MainTypes } from "./components/mainTypes";
import "./index.css";

export const Main = ({ ...props }) => {
  useEffect(() => {}, []);
  return (
    <div className="wraper">
      <main className="main">
        <MainGreet />
        <MainColl />
        <MainTypes />
        <div className="main-gallery">
          <NavLink to="/galery" className="main-gallery-title">
            Наши работы
          </NavLink>
          <MainSlider />
        </div>
      </main>
    </div>
  );
};
