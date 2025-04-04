"use client";

import { useAllURLCustomerQuery } from "@/redux/features/url/urlApi";
import {
  setURL,
  setURLError,
  setURLLoading,
} from "@/redux/features/url/urlSlice";
import { useAppDispatch } from "@/redux/hooks";
import { TApiSuccessResponse, TURL } from "@/types";
import { useEffect } from "react";

const FetchURLData = () => {
  const { data: urlResponse, isLoading, isError } = useAllURLCustomerQuery({});
  const allUrl = (urlResponse as TApiSuccessResponse<TURL[]>)?.data || null;
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (allUrl) {
      dispatch(setURL(allUrl));
    }
    if (isLoading) {
      dispatch(setURLLoading(true));
    } else {
      dispatch(setURLLoading(false));
    }

    if (isError) {
      dispatch(setURLError(true));
    }
  }, [allUrl, isLoading, isError]);

  return null;
};

export default FetchURLData;
