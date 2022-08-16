import React from "react";
import "./index.css";

export const ProductHead = ({ ...props }) => {
  return (
    <div className="product-head">
      <img src={props.cardImage} alt="img" className="product-head-img" />
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
        <a className="product-head-order-link">Заказать</a>
      </div>
    </div>
  );
};
