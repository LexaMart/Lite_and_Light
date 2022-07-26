import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux/es/exports";
import { CatalogItem } from "../../components/catalogItem";
import { products } from "../../data/products";
import "./index.css";

export const Favorites = ({ ...props }) => {
  const [likedProducts, setlikedProducts] = useState([]);
  const { likedItems } = useSelector((store) => store.likedItemsReducer);

  useEffect(() => {
    setlikedProducts(products.filter((el) => likedItems.includes(el.id)));
  }, [likedItems]);
  return (
    <div className="wraper">
      <div className="favorites">
        <p className="favorites-title">Избранные</p>
        <div className="catalog-table">
          {likedProducts.map((product, idx) => (
            <CatalogItem
              key={idx}
              title={product.title}
              subtitle={product.subtitle}
              image={product.image}
              price={product.price}
              id={product.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
