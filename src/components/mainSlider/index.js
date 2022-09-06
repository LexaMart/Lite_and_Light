import React, { useState } from "react";
import Slider from "react-slick";
import { NavLink } from "react-router-dom";
import { galleryItems } from "../../data/galleryItems";
import "./index.css";

export const MainSlider = ({ ...props }) => {
  const [imageIndex, setImageIndex] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    lazyload: false,
    speed: 500,
    slidesToShow: 1,
    centerMode: true,
    centerPadding: 0,
    autoplay: true,
    variableWidth: true,
    beforeChange: (current, next) => setImageIndex(next),
  };
  return (
    <div className="slider">
      <Slider className="big-slider" {...settings}>
        {galleryItems.map((item, idx) => (
          <NavLink
            to={`/galery/${item.id}`}
            key={idx}
            className={idx === imageIndex ? "slide activeSlide" : "slide"}
          >
            <img loading="lazy" decoding="async"src={item.image} alt="img" />
            <div
              className={
                idx === imageIndex
                  ? "slide-content slide-content-active"
                  : "slide-content"
              }
            ></div>
          </NavLink>
        ))}
      </Slider>
    </div>
  );
};
