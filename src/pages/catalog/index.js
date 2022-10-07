import React, { useEffect, useState } from "react";
import { CatalogItem } from "../../components/catalogItem";
import { products } from "../../data/products";
import "./index.css";

export const Catalog = ({ ...props }) => {
  const [likedItems, setLikedItems] = useState([]);
  useEffect(() => {
    setLikedItems(localStorage.likedItems);
  }, []);
  return (
    <div className="catalog">
      <p className="catalog-title">Каталог</p>
      <div
        data-aos="fade-up"
        data-aos-delay="500"
        data-aos-duration="2000"
        className="catalog-table"
      >
        {products.map((product, idx) => (
          <CatalogItem
            key={idx}
            title={product.title}
            subtitle={product.subtitle}
            image={product.image}
            price={product.price}
            id={product.id}
            likedItems={likedItems}
          />
        ))}
      </div>
    </div>
  );
};
