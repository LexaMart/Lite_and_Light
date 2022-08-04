import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import img1 from "../../../../assets/aboutUsImages/buzzyImg1.png";
import img2 from "../../../../assets/aboutUsImages/buzzyImg2.png";
import "./index.css";

export const Buzzy = ({ ...props }) => {
  return (
    <div className="wraper">
      <div className="buzzy">
        <div className="buzzy-content">
          <img src={img1} className="buzzy-img1"></img>
          <p className="buzzy-text buzzy-text1">
            Разместив{" "}
            <span className="buzzy-text buzzy-text-dark">
              BuzziShade Square
            </span>{" "}
            над источником шума (например, гостиной или рабочими станциями), он
            будет поглощать большое количество звука, что поможет создать хорошо
            сбалансированное рабочее пространство.
          </p>
        </div>
        <p className="buzzy-text buzzy-text2">
          <span className="buzzy-text buzzy-text-dark">BuzziShade Square</span>{" "}
          снижает уровень внешнего шума до минимума. Благодаря большой площади
          поверхности подвесного светильника и закругленным углам решение может
          эффективно улавливать звуковые волны, когда они движутся вверх, и,
          таким образом, предотвращать их отражение по комнате.
        </p>
        <img src={img2} className="buzzy-img2"></img>
      </div>
    </div>
  );
};
