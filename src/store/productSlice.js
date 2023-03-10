import { createSlice } from "@reduxjs/toolkit";
let productDetailsSlice = createSlice({
  name: "productDetails",
  initialState: {
    allProduct: [],
    related: [],
    oneProduct: [],
  },
  reducers: {
    allProducts: (state, action) => {
      state.allProduct = [...action.payload];
    },
    selectOneProduct: (state, action) => {
      state.oneProduct = action.payload;
    },
    relatedProducts: (state, action) => {
      state.related = [...action.payload];
    },
  },
});
export let productDetailsActions = productDetailsSlice.actions;
export let productDetailsReducer = productDetailsSlice.reducer;
