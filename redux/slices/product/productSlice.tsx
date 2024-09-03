import { fetchProducts } from "@/redux/thunks/productThunk/productThunk";
import { ProductType } from "@/redux/types";

import { createSlice } from "@reduxjs/toolkit";

interface ProductsState {
  products: ProductType[] | undefined;
  loading: boolean;
  error: string | null;
}

const initialState: ProductsState = {
  products: [],
  loading: true,
  error: null,
};

const getAllProductssSlice = createSlice({
  name: "getAllProducts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error as string;
      });
  },
});

export default getAllProductssSlice.reducer;
export { fetchProducts };
