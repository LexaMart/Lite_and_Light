import React, { useState } from "react";
import Slider from "react-slick";
import { NavLink } from "react-router-dom";
import img1 from "../../assets/mainSliderImages/img1.png";
import img2 from "../../assets/mainSliderImages/img2.png";
import img3 from "../../assets/mainSliderImages/img3.png";
import img4 from "../../assets/mainSliderImages/img4.png";
import img5 from "../../assets/mainSliderImages/img5.png";
import img6 from "../../assets/mainSliderImages/img6.png";
import img7 from "../../assets/mainSliderImages/img7.png";
import "./index.css";

export const MainSlider = ({ ...props }) => {
  const [imageIndex, setImageIndex] = useState(0);
  const images = [img1, img2, img3, img4, img5, img6, img7];
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
        {images.map((img, idx) => (
          <NavLink
            to="/gallery"
            key={idx}
            className={idx === imageIndex ? "slide activeSlide" : "slide"}
          >
            <img src={img} alt={img} />
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
