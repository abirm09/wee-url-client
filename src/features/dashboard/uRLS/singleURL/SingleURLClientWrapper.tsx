"use client";

import { Box, FilterByDateBox } from "@/components";
import { useSingleURLCustomerQuery } from "@/redux/features/url/urlApi";
import { TApiErrorResponse, TApiSuccessResponse, TURL } from "@/types";

const SingleURLClientWrapper = ({ id }: { id: string }) => {
  const {
    data: singleURLData,
    isLoading: singleURLLoading,
    error,
  } = useSingleURLCustomerQuery({
    id,
  });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const singleUrl = (singleURLData as TApiSuccessResponse<TURL>)?.data || null;
  const singleUrlErrorMessage =
    (error as TApiErrorResponse)?.data?.message || "";

  if (singleURLLoading) {
    return (
      <div>
        <h2 className="text-center font-bold">Loading...</h2>
      </div>
    );
  }

  if (!singleURLData) {
    return (
      <div>
        <h2 className="text-center font-bold">{singleUrlErrorMessage}</h2>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-4 gap-5">
      <div className="col-span-4">
        <div>
          <Box className="">
            <FilterByDateBox />
          </Box>
        </div>
      </div>
    </div>
  );
};

export default SingleURLClientWrapper;
