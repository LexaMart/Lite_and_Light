import { createReducer, createAction } from "@reduxjs/toolkit";

const initialState = {
  /*likedItems: JSON.parse(localStorage.likedItems).length
    ? JSON.parse(localStorage.likedItems)
    : [],*/
  likedItems: [],
};

export const addItemAction = createAction("AddItem");

export const likedItemsReducer = createReducer(initialState, (builder) => {
  builder.addCase(addItemAction, (state, action) => {
    state.exampleField = !!action.payload || false;
  });
});

// export default exampleReducer
