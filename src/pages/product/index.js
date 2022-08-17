import React, { useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import { ProductHead } from "./components/productHead";
import { ProductInfo } from "./components/productInfo";
import { Template1 } from "./components/templetes/template1";
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
                pageImage={product.pageImage}
              />
              {product.template === 1 && (
                <Template1
                  pageImage={product.pageImage}
                  pageContentRight={product.pageContentRight}
                  pageContentLeft={product.pageContentLeft}
                />
              )}
            </div>
          )
      )}
    </>
  );
};
