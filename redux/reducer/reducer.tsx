import { combineReducers } from "@reduxjs/toolkit";
import ProductSlice from "../slices/product/productSlice";
import CartSlice from "../slices/cart/cartSlice";

const rootReducer = combineReducers({
  products: ProductSlice,
  cart: CartSlice,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
