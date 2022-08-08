import React, { useState } from "react";
import office2 from "../../../../assets/galleryImages/office2.png";
import office3 from "../../../../assets/galleryImages/office3.png";
import office4 from "../../../../assets/galleryImages/office4.png";
import office5 from "../../../../assets/galleryImages/office5.png";
import "./index.css";

export const Office = ({ ...props }) => {
  return (
    <div className="office">
      <p className="office-title"> Офис производственной компании </p>
      <div className="office-box office-box1">
        <img alt="img" src={office2} className="office-box-img office-img1" />
      </div>
      <div className="office-flex-box">
        <img
          alt="img"
          src={office3}
          className="office-flex-box-img office-img2"
        />
        <img
          alt="img"
          src={office4}
          className="office-flex-box-img office-img3"
        />
      </div>
      <div className="office-box office-box2">
        <img alt="img" src={office5} className="office-box-img office-img4" />
      </div>
    </div>
  );
};
