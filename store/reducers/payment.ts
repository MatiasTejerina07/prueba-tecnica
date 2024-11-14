import { Currency } from "@/interfaces/Currency";
import { createSlice } from "@reduxjs/toolkit";
import { paymentActions } from "../actions/payment";
import { Country } from "@/interfaces/Country";

const { newPayment } = paymentActions;

const paymentState = createSlice({
  name: "payment",
  initialState: {
    expected_output_amount: null as string | null,
    reference: "",
    currency: {
      fiat: "USD",
      currencySymbol: "$",
      position: "left",
    } as Currency,
    identifier: "",
    web_url: "",
    payment_uri: "",
    loading: false,
    error: null,
    success: false,
    country: {} as Country,
  },
  reducers: {
    updateFiatCurrency: (state, action) => {
      state.currency = action.payload;
    },
    updatePayment: (state, action) => {
      state.expected_output_amount = action.payload;
    },
    selectCountry: (state, action) => {
      state.country = action.payload;
    },
    cleanState: (state) => {
      state.expected_output_amount = "0";
      state.loading = false;
      state.error = null;
      state.success = false;
      state.web_url = "";
      state.payment_uri = "";
      state.identifier = "";
      state.reference = "";
      state.country = {} as Country;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(newPayment.fulfilled, (state, action) => {
        console.log(action.payload);
        state.reference = action.payload.reference;
        state.web_url = action.payload.web_url;
        state.currency.fiat = action.payload.fiat;
        state.identifier = action.payload.identifier;
        state.payment_uri = action.payload.payment_uri;
        state.success = true;
        state.loading = false;
        state.error = null;
      })
      .addCase(newPayment.pending, (state) => {
        state.loading = true;
        state.success = false;
        state.error = null;
      })
      .addCase(newPayment.rejected, (state, action: any) => {
        state.error = action.payload;
        state.success = false;
        state.loading = false;
      });
  },
});

export const { updateFiatCurrency, updatePayment, selectCountry, cleanState } =
  paymentState.actions;
export default paymentState.reducer;
