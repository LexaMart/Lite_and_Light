import React from "react";
import { useDispatch } from "react-redux";
import { setFormVisability } from "../../../../store/reducers";
import "./index.css";

export const ProductHead = ({ ...props }) => {
  const dispatch = useDispatch();
  const openPopup = () => {
    dispatch(setFormVisability(true));
  };
  return (
    <div className="product-head">
      <img loading="lazy" decoding="async"src={props.cardImage} alt="img" className="product-head-img" />
      <div className="product-head-order">
        <p className="product-head-order-name">{props.name}</p>
        <p className="product-head-order-name product-head-order-name-lite">
          {props.subName}
        </p>
        <p className="product-head-order-price">Цена</p>
        <p className="product-head-order-price-value">
          {props.price}{" "}
          <span className="product-head-order-price-value  product-head-order-price-value-dark">
            {" "}
            ₽{" "}
          </span>
        </p>
        <div onClick={openPopup} className="product-head-order-link">
          Заказать
        </div>
      </div>
    </div>
  );
};
