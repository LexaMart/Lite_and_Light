import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import AOS from "aos";
import typesImg1 from "../../../../assets/images/main-types-img1.png";
import typesImg2 from "../../../../assets/images/main-types-img2.png";
import "./index.css";
import { setFormVisability } from "../../../../store/reducers";

export const MainTypes = ({ ...props }) => {
  const dispatch = useDispatch();

  const openForm = () => {
    dispatch(setFormVisability(true));
  };

  return (
    <div className="main-types">
      <p className="main-types-subtitle"> Типы дизайнерского света </p>
      <ul className="main-types-list">
        <li className="main-types-item">
          <img
            src={typesImg1}
            alt="img"
            className="main-types-img"
            data-aos="fade-right"
            data-aos-offset="180"
            data-aos-duration="1500"
            data-aos-anchor-placement="top-bottom"
          ></img>
          <div
            className="main-types-box main-types-box1"
            data-aos="fade-right"
            //data-aos-offset="100"
            data-aos-delay="150"
            data-aos-duration="1500"
            //data-aos-anchor-placement="top-bottom"
          >
            <p className="main-types-title">Классика</p>
            <p className="main-types-text">Готовые</p>
            <p className="main-types-text">Решения</p>
            <NavLink to="/catalog" className="main-types-link">
              <p>Перейти в каталог</p>
              <svg
                width="77"
                height="18"
                viewBox="0 0 116 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M106.494 0.348021L115.423 7.9098C115.971 8.37383 115.971 9.12617 115.423 9.5902L106.494 17.152C105.946 17.616 105.057 17.616 104.509 17.152C103.962 16.6879 103.962 15.9356 104.509 15.4716L111.043 9.93822L1.40308 10.5945C0.628182 10.5945 0 10.0625 0 9.40624C0 8.75 0.628182 8.21802 1.40308 8.21802L111.043 7.56178L104.509 2.02842C103.962 1.56439 103.962 0.81205 104.509 0.348021C105.057 -0.116007 105.946 -0.116007 106.494 0.348021Z"
                  fill="#504B48"
                />
              </svg>
            </NavLink>
          </div>
        </li>
        <li className="main-types-item main-types-item2">
          <div
            className="main-types-box main-types-box2"
            data-aos="fade-right"
            data-aos-offset="100"
            data-aos-delay="150"
            data-aos-duration="1500"
            //data-aos-anchor-placement="top-bottom"
          >
            <p className="main-types-title main-types-title2">Кастом</p>
            <p className="main-types-text main-types-text2">Индивидуальные</p>
            <p className="main-types-text main-types-text2">решения</p>
            <div
              onClick={openForm}
              className="main-types-link main-types-link2"
            >
              <p>Оставить заявку</p>
              <svg
                width="77"
                height="18"
                viewBox="0 0 116 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M106.494 0.348021L115.423 7.9098C115.971 8.37383 115.971 9.12617 115.423 9.5902L106.494 17.152C105.946 17.616 105.057 17.616 104.509 17.152C103.962 16.6879 103.962 15.9356 104.509 15.4716L111.043 9.93822L1.40308 10.5945C0.628182 10.5945 0 10.0625 0 9.40624C0 8.75 0.628182 8.21802 1.40308 8.21802L111.043 7.56178L104.509 2.02842C103.962 1.56439 103.962 0.81205 104.509 0.348021C105.057 -0.116007 105.946 -0.116007 106.494 0.348021Z"
                  fill="#504B48"
                />
              </svg>
            </div>
          </div>
          <img
            src={typesImg2}
            alt="img"
            className="main-types-img"
            data-aos="fade-right"
            data-aos-offset="180"
            data-aos-duration="1500"
            data-aos-anchor-placement="top-bottom"
          ></img>
        </li>
      </ul>
    </div>
  );
};
