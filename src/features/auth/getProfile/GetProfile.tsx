"use client";

import { useProfileQuery } from "@/redux/features/user/userApi";
import { setIsUserLoading, setUser } from "@/redux/features/user/userSlice";
import { useAppDispatch } from "@/redux/hooks";
import { TApiSuccessResponse, TUser } from "@/types";
import { useEffect } from "react";

const GetProfile = ({ isAuthenticated }: { isAuthenticated: boolean }) => {
  const dispatch = useAppDispatch();

  // Only call useProfileQuery when the user is authenticated
  const { data, isSuccess, isLoading } = useProfileQuery(
    {},
    { skip: !isAuthenticated }
  );

  useEffect(() => {
    // Dispatch actions only if the API call was successful
    if (isSuccess && data) {
      const userData = data as TApiSuccessResponse<TUser>;
      dispatch(setUser(userData.data));
    }
    dispatch(setIsUserLoading(isLoading));
  }, [isSuccess, isLoading, data, dispatch]);

  return null;
};

export default GetProfile;
