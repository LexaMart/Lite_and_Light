import React from "react";
import "./index.css";

export const Template1 = ({ ...props }) => {
  return (
    <div className="temp1">
      <div className="temp1-content1">{props.pageContentLeft}</div>
      <div className="temp1-content2">{props.pageContentRight}</div>
    </div>
  );
};
