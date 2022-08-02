import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { exampleAction } from "../../store/reducers";
import { CatalogTable } from "../../components/catalogTable";
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
      <CatalogTable />
    </div>
  );
};
