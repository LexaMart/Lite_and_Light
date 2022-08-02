import React from "react";
import "./index.css";

export const CatalogItem = ({ ...props }) => {
  return (
    <div className="catalog-table-item">
      <img className="catalog-table-item-img" src={props.image}></img>
      <div className="catalog-table-item-box">
        <div className="catalog-table-item-desk">
          <p className="catalog-table-item-desk-title">{props.title}</p>
          <p className="catalog-table-item-desk-subtitle">{props.subtitle}</p>
        </div>
        <div className="catalog-table-item-info">
          <div className="catalog-table-item-info-price">{props.price}</div>
          <svg></svg>
        </div>
      </div>
    </div>
  );
};
