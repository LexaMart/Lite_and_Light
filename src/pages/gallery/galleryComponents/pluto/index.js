import React, { useState } from "react";
import pluto2 from "../../../../assets/galleryImages/pluto2.png";
import pluto3 from "../../../../assets/galleryImages/pluto3.png";
import pluto4 from "../../../../assets/galleryImages/pluto4.png";
import pluto5 from "../../../../assets/galleryImages/pluto5.png";
import pluto6 from "../../../../assets/galleryImages/pluto6.png";
import "./index.css";

export const Pluto = ({ ...props }) => {
  return (
    <div className="pluto">
      <p className="pluto-title"> Pluto </p>
      <div className="pluto-flex-box pluto-flex-box1">
        <img alt="img" src={pluto2} className="pluto-flex-box-img pluto-img1" />
        <img alt="img" src={pluto3} className="pluto-flex-box-img pluto-img2" />
      </div>
      <div className="pluto-box">
        <img alt="img" src={pluto4} className="pluto-box-img" />
      </div>
      <div className="pluto-flex-box pluto-flex-box2">
        <img alt="img" src={pluto5} className="pluto-flex-box-img pluto-img5" />
        <img alt="img" src={pluto6} className="pluto-flex-box-img pluto-img6" />
      </div>
    </div>
  );
};
