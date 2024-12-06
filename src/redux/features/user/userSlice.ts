import { TUser, TUserSlice } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: TUserSlice = {
  user: null,
  isUserLoading: true,
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    setUser: (state, { payload }: PayloadAction<TUser | null>) => {
      state.user = payload;
    },
    setIsUserLoading: (state, { payload }: PayloadAction<boolean>) => {
      state.isUserLoading = payload;
    },
    removeUser: (state) => {
      state.user = null;
    },
  },
});

export const { setUser, setIsUserLoading, removeUser } = userSlice.actions;

export default userSlice.reducer;
