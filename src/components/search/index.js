import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { products } from "../../data/products";
import "./index.css";

export const Search = ({ ...props }) => {
  const [foundProducts, setFoundProducts] = useState([]);

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
    <div className="search">
      <input
        onChange={search}
        className="search-input"
        type="text"
        placeholder="Поиск"
      ></input>
      <button type="submit" className="header-search-button">
        {" "}
      </button>
      <div
        style={
          foundProducts.length ? { display: "initial" } : { display: "none" }
        }
        className="result"
      >
        {foundProducts.map((product, idx) => (
          <NavLink
            to={`catalog/${product.id}`}
            className="result-item"
            key={idx}
          >
            <div className="result-item-image">
              <img
                loading="lazy"
                decoding="async"
                src={product.cardImage}
                alt="search_icon"
                className="result-item-img"
              />
            </div>
            <div className="result-item-name">
              <span className="result-item-name-title">{product.name}</span>
              {product.subName && (
                <span className="result-item-name-subtitle">
                  {product.subName}
                </span>
              )}
              {product.subtitle && (
                <span className="result-item-name-type">
                  {product.subtitle}
                </span>
              )}
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
};
