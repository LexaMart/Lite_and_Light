import { configureStore } from "@reduxjs/toolkit";
import { likedItemsReducer } from "./reducers";

export default configureStore({
  reducer: { likedItemsReducer },
  devTools: process.env.REACT_APP_DEV_TOOLS === "true",
});
