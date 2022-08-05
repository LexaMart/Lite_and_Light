import React, { useState, useEffect } from "react";
import { products } from "../../data/products";
import "./index.css";

export const Search = ({ ...props }) => {
  const [foundProducts, setFoundProducts] = useState([]);
  const [value, setValue] = useState(props.value);

  const search = (inputValue) => {
    if (inputValue.target.value) {
      setFoundProducts(
        products.filter((el) => {
          const valueToSearch = `${el.subtitle} ${el.name} `;
          return valueToSearch
            .toLowerCase()
            .includes(inputValue.target.value?.toLowerCase());
        })
      );
    } else {
      setFoundProducts([]);
    }
  };
  useEffect(() => {}, []);
  return (
    <div className="result">
      <input
        onChange={search}
        className="header-search-input"
        type="text"
        placeholder="Поиск"
      ></input>
      <button type="submit" className="header-search-button">
        {" "}
      </button>
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
