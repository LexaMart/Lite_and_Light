import React, { useState } from "react";
import embassy2 from "../../../../assets/galleryImages/embassy2.png";
import embassy3 from "../../../../assets/galleryImages/embassy3.png";
import embassy4 from "../../../../assets/galleryImages/embassy4.png";
import embassy5 from "../../../../assets/galleryImages/embassy5.png";
import embassy6 from "../../../../assets/galleryImages/embassy6.png";
import "./index.css";

export const Embassy = ({ ...props }) => {
  return (
    <div className="embassy">
      <p className="embassy-title"> Посольство Беларуси в Казахстане </p>
      <div className="embassy-flex-box embassy-flex-box1">
        <img alt="img" src={embassy2} className="embassy-flex-box-img img1" />
        <img alt="img" src={embassy3} className="embassy-flex-box-img img2" />
      </div>
      <div className="embassy-box">
        <img alt="img" src={embassy4} className="embassy-box-img" />
      </div>
      <div className="embassy-flex-box embassy-flex-box2">
        <img alt="img" src={embassy5} className="embassy-flex-box-img img5" />
        <img alt="img" src={embassy6} className="embassy-flex-box-img img6" />
      </div>
    </div>
  );
};
