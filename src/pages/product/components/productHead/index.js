import React from "react";
import { useDispatch } from "react-redux";
import { setFormVisability } from "../../../../store/reducers";
import "./index.css";

export const ProductHead = ({ ...props }) => {
  const dispatch = useDispatch();
  const openPopup = () => {
    dispatch(setFormVisability(true));
  };
  const getStyle = (id) => {
    if (id === "0020" || id === "0009") {
      return { width: "33%", marginLeft: "10%", marginRight: "20%" };
    } else if (id === "0003") {
      return { marginLeft: "-5%", marginRight: "20%" };
    } else if (id === "0004") {
      return {
        width: "35%",
        marginRight: "12%",
        marginLeft: "9%",
        marginBottom: "10%",
      };
    } else if (id === "0013") {
      return { marginLeft: "-11%", marginRight: "15%", width: "55%" };
    } else if (id === "0017") {
      return { marginLeft: "-5%", marginRight: "15%", width: "47%" };
    } else if (id === "0024") {
      return { marginRight: "6%" };
    } else if (id === "0026") {
      return { width: "28%", marginLeft: "10%", marginRight: "20%" };
    } else if (id === "0027") {
      return { marginRight: "7%" };
    } else {
      return { width: "45%", marginLeft: "7%", marginRight: "8%" };
    }
  };
  return (
    <div className="product-head">
      <img
        style={getStyle(props.id)}
        loading="lazy"
        decoding="async"
        src={props.cardImage}
        alt="img"
        className="product-head-img"
      />
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
