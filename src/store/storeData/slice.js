import { createSlice } from "@reduxjs/toolkit";
const storeDataSlice = createSlice({
  name: "storeData",
  initialState: {
    products: [],
    categories: [],
  },
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    setCategories: (state, action) => {
      state.categories = action.payload;
    },
  },
});

export const { setProducts, setCategories } = storeDataSlice.actions;

export default storeDataSlice.reducer;
