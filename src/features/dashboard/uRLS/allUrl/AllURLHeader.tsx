"use client";

import { Show } from "@/components";
import { setAllUrlSearchParams } from "@/redux/features/url/urlSlice";
import { useAppSelector } from "@/redux/hooks";
import AllURLFilterByTags from "./AllURLFilterByTags";

const AllURLHeader = () => {
  const { meta } = useAppSelector(({ urls }) => urls);

  return (
    <div className="flex justify-between">
      <Show meta={meta} reducerFN={setAllUrlSearchParams} className="mb-5" />
      <AllURLFilterByTags />
    </div>
  );
};

export default AllURLHeader;
