import React, { useEffect } from "react";
//import { useDispatch, useSelector } from "react-redux/es/exports";
import { Buzzy } from "./components/buzzi";
import "./index.css";

export const AboutUs = ({ ...props }) => {
  return (
    <div className="wraper">
      <div className="about-us">
        <p className="about-us-title">О нас</p>
        <Buzzy />
      </div>
    </div>
  );
};
