import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/slice";
import storeDataReducer from "./storeData/slice";
/**
 * @function configureStore
 * This creates a Redux store, and also automatically configure the Redux DevTools
 * extension so that you can inspect the store while developing.
 */
export const store = configureStore({
  reducer: {
    user: userReducer,
    storeData: storeDataReducer,
  },
});

/**
 * Get store
 */
export const getStore = () => store;
