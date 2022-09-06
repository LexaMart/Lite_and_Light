import React from "react";
import { NavLink } from "react-router-dom";
import "./index.css";

export const GalleryItem = ({ ...props }) => {
  return (
    <div className="gallery-item">
      <div className="gallery-item-wrap">
        <div className="gallery-item-wrap-container">{props.title}</div>
        <NavLink to={props.id} className="gallery-item-wrap-link">
          посмотреть
        </NavLink>
      </div>
      <div className="gallery-item-images">
        <img
          loading="lazy"
          decoding="async"
          alt="img"
          src={props.mainImages[0]}
          className="gallery-item-images-item"
        />
        <img
          loading="lazy"
          decoding="async"
          alt="img"
          src={props.mainImages[1]}
          className="gallery-item-images-item"
        />
      </div>
    </div>
  );
};
