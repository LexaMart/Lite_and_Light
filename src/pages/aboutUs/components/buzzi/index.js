import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import img1 from "../../../../assets/aboutUsImages/buzziImg1.png";
import img2 from "../../../../assets/aboutUsImages/buzziImg2.png";
import "./index.css";

export const Buzzi = ({ ...props }) => {
  return (
    <div className="wraper">
      <div className="buzzi">
        <div className="buzzi-content">
          <img src={img1} className="buzzi-img1"></img>
          <p className="buzzi-text buzzi-text1">
            Разместив{" "}
            <span className="buzzi-text buzzi-text-dark">
              BuzziShade Square
            </span>{" "}
            над источником шума (например, гостиной или рабочими станциями), он
            будет поглощать большое количество звука, что поможет создать хорошо
            сбалансированное рабочее пространство.
          </p>
        </div>
        <p className="buzzi-text buzzi-text2">
          <span className="buzzi-text buzzi-text-dark">BuzziShade Square</span>{" "}
          снижает уровень внешнего шума до минимума. Благодаря большой площади
          поверхности подвесного светильника и закругленным углам решение может
          эффективно улавливать звуковые волны, когда они движутся вверх, и,
          таким образом, предотвращать их отражение по комнате.
        </p>
        <img src={img2} className="buzzi-img2"></img>
      </div>
    </div>
  );
};
