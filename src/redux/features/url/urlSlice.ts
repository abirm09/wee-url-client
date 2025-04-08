import { TApiSearchParams, TMeta, TURL, TURLSlice } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: TURLSlice = {
  data: null,
  isLoading: true,
  isError: false,
  searchParams: {
    page: 1,
    limit: 10,
    sort: "-createdAt",
  },
  meta: {
    limit: 0,
    page: 0,
    totalPage: 0,
    total: 0,
  },
  tags: null,
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
    setAllUrlSearchParams: (
      state,
      { payload }: PayloadAction<TApiSearchParams>
    ) => {
      state.searchParams = { ...state.searchParams, ...payload };
    },
    setAllUrlMeta: (state, { payload }: PayloadAction<TMeta>) => {
      state.meta = { ...state.meta, ...payload };
    },
    setURLTags: (state, { payload }: PayloadAction<string[]>) => {
      state.tags = payload;
    },
  },
});

export const {
  setURL,
  setURLLoading,
  setURLError,
  setAllUrlMeta,
  setAllUrlSearchParams,
} = uRLSlice.actions;

export default uRLSlice.reducer;
