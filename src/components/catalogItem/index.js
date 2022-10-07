import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { addItemAction } from "../../store/reducers";
import "./index.css";

export const CatalogItem = ({ ...props }) => {
  const { likedItems } = useSelector((store) => store.likedItemsReducer);
  const width = document.body.clientWidth;
  const dispatch = useDispatch();

  function pushToLocalStorage() {
    dispatch(addItemAction(props.id));
  }
  useEffect(() => {}, []);
  return (
    <div
      className="catalog-table-item"
      data-aos="fade-up"
      data-aos-offset={
        width >= 1300
          ? 10
          : width >= 900
          ? 5
          : width >= 800
          ? 270
          : width >= 700
          ? -500
          : width >= 500
          ? 260
          : width >= 400 && -400
      }
      data-aos-duration="1000"
      data-aos-delay="100"
    >
      <NavLink to={`/catalog/${props.id}`}>
        <img className="catalog-table-item-img" src={props.image}></img>
      </NavLink>
      <div className="catalog-table-item-box">
        <div className="catalog-table-item-desk">
          <p className="catalog-table-item-desk-title">{props.title}</p>
          <p className="catalog-table-item-desk-subtitle">{props.subtitle}</p>
        </div>
        <div className="catalog-table-item-info">
          <button
            onClick={() => pushToLocalStorage()}
            className="catalog-table-item-info-btn"
          >
            <svg
              className={
                likedItems.includes(props.id)
                  ? " catalog-table-item-info-btn-like btn-like-red"
                  : "catalog-table-item-info-btn-like btn-like-black"
              }
              viewBox="0 0 32 32"
            >
              <path d="M16,28.72a3,3,0,0,1-2.13-.88L3.57,17.54a8.72,8.72,0,0,1-2.52-6.25,8.06,8.06,0,0,1,8.14-8A8.06,8.06,0,0,1,15,5.68l1,1,.82-.82h0a8.39,8.39,0,0,1,11-.89,8.25,8.25,0,0,1,.81,12.36L18.13,27.84A3,3,0,0,1,16,28.72ZM9.15,5.28A6.12,6.12,0,0,0,4.89,7a6,6,0,0,0-1.84,4.33A6.72,6.72,0,0,0,5,16.13l10.3,10.3a1,1,0,0,0,1.42,0L27.23,15.91A6.25,6.25,0,0,0,29,11.11a6.18,6.18,0,0,0-2.43-4.55,6.37,6.37,0,0,0-8.37.71L16.71,8.8a1,1,0,0,1-1.42,0l-1.7-1.7a6.28,6.28,0,0,0-4.4-1.82Z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
