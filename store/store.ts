import { configureStore } from "@reduxjs/toolkit";
import paymentReducer from "@/store/reducers/payment";

export const store = configureStore({
  reducer: {
    payment: paymentReducer,
  },
});
