import React from "react";
import "./index.css";

export const ProductInfo = ({ ...props }) => {
  const id = props.id;
  return (
    <div className="product-info">
      <div className="product-info-text">{props.infoText}</div>
      <img
        style={
          props.id === "0004"
            ? { width: "40%" }
            : props.id === "0006"
            ? { marginBottom: "6.5%" }
            : {}
        }
        loading="lazy"
        decoding="async"
        alt="img"
        src={props.pageImage}
        className="product-info-img"
      />
    </div>
  );
};
