import React from "react";
import { galleryItems } from "../../data/galleryItems";
import { GalleryItem } from "./galleryComponents/galleryItem";
import "./index.css";

export const Gallery = ({ ...props }) => {
  return (
    <div className="gallery">
      {galleryItems.map((item, idx) => (
        <div key={idx} className="gallery-list-item">
          <GalleryItem
            title={item.title}
            mainImages={item.mainImages}
            id={item.id}
          />
        </div>
      ))}
    </div>
  );
};
