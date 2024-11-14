import { createAsyncThunk } from "@reduxjs/toolkit";
import { baseURL } from "@/services/baseURL";
import { ENDPOINTS } from "@/services/endpoint";

type PaymentData = {
  expected_output_amount: string;
  input_currency: string;
  reference: string;
  fiat: string;
};

const newPayment = createAsyncThunk<any, PaymentData>("new/payment", async (payment: PaymentData) => {
  try {
    const response = await baseURL.post(
      `${ENDPOINTS.order.newpayment}`,
      payment,
      {
        headers: { "X-Device-Id": "75a1f3ee-f1ec-4906-9cfd-ea6683415fd2" },
      }
    );
    return response.data;
  } catch (error) {
    console.log("aca",error);
  }
});

const paymentActions = {
  newPayment,
};

export { paymentActions };
