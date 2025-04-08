"use client";

import { Paginate } from "@/components";
import { setAllUrlSearchParams } from "@/redux/features/url/urlSlice";
import { useAppSelector } from "@/redux/hooks";

const AllURLFooter = () => {
  const { meta } = useAppSelector(({ urls }) => urls);
  const { data } = useAppSelector(({ urls }) => urls);

  return (
    <div>
      <Paginate
        meta={meta}
        reducerFN={setAllUrlSearchParams}
        currentTotalData={data?.length}
      />
    </div>
  );
};

export default AllURLFooter;
