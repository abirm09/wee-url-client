import { TURL, TURLSlice } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: TURLSlice = {
  data: null,
  isLoading: true,
  isError: false,
};

const uRLSlice = createSlice({
  name: "uRLSlice",
  initialState,
  reducers: {
    setURL: (state, { payload }: PayloadAction<TURL[] | null>) => {
      state.data = payload;
    },
    setURLLoading: (state, { payload }: PayloadAction<boolean>) => {
      state.isLoading = payload;
    },
    setURLError: (state, { payload }: PayloadAction<boolean>) => {
      state.isError = payload;
    },
  },
});

export const { setURL, setURLLoading, setURLError } = uRLSlice.actions;

export default uRLSlice.reducer;
