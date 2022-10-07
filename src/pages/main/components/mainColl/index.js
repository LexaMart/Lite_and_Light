import React from "react";
import { NavLink } from "react-router-dom";
import link from "../../../../assets/images/link.png";
import algorithm from "../../../../assets/images/algorithm.png";
import shadePendant from "../../../../assets/images/shade-pendant.png";
import shadeSquare from "../../../../assets/images/shade-square.png";
import duo from "../../../../assets/images/duo.png";
import trom from "../../../../assets/images/trom.png";
import "./index.css";

export const MainColl = ({ ...props }) => {
  return (
    <div className="main-coll">
      <div
        className="main-coll-links"
        data-aos-once="fal"
        data-aos="fade-up"
        data-aos-offset="50"
        data-aos-duration="1500"
        data-aos-anchor-placement="top-bottom"
      >
        <p className="main-coll-links-title">Избранные</p>
        <p className="main-coll-links-title">коллекции</p>
        <NavLink
          to="/catalog/0012"
          className="main-coll-content-box main-coll-duo"
          data-aos-once="false"
          data-aos="fade-up"
          data-aos-offset="50"
          data-aos-duration="1500"
          data-aos-anchor-placement="top-bottom"
        >
          <p className="main-coll-content-text main-coll-content-text-duo">
            Duo
          </p>
          <img
            data-aos="fade-up"
            data-aos-duration="1000"
            loading="lazy"
            decoding="async"
            src={duo}
            alt="shade"
            className="main-coll-content-img-duo"
          ></img>
        </NavLink>
        <NavLink
          to="/catalog/0018"
          className="main-coll-content-box main-coll-square"
          data-aos-once="false"
          data-aos="fade-up"
          data-aos-offset="50"
          data-aos-duration="1500"
          data-aos-anchor-placement="top-bottom"
        >
          <img
            data-aos="fade-up"
            data-aos-duration="1000"
            loading="lazy"
            decoding="async"
            src={shadeSquare}
            alt="square"
            className="main-coll-content-img-square"
          ></img>
          <p className="main-coll-content-text main-coll-content-text-square">
            Shade square
          </p>
        </NavLink>
      </div>
      <div className="main-coll-content">
        <div className="main-coll-content1">
          <NavLink
            to="/catalog/0019"
            className="main-coll-content-box main-coll-pendant"
            data-aos-once="false"
            data-aos="fade-up"
            data-aos-offset="50"
            data-aos-duration="1500"
            data-aos-anchor-placement="top-bottom"
          >
            <img
              data-aos="fade-up"
              data-aos-duration="1000"
              loading="lazy"
              decoding="async"
              src={shadePendant}
              alt="Pendant"
              className="main-coll-content-img-pendant"
            ></img>
            <p className="main-coll-content-text main-coll-content-text-pendant ">
              Shade Pendant
            </p>
          </NavLink>
          <NavLink
            to="/catalog/0022"
            className="main-coll-content-box main-coll-trom"
            data-aos-once="false"
            data-aos="fade-up"
            data-aos-offset="50"
            data-aos-duration="1500"
            data-aos-anchor-placement="top-bottom"
          >
            <p className="main-coll-content-text main-coll-content-text-trom">
              Trom
            </p>
            <img
              data-aos="fade-up"
              data-aos-duration="1000"
              loading="lazy"
              decoding="async"
              src={trom}
              alt=""
              className="main-coll-content-img-trom"
            ></img>
          </NavLink>
        </div>
        <div className="main-coll-content2">
          <NavLink
            to="/catalog/0017"
            className="main-coll-content-box main-coll-link"
            data-aos-once="false"
            data-aos="fade-up"
            data-aos-offset="50"
            data-aos-duration="1500"
            data-aos-anchor-placement="top-bottom"
          >
            <img
              data-aos="fade-up"
              data-aos-duration="1000"
              loading="lazy"
              decoding="async"
              src={link}
              alt="link"
              className="main-coll-content-img-link"
            ></img>
            <p className="main-coll-content-text main-coll-content-text-link">
              Link
            </p>
          </NavLink>
          <NavLink
            to="/catalog/0016"
            className="main-coll-content-box main-coll-algorithm"
            data-aos-once="false"
            data-aos="fade-up"
            data-aos-offset="50"
            data-aos-duration="1500"
            data-aos-anchor-placement="top-bottom"
          >
            <img
              data-aos="fade-up"
              data-aos-duration="1000"
              loading="lazy"
              decoding="async"
              src={algorithm}
              alt="algorithm"
              className="main-coll-content-img-algorithm"
            ></img>
            <p className="main-coll-content-text main-coll-content-text-algorithm">
              Algorithm
            </p>
          </NavLink>
        </div>
      </div>
    </div>
  );
};
