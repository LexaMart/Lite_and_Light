import React, { useState } from "react";
import hall2 from "../../../../assets/galleryImages/hall2.png";
import hall3 from "../../../../assets/galleryImages/hall3.png";
import hall4 from "../../../../assets/galleryImages/hall4.png";
import hall5 from "../../../../assets/galleryImages/hall5.png";
import hall6 from "../../../../assets/galleryImages/hall6.png";
import "./index.css";

export const Hall = ({ ...props }) => {
  return (
    <div className="hall">
      <p className="hall-title"> Холл бизнес-центра </p>
      <div className="hall-box">
        <img src={hall2} alt="img" className="hall-box-img" />
      </div>
      <div className="hall-flex-box">
        <div className="hall-flex-box-item">
          <img alt="img" src={hall3} className="hall-flex-box-item-img" />
          <img alt="img" src={hall4} className="hall-flex-box-item-img" />
        </div>
        <div className="hall-flex-box-item">
          <img alt="img" src={hall6} className="hall-flex-box-item-img" />
          <img alt="img" src={hall5} className="hall-flex-box-item-img" />
        </div>
      </div>
    </div>
  );
};
