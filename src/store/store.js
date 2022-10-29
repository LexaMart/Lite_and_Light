import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import feedBackFormSaga from "./feedBackFormSaga";
import { likedItemsReducer, feedBackFormReducer, settingsReducer } from "./reducers";

const saga = createSagaMiddleware()

export default configureStore({
  reducer: { likedItemsReducer, feedBackFormReducer, settingsReducer },
  devTools: process.env.REACT_APP_DEV_TOOLS === "true",
  middleware: [saga],
});

saga.run(feedBackFormSaga);
