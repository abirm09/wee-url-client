import { TCommonSlice } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

const initialState: TCommonSlice = {
  selectedBellingPeriod: "monthly",
  selectedPlan: "free",
  paymentIntentId: null,
};

const commonSlice = createSlice({
  name: "commonSlice",
  initialState,
  reducers: {
    setCommon: (state, { payload }: { payload: TCommonSlice }) => {
      state.selectedBellingPeriod =
        payload.selectedBellingPeriod ?? state.selectedBellingPeriod;
      state.selectedPlan = payload.selectedPlan ?? state.selectedPlan;
      state.paymentIntentId = payload.paymentIntentId ?? state.paymentIntentId;
    },
  },
});

export const { setCommon } = commonSlice.actions;

export default commonSlice.reducer;
