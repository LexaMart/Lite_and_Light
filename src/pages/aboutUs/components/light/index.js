import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import img1 from "../../../../assets/aboutUsImages/lightImg1.png";
import img2 from "../../../../assets/aboutUsImages/lightImg2.png";
import "./index.css";

export const Light = ({ ...props }) => {
  return (
    <div className="wraper">
      <div className="light">
        <div className="light-images">
          <img src={img1} className="light-images-img1" />
          <img src={img2} className="light-images-img2" />
        </div>
        <div className="light-box">
          <p className="light-box-text">
            <span className="light-box-text light-box-text-dark">Свет</span> –
            фактор, необходимый для полноценной жизни. Мы долгое время изучали,
            как температура, насыщенность и режим освещения влияют на
            биологические ритмы и изменения в организме человека. Правильное
            освещение бережет наше зрение, позволяет меньше утомляться, повышает
            работоспособность, уменьшает риск головной боли и бессонницы.
          </p>
          <p className="light-box-text">
            Заботясь о своих потребителях, мы предлагаем индивидуальные системы
            освещения, которые не только решают технические вопросы света и
            удовлетворяют эстетические.
          </p>
        </div>
      </div>
    </div>
  );
};
