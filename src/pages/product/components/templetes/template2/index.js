import React from "react";
import "./index.css";

export const Template2 = ({ ...props }) => {
  return (
    <div className="temp2">
      <div className="temp2-content-top temp2-content">{props.temp2Top}</div>
      <div className="temp2-content-bottom temp2-content">
        {props.temp2Bottom}
      </div>
    </div>
  );
};
