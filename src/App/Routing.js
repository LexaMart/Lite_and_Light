import React from "react";
import { Routes, Route } from "react-router-dom";
import { Main } from "../pages/main";
import { Catalog } from "../pages/catalog";
import { Favorites } from "../pages/favorites";
import { AboutUs } from "../pages/aboutUs";

export const Routing = ({ ...props }) => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="*" element={<Main />} />
      <Route path="/catalog" element={<Catalog />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/aboutUs" element={<AboutUs />} />
    </Routes>
  );
};
