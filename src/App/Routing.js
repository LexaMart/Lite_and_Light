import React from "react";
import { Routes, Route } from "react-router-dom";
import { Main } from "../pages/main";
import { Catalog } from "../pages/catalog";
import { Product } from "../pages/product";
import { Favorites } from "../pages/favorites";
import { AboutUs } from "../pages/aboutUs";
import { Gallery } from "../pages/gallery";

export const Routing = ({ ...props }) => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="*" element={<Main />} />
      <Route path="/catalog" element={<Catalog />}></Route>
      <Route path="/catalog/:id" element={<Product />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/galery" element={<Gallery />} />
    </Routes>
  );
};
