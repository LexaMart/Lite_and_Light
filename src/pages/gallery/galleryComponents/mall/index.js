import React, { useState } from "react";
import mall2 from "../../../../assets/galleryImages/mall2.png";
import mall3 from "../../../../assets/galleryImages/mall3.png";
import mall4 from "../../../../assets/galleryImages/mall4.png";
import "./index.css";

export const Mall = ({ ...props }) => {
  return (
    <div className="mall">
      <p className="mall-title"> GALLERIA MINSK </p>
      <div className="mall-box">
        <img alt="img" src={mall2} className="mall-box-img" />
      </div>
      <div className="mall-box">
        <img alt="img" src={mall3} className="mall-box-img mall-img3" />
      </div>
      <div className="mall-box">
        <img alt="img" src={mall4} className="mall-box-img" />
      </div>
    </div>
  );
};
