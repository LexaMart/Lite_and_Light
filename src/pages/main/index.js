import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { exampleAction } from "../../store/reducers";
import { MainSlider } from "../../components/mainSlider";
import AOS from "aos";
import mainGreetImg from "../../assets/images/main-greet-img.png";
import link from "../../assets/images/link.png";
import algorithm from "../../assets/images/algorithm.png";
import shadePendant from "../../assets/images/shade-pendant.png";
import shadeSquare from "../../assets/images/shade-square.png";
import shade from "../../assets/images/shade.png";
import trom from "../../assets/images/trom.png";
import typesImg1 from "../../assets/images/main-types-img1.png";
import typesImg2 from "../../assets/images/main-types-img2.png";
import "./index.css";

export const Main = ({ ...props }) => {
  const reduxValue = useSelector((store) => store.exampleReducer.exampleField);
  const dispatch = useDispatch();

  const dispatchEventClick = () => {
    dispatch(exampleAction(!reduxValue));
  };
  AOS.init();
  useEffect(() => {
    console.log(reduxValue);
  }, [reduxValue]);
  return (
    <div onClick={() => dispatchEventClick()} className="wraper">
      <main className="main">
        <div className="main-greet">
          <div className="main-greet-bg-box">
            <div className="main-greet-bg1"></div>
            <div className="main-greet-bg2">
              <div className="main-greet-bg-div"></div>
              <a className="main-greet-bg-link">
                <p className="main-greet-bg-text">Перейти в каталог</p>
                <svg
                  width="116"
                  height="18"
                  viewBox="0 0 116 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M106.494 0.348021L115.423 7.9098C115.971 8.37383 115.971 9.12617 115.423 9.5902L106.494 17.152C105.946 17.616 105.057 17.616 104.509 17.152C103.962 16.6879 103.962 15.9356 104.509 15.4716L111.043 9.93822L1.40308 10.5945C0.628182 10.5945 0 10.0625 0 9.40624C0 8.75 0.628182 8.21802 1.40308 8.21802L111.043 7.56178L104.509 2.02842C103.962 1.56439 103.962 0.81205 104.509 0.348021C105.057 -0.116007 105.946 -0.116007 106.494 0.348021Z"
                    fill="white"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className="main-greet-content">
            <img src={mainGreetImg} alt="img" className="main-greet-img"></img>
            <div className="main-greet-title-box">
              <p className="main-greet-text">От идеи,</p>
              <p className="main-greet-text">до воплощения</p>
              <p className="main-greet-title">Больше,</p>
              <p className="main-greet-title">чем просто свет</p>
            </div>
          </div>
        </div>
        <div className="main-coll">
          <div
            className="main-coll-links"
            data-aos="fade-up"
            data-aos-offset="100"
            data-aos-duration="1500"
            data-aos-anchor-placement="top-bottom"
          >
            <p className="main-coll-links-title">Избранные</p>
            <p className="main-coll-links-title">Коллекции</p>
          </div>
          <div className="main-coll-content">
            <div className="main-coll-content1">
              <div
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
              </div>
              <div
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
              </div>
              <div
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
              </div>
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
              <div
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
              </div>
              <div
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
              </div>
              <div
                className="main-coll-content-box main-coll-trom"
                data-aos="fade-up"
                data-aos-offset="180"
                data-aos-duration="1500"
                data-aos-anchor-placement="top-bottom"
              >
                <p className="main-coll-content-text main-coll-content-text-trom">
                  Trom
                </p>
                <img
                  src={trom}
                  alt=""
                  className="main-coll-content-img-trom"
                ></img>
              </div>
            </div>
          </div>
        </div>
        <div className="main-types">
          <p className="main-types-subtitle"> Типы дизайнерского света </p>
          <ul className="main-types-list">
            <li className="main-types-item">
              <img
                src={typesImg1}
                alt=""
                className="main-types-img"
                data-aos="fade-right"
                data-aos-offset="180"
                data-aos-duration="1500"
                data-aos-anchor-placement="top-bottom"
              ></img>
              <div
                className="main-types-box1"
                data-aos="fade-right"
                data-aos-offset="350"
                data-aos-delay="150"
                data-aos-duration="1500"
                data-aos-anchor-placement="top-bottom"
              >
                <p className="main-types-title">Классика</p>
                <p className="main-types-text">Готовые</p>
                <p className="main-types-text">Решения</p>
                <a href="#" className="main-types-link">
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
                </a>
              </div>
            </li>
            <li className="main-types-item">
              <div
                className="main-types-box2"
                data-aos="fade-right"
                data-aos-offset="350"
                data-aos-delay="150"
                data-aos-duration="1500"
                data-aos-anchor-placement="top-bottom"
              >
                <p className="main-types-title">Кастом</p>
                <p className="main-types-text">Индивидуальные</p>
                <p className="main-types-text">решения</p>
                <a href="#" className="main-types-link main-types-link2">
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
                </a>
              </div>
              <img
                src={typesImg2}
                alt=""
                className="main-types-img"
                data-aos="fade-right"
                data-aos-offset="180"
                data-aos-duration="1500"
                data-aos-anchor-placement="top-bottom"
              ></img>
            </li>
          </ul>
        </div>
        <div className="main-gallery">
          <p className="main-gallery-title">Наши работы</p>
          <MainSlider></MainSlider>
        </div>
      </main>
    </div>
  );
};
