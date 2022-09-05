import React, { useState } from "react";
import { Link } from "react-scroll";
import { NavLink, useParams, useNavigate } from "react-router-dom";
import { Search } from "../search";
import logo from "../../assets/images/logo.png";
import "./index.css";

export const Header = ({ ...props }) => {
  const [isFavoritesActive, setIsFavoritesActive] = useState(false);
  const { adress } = useParams();
  const navigate = useNavigate();
  const width = document.body.clientWidth;
  const goToCastom = () => {
    if (adress === "/") {
      navigate("", {
        replace: true,
      });
    } else {
      navigate("/", {
        replace: false,
      });
      width >= 3800
        ? setTimeout(() => window.scrollTo(0, 4000), 0)
        : width >= 1800
        ? setTimeout(() => window.scrollTo(0, 2400), 0)
        : width >= 1600
        ? setTimeout(() => window.scrollTo(0, 2200), 0)
        : width >= 1400
        ? setTimeout(() => window.scrollTo(0, 2000), 0)
        : width >= 1300
        ? setTimeout(() => window.scrollTo(0, 1800), 0)
        : width >= 1050
        ? setTimeout(() => window.scrollTo(0, 1500), 0)
        : width >= 900
        ? setTimeout(() => window.scrollTo(0, 1400), 0)
        : width >= 750
        ? setTimeout(() => window.scrollTo(0, 1000), 0)
        : width >= 200 && setTimeout(() => window.scrollTo(0, 500), 0);
    }
  };
  return (
    <header className="header">
      <div className="header-menu">
        <NavLink to="/" className="header-logo">
          <img loading="lazy" decoding="async"alt="logo" className="header-logo-img" src={logo}></img>
        </NavLink>
        <NavLink
          to="/catalog"
          className={({ isActive }) =>
            isActive ? "active-link header-link" : "header-link"
          }
        >
          Каталог
        </NavLink>
        <NavLink
          to="/galery"
          className={({ isActive }) =>
            isActive ? "active-link header-link" : "header-link"
          }
        >
          Галерея
        </NavLink>
        <Link
          onClick={goToCastom}
          to="main-types-item2"
          spy={true}
          smooth={true}
          offset={-100}
          duration={1000}
          className="header-link"
        >
          Кастом
        </Link>
      </div>
      <div className="header-nav">
        <div className="header-search">
          <Search />
        </div>
        <div className="header-like">
          <NavLink
            to="/favorites"
            className={({ isActive }) => {
              isActive
                ? setIsFavoritesActive(true)
                : setIsFavoritesActive(false);
              return "header-like-btn";
            }}
          >
            <svg
              className={isFavoritesActive ? "active-link-favorites" : ""}
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs></defs>
              <title />
              <g data-name="Layer 54" id="Layer_54">
                <path
                  className="cls-1"
                  d="M16,28.72a3,3,0,0,1-2.13-.88L3.57,17.54a8.72,8.72,0,0,1-2.52-6.25,8.06,8.06,0,0,1,8.14-8A8.06,8.06,0,0,1,15,5.68l1,1,.82-.82h0a8.39,8.39,0,0,1,11-.89,8.25,8.25,0,0,1,.81,12.36L18.13,27.84A3,3,0,0,1,16,28.72ZM9.15,5.28A6.12,6.12,0,0,0,4.89,7a6,6,0,0,0-1.84,4.33A6.72,6.72,0,0,0,5,16.13l10.3,10.3a1,1,0,0,0,1.42,0L27.23,15.91A6.25,6.25,0,0,0,29,11.11a6.18,6.18,0,0,0-2.43-4.55,6.37,6.37,0,0,0-8.37.71L16.71,8.8a1,1,0,0,1-1.42,0l-1.7-1.7a6.28,6.28,0,0,0-4.4-1.82Z"
                />
              </g>
            </svg>
          </NavLink>
        </div>
      </div>
    </header>
  );
};
