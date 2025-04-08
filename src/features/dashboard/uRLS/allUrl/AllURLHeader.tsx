"use client";

import { Show } from "@/components";
import { setAllUrlSearchParams } from "@/redux/features/url/urlSlice";
import { useAppSelector } from "@/redux/hooks";

const AllURLHeader = () => {
  const { meta } = useAppSelector(({ urls }) => urls);

  return (
    <>
      <Show meta={meta} reducerFN={setAllUrlSearchParams} className="mb-5" />
    </>
  );
};

export default AllURLHeader;
