import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { galleryItems } from "../../data/galleryItems";
import { Embassy } from "./galleryComponents/embassy";
import { Fabros } from "./galleryComponents/fabros";
import { Pluto } from "./galleryComponents/pluto";
import { Office } from "./galleryComponents/office";
import { Mall } from "./galleryComponents/mall";
import { Aviation } from "./galleryComponents/aviation";
import { Hall } from "./galleryComponents/hall";
import "./index.css";

export const Gallery = ({ ...props }) => {
  const [checkValue, setCheckValue] = useState("embassy");
  return (
    <div className="gallery">
      <div className="gallery-high">
        <div className="gallery-high-list">
          {galleryItems.map((item, idx) => (
            <div key={idx} className="gallery-high-list-item">
              <input
                id={item.value}
                onChange={() => setCheckValue(item.value)}
                type="radio"
                name="gallery"
              />
              <label
                className={
                  checkValue === item.value
                    ? "gallery-high-list-item-label gallery-high-list-item-label-active"
                    : "gallery-high-list-item-label"
                }
                htmlFor={item.value}
              >
                {item.title}
              </label>
            </div>
          ))}
        </div>
        <div className="gallery-high-visible">
          {galleryItems.map((item, idx) =>
            checkValue === item.value ? (
              <img
                key={idx}
                className="gallery-high-visible-img"
                src={item.img}
                alt="img"
              />
            ) : (
              ""
            )
          )}
        </div>
      </div>
      <div className="gallery-low">
        {checkValue === "embassy" && <Embassy />}
        {checkValue === "fabros" && <Fabros />}
        {checkValue === "pluto" && <Pluto />}
        {checkValue === "office" && <Office />}
        {checkValue === "mall" && <Mall />}
        {checkValue === "aviation" && <Aviation />}
        {checkValue === "hall" && <Hall />}
      </div>
    </div>
  );
};
