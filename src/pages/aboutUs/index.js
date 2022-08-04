import React, { useEffect } from "react";
//import { useDispatch, useSelector } from "react-redux/es/exports";
import { Buzzi } from "./components/buzzi";
import { Light } from "./components/light";
import { Brands } from "./components/brands";
import "./index.css";

export const AboutUs = ({ ...props }) => {
  return (
    <div className="wraper">
      <div className="about-us">
        <p className="about-us-title">О нас</p>
        <Buzzi />
        <Light />
        <Brands />
      </div>
    </div>
  );
};
