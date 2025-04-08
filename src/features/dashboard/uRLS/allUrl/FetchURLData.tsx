"use client";

import { useAllURLCustomerQuery } from "@/redux/features/url/urlApi";
import {
  setAllUrlMeta,
  setURL,
  setURLError,
  setURLLoading,
} from "@/redux/features/url/urlSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { TApiSuccessResponse, TMeta, TURL } from "@/types";
import { useEffect } from "react";

const FetchURLData = () => {
  const { searchParams } = useAppSelector(({ urls }) => urls);

  const {
    data: urlResponse,
    isLoading,
    isError,
  } = useAllURLCustomerQuery({ ...searchParams });
  const allUrl = (urlResponse as TApiSuccessResponse<TURL[]>)?.data || null;
  const meta = (urlResponse?.meta as TMeta) || {};
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (allUrl) {
      dispatch(setURL(allUrl));
      dispatch(setAllUrlMeta(meta));
    }

    dispatch(setURLLoading(isLoading));

    if (isError) {
      dispatch(setURLError(true));
    }
  }, [allUrl, isLoading, isError]);

  return null;
};

export default FetchURLData;
