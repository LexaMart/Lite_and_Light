import React from "react";
import { useParams } from "react-router-dom";
import { ProductHead } from "./components/productHead";
import { ProductInfo } from "./components/productInfo";
import { Template1 } from "./components/templetes/template1";
import { Template2 } from "./components/templetes/template2";
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
                id={product.id}
                name={product.name}
                subName={product.subName}
                price={product.price}
                cardImage={product.cardImage}
              />
              {product.template === 0 && (
                <>
                  <Template1
                    pageImage={product.pageImage}
                    pageContentTop={product.pageContentTop}
                    pageContentRight={product.pageContentRight}
                    pageContentLeft={product.pageContentLeft}
                    pageContentBottom={product.pageContentBottom}
                  />
                </>
              )}
              {product.template === 1 && (
                <>
                  <ProductInfo
                    id={product.id}
                    infoText={product.infoText}
                    pageImage={product.pageImage}
                  />
                  <Template1
                    pageImage={product.pageImage}
                    pageContentTop={product.pageContentTop}
                    pageContentRight={product.pageContentRight}
                    pageContentLeft={product.pageContentLeft}
                    pageContentBottom={product.pageContentBottom}
                  />
                </>
              )}
              {product.template === 2 && (
                <>
                  <ProductInfo
                    infoText={product.infoText}
                    pageImage={product.pageImage}
                  />
                  <Template1
                    pageImage={product.pageImage}
                    pageContentTop={product.pageContentTop}
                    pageContentRight={product.pageContentRight}
                    pageContentLeft={product.pageContentLeft}
                    pageContentBottom={product.pageContentBottom}
                  />
                  <Template2
                    temp2Top={product.temp2Top}
                    temp2Bottom={product.temp2Bottom}
                  />
                </>
              )}
              {product.template === 3 && (
                <>
                  <Template1
                    pageImage={product.pageImage}
                    pageContentTop={product.pageContentTop}
                    pageContentRight={product.pageContentRight}
                    pageContentLeft={product.pageContentLeft}
                    pageContentBottom={product.pageContentBottom}
                  />
                  <Template2
                    temp2Top={product.temp2Top}
                    temp2Bottom={product.temp2Bottom}
                  />
                </>
              )}
            </div>
          )
      )}
    </>
  );
};
