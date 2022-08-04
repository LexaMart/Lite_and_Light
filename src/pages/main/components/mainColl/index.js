import React from "react";
import { NavLink } from "react-router-dom";
import AOS from "aos";
import link from "../../../../assets/images/link.png";
import algorithm from "../../../../assets/images/algorithm.png";
import shadePendant from "../../../../assets/images/shade-pendant.png";
import shadeSquare from "../../../../assets/images/shade-square.png";
import shade from "../../../../assets/images/shade.png";
import trom from "../../../../assets/images/trom.png";
import "./index.css";

export const MainColl = ({ ...props }) => {
  AOS.init();
  return (
    <div className="main-coll">
      <div
        className="main-coll-links"
        data-aos="fade-up"
        data-aos-offset="100"
        data-aos-duration="1500"
        data-aos-anchor-placement="top-bottom"
      >
        <p className="main-coll-links-title">Избранные</p>
        <p className="main-coll-links-title">коллекции</p>
      </div>
      <div className="main-coll-content">
        <div className="main-coll-content1">
          <a
            href="#"
            className="main-coll-content-box main-coll-pendant"
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-duration="1500"
            data-aos-anchor-placement="top-bottom"
          >
            <img
              src={shadePendant}
              alt="Pendant"
              className="main-coll-content-img-pendant"
            ></img>
            <p className="main-coll-content-text main-coll-content-text-pendant ">
              Shade Pendant
            </p>
          </a>
          <a
            className="main-coll-content-box main-coll-shade"
            data-aos="fade-up"
            data-aos-offset="100"
            data-aos-duration="1500"
            data-aos-anchor-placement="top-bottom"
          >
            <img
              src={shade}
              alt="shade"
              className="main-coll-content-img-shade"
            ></img>
            <p className="main-coll-content-text main-coll-content-text-shade">
              Shade
            </p>
          </a>
          <a
            className="main-coll-content-box main-coll-square"
            data-aos="fade-up"
            data-aos-offset="100"
            data-aos-duration="1500"
            data-aos-anchor-placement="top-bottom"
          >
            <img
              src={shadeSquare}
              alt="square"
              className="main-coll-content-img-square"
            ></img>
            <p className="main-coll-content-text main-coll-content-text-square">
              Shade square
            </p>
          </a>
        </div>
        <div className="main-coll-content2">
          <p
            className="main-coll-content-title"
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-duration="1500"
            data-aos-anchor-placement="top-bottom"
          >
            Дизайнерские решения
          </p>
          <a
            className="main-coll-content-box main-coll-link"
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-duration="1500"
            data-aos-anchor-placement="top-bottom"
          >
            <img
              src={link}
              alt="link"
              className="main-coll-content-img-link"
            ></img>
            <p className="main-coll-content-text main-coll-content-text-link">
              Link
            </p>
          </a>
          <a
            className="main-coll-content-box main-coll-algorithm"
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-duration="1500"
            data-aos-anchor-placement="top-bottom"
          >
            <img
              src={algorithm}
              alt="algorithm"
              className="main-coll-content-img-algorithm"
            ></img>
            <p className="main-coll-content-text main-coll-content-text-algorithm">
              Algorithm
            </p>
          </a>
          <a
            className="main-coll-content-box main-coll-trom"
            data-aos="fade-up"
            data-aos-offset="180"
            data-aos-duration="1500"
            data-aos-anchor-placement="top-bottom"
          >
            <p className="main-coll-content-text main-coll-content-text-trom">
              Trom
            </p>
            <img src={trom} alt="" className="main-coll-content-img-trom"></img>
          </a>
        </div>
      </div>
    </div>
  );
};
