import { createReducer, createAction } from "@reduxjs/toolkit";

const initialState = {
  likedItems: localStorage.likedItems
    ? JSON.parse(localStorage.likedItems)
    : [],
};

export const addItemAction = createAction("AddItem");

export const likedItemsReducer = createReducer(initialState, (builder) => {
  builder.addCase(addItemAction, (state, action) => {
    if (state.likedItems.includes(action.payload)) {
      state.likedItems = state.likedItems.filter((el) => el !== action.payload)
      localStorage.setItem(
        "likedItems",
        JSON.stringify(state.likedItems.filter((el) => el !== action.payload))
      );
    } else {
      state.likedItems.push(action.payload);
      localStorage.setItem("likedItems", JSON.stringify(state.likedItems));
    }
  });
});

// export default exampleReducer
