import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import img1 from "../../../../assets/aboutUsImages/brandsImg1.png";
import "./index.css";

export const Brands = ({ ...props }) => {
  return (
    <div className="wraper">
      <div className="brands">
        <div className="brands-content">
          <p className="brands-content-title">
            <span className="brands-content-title brands-content-title-dark ">
              Бренды
            </span>{" "}
            которые мы изготовливаем
          </p>
          <p className="brands-content-text">
            Свет – фактор, необходимый для полноценной жизни. Мы долгое время
            изучали, как температура, насыщенность и режим освещения влияют на
            биологические ритмы и изменения в организме человека. Правильное
            освещение бережет наше зрение, позволяет меньше утомляться, повышает
            работоспособность, уменьшает риск головной боли и бессонницы.
          </p>
        </div>
        <img src={img1} className="brands-img" />
      </div>
    </div>
  );
};
