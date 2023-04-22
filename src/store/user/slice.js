import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  name: "",
  cart: [],
  orders: [],
  complaints: [],
  userId: "",
  authToken: "",
  isAdmin: false,
  isSeller: false,
  pendings: {
    inventory: {
      categories: [],
      products: [],
    },
    complaints: [],
  },
  inventory: {
    categories: [],
    products: [],
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      const data = action.payload;
      state.email = data.email;
      state.name = data.name;
      state.cart = data.cart;
      state.orders = data.orders;
      state.complaints = data.complaints;
      state.userId = data.userId;
      state.authToken = data.authToken;
      const isSeller = data.isSeller;
      if (isSeller) {
        state.isSeller = true;
      }
      state.isAdmin = data.isAdmin;
      state.inventory = data.inventory;
    },

    // Cart reducers
    addToCart: (state, action) => {
      const data = action.payload;
      const item = state.cart.find((cartItem) => cartItem.id === data?.id);
      // item already exists in cart

      console.log("cart", [...state.cart], item);
      if (item) {
        item.quantity++;

        return;
      }
      // if item is not in the cart yet
      const newCartItem = {
        id: data.id,
        image: data.image,
        name: data.name,
        description: data.description,
        price: data.price,
        quantity: 1,
      };
      state.cart.push(newCartItem);
    },
    removeFromCart: (state, action) => {
      const data = action.payload;

      state.cart =
        state.cart.filter((cartItem) => cartItem.id !== data?.id) || [];
    },
    updateCartItem: (state, action) => {
      const data = action.payload;
      const type = data?.increment ? "increment" : "decrement";
      const item =
        state.cart.find((cartItem) => cartItem.id === data?.id) || {};
      // update only if item is in the cart
      if (item) {
        switch (type) {
          case "increment":
            item.quantity++;
            break;
          case "decrement":
            if (item.quantity >= 2) {
              item.quantity--;
            }
            break;
        }
      }
    },

    updateCart: (state, action) => {
      state.cart = action.payload;
    },
  },
});

export const { login, updateCart, addToCart, removeFromCart, updateCartItem } =
  userSlice.actions;

export default userSlice.reducer;
