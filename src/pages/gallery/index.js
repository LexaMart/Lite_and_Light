import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { galleryItems } from "../../data/galleryItems";
import { GalleryItem } from "./galleryComponents/galleryItem";
import "./index.css";

export const Gallery = ({ ...props }) => {
  const [checkValue, setCheckValue] = useState("embassy");
  return (
    <div className="gallery">
      {galleryItems.map((item, idx) => (
        <div key={idx} className="gallery-list-item">
          <GalleryItem title={item.title} mainImages={item.mainImages} />
        </div>
      ))}
    </div>
  );
};
