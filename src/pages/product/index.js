import React, { useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import { ProductHead } from "./components/productHead";
import { ProductInfo } from "./components/productInfo";
import { products } from "../../data/products";
import "./index.css";

export const Product = ({ ...props }) => {
  const { id } = useParams();
  return (
    <>
      {products.map(
        (product, idx) =>
          id === product.id && (
            <div className="product" key={product.id}>
              <ProductHead
                name={product.name}
                subName={product.subName}
                price={product.price}
                cardImage={product.cardImage}
              />
              <ProductInfo
                infoText={product.infoText}
                pageImages={product.pageImages}
              />
            </div>
          )
      )}
    </>
  );
};
