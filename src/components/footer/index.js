import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/big-logo.png";
import "./index.css";

export const Footer = ({ ...props }) => {
  return (
    <footer className="footer">
      <div className="footer-high">
        <ul className="footer-list">
          <li className="footer-item">
            <NavLink to="/catalog" className="footer-title">
              Каталог
            </NavLink>
          </li>
          <li className="footer-item">
            <a className="footer-title">Галерея</a>
            <a href="#" className="footer-link">
              FABROS
            </a>
            <a href="#" className="footer-link">
              STROY TECH PROGRESS
            </a>
            <a href="#" className="footer-link">
              ESQUIRE
            </a>
          </li>
          <li className="footer-item">
            <NavLink to="/about" className="footer-title">
              О нас
            </NavLink>
            <a href="#" className="footer-link">
              История
            </a>
            <a href="#" className="footer-link">
              Идеалогия
            </a>
            <a href="#" className="footer-link">
              Бренды
            </a>
          </li>
          <li className="footer-item">
            <a className="footer-title">Контакты</a>
            <p className="footer-subtitle">Минск</p>
            <a
              href="https://www.google.com/maps/place/%D0%BF%D1%80-%D1%82.+%D0%9F%D0%BE%D0%B1%D0%B5%D0%B4%D0%B8%D1%82%D0%B5%D0%BB%D0%B5%D0%B9+125,+%D0%9C%D0%B8%D0%BD%D1%81%D0%BA/@53.9386633,27.4664457,17z/data=!3m1!4b1!4m5!3m4!1s0x46dbc4e33ceb2935:0x5b8aa0d96e3411de!8m2!3d53.9386633!4d27.4686344"
              className="footer-link"
            >
              пр. Победителей 125
            </a>
            <a href="tel:+375293758729" className="footer-link">
              +375 (29) 375-87-29
            </a>
            <a href="tel:+375296818179" className="footer-link">
              +375 (29) 681-81-79
            </a>
          </li>
        </ul>
        <img src={logo} alt="logo" className="footer-logo"></img>
      </div>
      <div className="footer-low">
        <div className="footer-text">© 2022 Lite & Light</div>
        <div className="footer-social">
          <a className="footer-social-link">
            <svg width="13" height="22" viewBox="0 0 13 22" fill="none">
              <g opacity="0.5">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 1H9C6.23858 1 4 3.23858 4 6V9H1V13H4V21H8V13H11L12 9H8V6C8 5.44772 8.44771 5 9 5H12V1Z"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
            </svg>
          </a>
          <a className="footer-social-link">
            <svg width="24" height="21" viewBox="0 0 24 21" fill="none">
              <g opacity="0.5">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M23 2.0005C22.0424 2.67597 20.9821 3.19261 19.86 3.5305C18.6264 2.11203 16.6384 1.61461 14.8821 2.28495C13.1258 2.95529 11.9748 4.6508 12 6.5305V7.5305C8.43067 7.62305 5.05203 5.92247 3 3.0005C3 3.0005 -1 12.0005 8 16.0005C5.94053 17.3985 3.48716 18.0994 1 18.0005C10 23.0005 21 18.0005 21 6.5005C20.9991 6.22195 20.9723 5.94409 20.92 5.6705C21.9406 4.66399 22.6608 3.39321 23 2.0005Z"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
            </svg>
          </a>
          <a className="footer-social-link">
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <g opacity="0.5">
                <rect
                  x="1"
                  y="1"
                  width="20"
                  height="20"
                  rx="5"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M14.9998 10.3705C15.2529 12.0775 14.3828 13.7543 12.8414 14.5302C11.3 15.306 9.43486 15.0059 8.21465 13.7856C6.99444 12.5654 6.69431 10.7003 7.47014 9.15886C8.24597 7.61746 9.92284 6.74736 11.6298 7.00048C13.3728 7.25894 14.7414 8.62751 14.9998 10.3705Z"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};
