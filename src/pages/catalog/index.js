import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { exampleAction } from "../../store/reducers";
import { CatalogItem } from "../../components/catalogItem";
import { products } from "../../data/products";
import "./index.css";

export const Catalog = ({ ...props }) => {
  const reduxValue = useSelector((store) => store.exampleReducer.exampleField);
  const dispatch = useDispatch();

  const dispatchEventClick = () => {
    dispatch(exampleAction(!reduxValue));
  };
  useEffect(() => {
    console.log(reduxValue);
  }, [reduxValue]);
  return (
    <div className="catalog">
      <p className="catalog-title">Каталог</p>
      <div className="catalog-table">
        {products.map((product, idx) => (
          <div key={idx}>
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
    </div>
  );
};
