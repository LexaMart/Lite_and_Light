import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { exampleAction } from "../../store/reducers";
import "./index.css";

export const Main = ({ ...props }) => {
  const reduxValue = useSelector((store) => store.exampleReducer.exampleField);
  const dispatch = useDispatch();

  const dispatchEventClick = () => {
    dispatch(exampleAction(!reduxValue))

  }

  useEffect(() => {
    console.log(reduxValue);
  }, [reduxValue]);
  return <div onClick={() => dispatchEventClick()} className="wraper">
    <main class="main">
      <div class="main-greet">
        <div class="main-greet-bg-box">
          <div class="main-greet-bg1"></div>
          <div class="main-greet-bg2">
            <div class="main-greet-bg-div"></div>
            <a class="main-greet-bg-link">
              <p class="main-greet-bg-text">Перейти в каталог</p>
              <svg width="116" height="18" viewBox="0 0 116 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M106.494 0.348021L115.423 7.9098C115.971 8.37383 115.971 9.12617 115.423 9.5902L106.494 17.152C105.946 17.616 105.057 17.616 104.509 17.152C103.962 16.6879 103.962 15.9356 104.509 15.4716L111.043 9.93822L1.40308 10.5945C0.628182 10.5945 0 10.0625 0 9.40624C0 8.75 0.628182 8.21802 1.40308 8.21802L111.043 7.56178L104.509 2.02842C103.962 1.56439 103.962 0.81205 104.509 0.348021C105.057 -0.116007 105.946 -0.116007 106.494 0.348021Z"
                fill="white" />
              </svg>
            </a>
          </div>
        </div>
      <div class="main-greet-content">
        <img src="#" alt="img" class="main-greet-img"></img>
        <div class="main-greet-title-box">
          <p class="main-greet-text">От идеи, до воплощения</p>
          <p class="main-greet-title">Больше, чем просто свет</p>
        </div>
      </div>
    </div>
    <div class="main-coll">
      <div class="main-coll-links">
        <p class="main-coll-links-subtitle">Избранные</p>
        <p class="main-coll-links-title">Коллекции</p>
        <ul class="main-coll-links-list">
          <li class="main-coll-links-item">
            <button class="main-coll-links-btn">Wireflow</button>
          </li>
          <li class="main-coll-links-item">
            <button class="main-coll-links-btn">Shade</button>
          </li>
          <li class="main-coll-links-item">
            <button class="main-coll-links-btn">Link</button>
          </li>
          <li class="main-coll-links-item">
            <button class="main-coll-links-btn">Algorithm</button>
          </li>
          <li class="main-coll-links-item">
            <button class="main-coll-links-btn">Duo</button>
          </li>
          <li class="main-coll-links-item">
            <button class="main-coll-links-btn">Palma</button>
          </li>
          <li class="main-coll-links-item">
            <button class="main-coll-links-btn">Trom</button>
          </li>
          <li class="main-coll-links-item">
            <button class="main-coll-links-btn">Zepp Light</button>
          </li>
        </ul>
      </div>
      <div class="main-coll-content">
        <div class="main-coll-content1">
          <div class="main-coll-content-box main-coll-pendant">
            <img src="./styles/images/shade-pendant.png" alt="Pendant" class="main-coll-content-img-pendant"></img>
            <p class="main-coll-content-text main-coll-content-text-pendant ">Shade Pendant</p>
          </div>
          <div class="main-coll-content-box main-coll-shade">
            <img src="./styles/images/shade.png" alt="shade" class="main-coll-content-img-shade"></img>
            <p class="main-coll-content-text main-coll-content-text-shade">Shade</p>
          </div>
          <div class="main-coll-content-box main-coll-square">
            <img src="./styles/images/shade-square.png" alt="square" class="main-coll-content-img-square"></img>
            <p class="main-coll-content-text main-coll-content-text-square">Shade square</p>
          </div>
        </div>
        <div class="main-coll-content2">
          <p class="main-coll-content-title">Дизайнерские решения</p>
          <div class="main-coll-content-box main-coll-link">
            <img src="#" alt="link" class="main-coll-content-img-link"></img>
            <p class="main-coll-content-text main-coll-content-text-link">Link</p>
          </div>
          <div class="main-coll-content-box main-coll-algorithm">
            <img src="#" alt="algorithm" class="main-coll-content-img-algorithm"></img>
            <p class="main-coll-content-text main-coll-content-text-algorithm">Algorithm</p>
          </div>
          <div class="main-coll-content-box main-coll-trom">
            <p class="main-coll-content-text main-coll-content-text-trom">Trom</p>
            <img src="#" alt="" class="main-coll-content-img-trom"></img>
          </div>
        </div>
      </div>
    </div>
  </main>
</div>;
};
