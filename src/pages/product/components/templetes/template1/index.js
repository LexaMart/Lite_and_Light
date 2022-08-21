import React from "react";
import "./index.css";

export const Template1 = ({ ...props }) => {
  return (
    <div className="temp1">
      <div className="temp1-content-top">{props.pageContentTop}</div>
      <div className="temp1-content-wrap">
        <div className="temp1-content temp1-content1">
          {props.pageContentLeft}
        </div>
        <div className="temp1-content temp1-content2">
          {props.pageContentRight}
        </div>
      </div>
      <div className="temp1-content-bottom">{props.pageContentBottom}</div>
    </div>
  );
};
