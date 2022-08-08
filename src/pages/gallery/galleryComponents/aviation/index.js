import React, { useState } from "react";
import aviation2 from "../../../../assets/galleryImages/aviation2.png";
import aviation3 from "../../../../assets/galleryImages/aviation3.png";
import aviation4 from "../../../../assets/galleryImages/aviation4.png";
import aviation5 from "../../../../assets/galleryImages/aviation5.png";
import "./index.css";

export const Aviation = ({ ...props }) => {
  return (
    <div className="aviation">
      <p className="aviation-title"> BUSINESS AVIATION </p>
      <div className="aviation-flex-box">
        <img
          alt="img"
          src={aviation2}
          className="aviation-flex-box-img aviation-img1"
        />
        <img
          alt="img"
          src={aviation3}
          className="aviation-flex-box-img aviation-img2"
        />
      </div>
      <div className="aviation-box">
        <img
          alt="img"
          src={aviation4}
          className="aviation-box-img aviation-img3"
        />
      </div>
      <div className="aviation-box">
        <img
          alt="img"
          src={aviation5}
          className="aviation-box-img aviation-img4"
        />
      </div>
    </div>
  );
};
