"use client";

import { useProfileQuery } from "@/redux/features/user/userApi";
import { setIsUserLoading, setUser } from "@/redux/features/user/userSlice";
import { useAppDispatch } from "@/redux/hooks";
import { TApiSuccessResponse, TUser } from "@/types";
import { useEffect } from "react";

const GetProfile = () => {
  const dispatch = useAppDispatch();
  const { data, isSuccess, isLoading } = useProfileQuery({});
  const userData = data as TApiSuccessResponse<TUser>;
  useEffect(() => {
    if (isSuccess) {
      dispatch(setUser(userData.data));
    }
    dispatch(setIsUserLoading(isLoading));
  }, [isSuccess, isLoading]);
  return null;
};

export default GetProfile;
