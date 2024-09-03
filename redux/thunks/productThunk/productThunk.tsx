import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk(
  "product/getAllProducts",
  async () => {
    const response = await axios.get(`http://localhost:8000/products`);
    console.log(response.data);
    return response.data;
  }
);
