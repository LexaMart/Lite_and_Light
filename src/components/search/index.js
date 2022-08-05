import React, { useState, useEffect } from "react";
import { products } from "../../data/products";
import "./index.css";

export const Search = ({ ...props }) => {
  const [foundProducts, setFoundProducts] = useState([]);
  const [value, setValue] = useState(props.value);
  useEffect(() => {
    if (props.value !== "") {
      setFoundProducts(products.filter((el) => el.name.includes(props.value)));
    } else {
      setFoundProducts([]);
    }
  }, [props.value]);
  return (
    <div className="result">
      {foundProducts.map((product, idx) => (
        <div key={idx}>
          <a className="result-item">
            <img src={product.image} className="result-item-img" />
            <p className="result-item-name">{product.name}</p>
          </a>
        </div>
      ))}
    </div>
  );
};
