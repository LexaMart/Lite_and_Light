import React from "react";
import "./index.css";

export const ProductInfo = ({ ...props }) => {
  return (
    <div className="product-info">
      <div className="product-info-text">{props.infoText}</div>
      <img alt="img" src={props.pageImage} className="product-info-img" />
    </div>
  );
};
