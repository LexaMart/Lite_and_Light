import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { setActiveLink } from "react-scroll/modules/mixins/scroller";
import embassy1 from "../../assets/galleryImages/embassy1.png";
import fabros1 from "../../assets/galleryImages/fabros1.png";
import "./index.css";

export const Gallery = ({ ...props }) => {
  const [checkValue, setCheckValue] = useState("");
  const titles = [
    {
      title: "Посольство Беларуси в Казахстане",
      value: "embassy",
    },
    {
      title: "FABROS",
      value: "fabros",
    },
    {
      title: "PLUTO",
      value: "pluto",
    },
    {
      title: "Офис производственной компаниии",
      value: "office",
    },
    {
      title: "Gelleria Minsk",
      value: "mall",
    },
    {
      title: "Businesss Aviation",
      value: "aviation",
    },
    {
      title: "Холл бизнес-центра",
      value: "hall",
    },
  ];
  return (
    <div className="gallery">
      <div className="gallery-high">
        <div className="gallery-high-list">
          {titles.map((title, idx) => (
            <label>
              <input
                onChange={() => setCheckValue(title.value)}
                type="radio"
                name="gallery"
                className="gallery-high-list-item"
              />
              {title.title}
            </label>
          ))}
        </div>
        <div className="visibleValues">
          {checkValue === "embassy" ? <img src={embassy1} /> : <div></div>}
          {checkValue === "fabros" ? <img src={fabros1} /> : <div></div>}
        </div>
      </div>
    </div>
  );
};
