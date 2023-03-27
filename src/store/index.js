import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./category/categorySlice";
import productReducer from "./product/productSlice.js";

export const store = configureStore({
  reducer: {
    category: categoryReducer,
    product: productReducer,
  }
});