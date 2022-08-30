import React, { useState } from "react";
import "./index.css";

export const GalleryItem = ({ ...props }) => {
  return (
    <div className="gallery-item">
      <div className="gallery-item-wrap">
        <div className="gallery-item-wrap-container">{props.title}</div>
        <href className="gallery-item-wrap-link">посмотреть</href>
      </div>
      <div className="gallery-item-images">
        <img
          alt="img"
          src={props.mainImages[0]}
          className="gallery-item-images-item"
        />
        <img
          alt="img"
          src={props.mainImages[1]}
          className="gallery-item-images-item"
        />
      </div>
    </div>
  );
};
