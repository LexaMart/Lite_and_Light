import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
//import { exampleAction } from "../../store/reducers";
import { CatalogItem } from "../../components/catalogItem";
import { products } from "../../data/products";
//import "./index.css";

export const Favorites = ({ ...props }) => {
  const [likedProducts, setlikedProducts] = useState([]);
  //const reduxValue = useSelector((store) => store.exampleReducer.exampleField);
  const dispatch = useDispatch();

  useEffect(() => {
    const likedProducts = [];
    let likedItemsId = localStorage.likedItems;
    likedItemsId = likedItemsId.toString();
    likedItemsId = likedItemsId.split(",");
    products.map((product, idx) => {
      let idxLikedItemId = likedItemsId.indexOf(product.id);
      if (likedItemsId[idxLikedItemId] === product.id) {
        likedProducts.push(product);
      }
    });
    setlikedProducts(likedProducts);
    console.log(likedProducts);
    //console.log(likedProducts[0].title);
    //console.log(reduxValue);
  }, []);
  return (
    <div className="favorites">
      <p className="favorites-title">Каталог</p>
      <div className="catalog-table">
        {likedProducts.map((product, idx) => (
          <div key={idx}>
            <CatalogItem
              title={product.title}
              subtitle={product.subtitle}
              image={product.image}
              price={product.price}
              id={product.id}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
