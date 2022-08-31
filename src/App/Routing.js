import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Main } from "../pages/main";
import { Catalog } from "../pages/catalog";
import { Product } from "../pages/product";
import { Favorites } from "../pages/favorites";
import { AboutUs } from "../pages/aboutUs";
import { Gallery } from "../pages/gallery";
import { GalleryItemPage } from "../pages/galleryItemPage";
import { Layout } from "../components/layout";

export const Routing = ({ ...props }) => {
  const location = useLocation();
  return (
    <Routes location={location}>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Main />} />
        <Route path="*" element={<Main />} />
        <Route path="/catalog" element={<Catalog />}></Route>
        <Route path="/catalog/:id" element={<Product />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/galery" element={<Gallery />}></Route>
        <Route path="/galery/:id" element={<GalleryItemPage />} />
      </Route>
    </Routes>
  );
};
