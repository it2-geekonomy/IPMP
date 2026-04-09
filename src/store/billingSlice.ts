import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { BillingSummary } from "@/types/billing";

type BillingState = {
  summary: BillingSummary;
};

const initialState: BillingState = {
  summary: {
    totalDue: 0,
    totalPaid: 0,
  },
};

const billingSlice = createSlice({
  name: "billing",
  initialState,
  reducers: {
    setBillingSummary: (state, action: PayloadAction<BillingSummary>) => {
      state.summary = action.payload;
    },
    resetBillingSummary: (state) => {
      state.summary = initialState.summary;
    },
  },
});

export const { setBillingSummary, resetBillingSummary } = billingSlice.actions;
export default billingSlice.reducer;
