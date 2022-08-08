import React, { useState } from "react";
import fabros2 from "../../../../assets/galleryImages/fabros2.png";
import fabros3 from "../../../../assets/galleryImages/fabros3.png";
import fabros4 from "../../../../assets/galleryImages/fabros4.png";
import fabros5 from "../../../../assets/galleryImages/fabros5.png";
import "./index.css";

export const Fabros = ({ ...props }) => {
  return (
    <div className="fabros">
      <p className="fabros-title"> Fabros </p>
      <div className="fabros-flex-box">
        <div className="fabros-flex-box-item">
          <img src={fabros2} className="fabros-flex-box-item-img img1" />
          <img src={fabros4} className="fabros-flex-box-item-img img1" />
        </div>
        <div className="fabros-flex-box-item">
          <img src={fabros3} className="fabros-flex-box-item-img img1" />
          <img src={fabros5} className="fabros-flex-box-item-img img1" />
        </div>
      </div>
    </div>
  );
};
