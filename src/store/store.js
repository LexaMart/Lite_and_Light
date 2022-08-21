import { configureStore } from "@reduxjs/toolkit";
import { likedItemsReducer, feedBackFormReducer } from "./reducers";

export default configureStore({
  reducer: { likedItemsReducer, feedBackFormReducer },
  devTools: process.env.REACT_APP_DEV_TOOLS === "true",
});
