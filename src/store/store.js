import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import feedBackFormSaga from "./feedBackFormSaga";
import { likedItemsReducer, feedBackFormReducer } from "./reducers";

const saga = createSagaMiddleware()

export default configureStore({
  reducer: { likedItemsReducer, feedBackFormReducer },
  devTools: process.env.REACT_APP_DEV_TOOLS === "true",
  middleware: [saga],
});

saga.run(feedBackFormSaga);
