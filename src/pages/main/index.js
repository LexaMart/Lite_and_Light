import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { exampleAction } from "../../store/reducers";
import "./index.css";

export const Main = ({ ...props }) => {
  const reduxValue = useSelector((store) => store.exampleReducer.exampleField);
  const dispatch = useDispatch();

  const dispatchEventClick = () => {
    dispatch(exampleAction(!reduxValue))

  }

  useEffect(() => {
    console.log(reduxValue);
  }, [reduxValue]);
  return <div onClick={() => dispatchEventClick()} className="wraper">Main Page</div>;
};
