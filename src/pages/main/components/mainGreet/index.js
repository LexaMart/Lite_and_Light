import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import AOS from "aos";
import { mainGreetSlider } from "../../../../data/mainGreetSlider";
import "./index.css";

export const MainGreet = ({ ...props }) => {
  const [activeBtnId, setActiveBtnId] = useState(1);
  const [isRuning, setIsRuning] = useState(false);
  AOS.init();
  /*useEffect(() => {
    const interval = setInterval(() => {
      setIsRuning(true);
      if (activeBtnId < 5) {
        setActiveBtnId(activeBtnId + 1);
      } else {
        setActiveBtnId(1);
      }
    }, 2000);
    return () =>
      function () {
        clearInterval(interval);
        setIsRuning(false);
      };
  }, []);*/
  return (
    <div className="main-greet">
      <div className="main-greet-bg-box">
        <div className="main-greet-title-box">
          <p className="main-greet-title">Больше,</p>
          <p className="main-greet-title">чем просто</p>
          <p className="main-greet-title">свет</p>
        </div>
        <p className="main-greet-text">От идеи до воплощения</p>
        <NavLink to="/catalog" className="main-greet-bg-link">
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
              fill="#000"
            />
          </svg>
        </NavLink>
      </div>
      <div className="main-greet-content">
        <div className="main-greet-content-ellipse"></div>
        {mainGreetSlider.map((item, idx) => (
          <div key={item.num}>
            <img
              alt="img"
              src={item.img}
              className={
                activeBtnId === item.num
                  ? "main-greet-img main-greet-img-active"
                  : "main-greet-img"
              }
            />
            <p
              className={
                activeBtnId === item.num
                  ? "main-greet-content-btn-title main-greet-content-btn-title-active"
                  : "main-greet-content-btn-title"
              }
            >
              {item.title}
            </p>
          </div>
        ))}
        <div className="main-greet-content-list">
          {mainGreetSlider.map((item, idx) => (
            <button
              key={item.num}
              onClick={() => setActiveBtnId(item.num)}
              className={
                activeBtnId === item.num
                  ? "main-greet-content-list-item main-greet-content-list-item-active"
                  : "main-greet-content-list-item"
              }
            >
              <p>{item.num}</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
