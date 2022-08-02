import React from "react";
import { CatalogItem } from "./catalogItem";
import { products } from "../../data/products";
import "./index.css";

export const CatalogTable = ({ ...props }) => {
  return (
    <div className="catalog-table">
      {products.map((product, idx) => (
        <div key={idx} className="catalog-item-wrapper">
          <CatalogItem
            title={product.title}
            subtitle={product.subtitle}
            image={product.image}
            price={product.price}
            linkValue={product.linkValue}
          />
        </div>
      ))}
    </div>
  );
};
