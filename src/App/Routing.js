import React from "react";
import { Routes, Route } from "react-router-dom";
import { Main } from "../pages/main";

export const Routing = ({ ...props }) => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="*" element={<Main />} />
    </Routes>
  );
};
