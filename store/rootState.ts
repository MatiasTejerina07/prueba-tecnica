import { combineReducers } from "@reduxjs/toolkit";
import paymentReducer from "@/store/reducers/payment";

const rootReducer = combineReducers({
  payment: paymentReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
