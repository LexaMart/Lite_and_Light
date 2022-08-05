import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
//import { exampleAction } from "../../store/reducers";
import { CatalogItem } from "../../components/catalogItem";
import { products } from "../../data/products";
import "./index.css";

export const Catalog = ({ ...props }) => {
  const [likedItems, setLikedItems] = useState([]);
  //const reduxValue = useSelector((store) => store.exampleReducer.exampleField);
  const dispatch = useDispatch();

  useEffect(() => {
    setLikedItems(localStorage.likedItems);
  }, []);
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
              id={product.id}
              likedItems={likedItems}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
