import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
//import { exampleAction } from "../../store/reducers";
import { MainSlider } from "../../components/mainSlider";
import { MainGreet } from "./components/mainGreet";
import { MainColl } from "./components/mainColl";
import { MainTypes } from "./components/mainTypes";
import "./index.css";

export const Main = ({ ...props }) => {
  //const reduxValue = useSelector((store) => store.exampleReducer.exampleField);
  const dispatch = useDispatch();

  useEffect(() => {}, []);
  return (
    <div className="wraper">
      <main className="main">
        <div className="main-gallery">
          <p className="main-gallery-title">Наши работы</p>
        </div>
      </main>
    </div>
  );
};
