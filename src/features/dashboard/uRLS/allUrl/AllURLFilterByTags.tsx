"use client";

import { WeeButton } from "@/components";
import { useAllTagsForCustomerQuery } from "@/redux/features/url/urlApi";
import { setAllUrlSearchParams } from "@/redux/features/url/urlSlice";
import { useAppDispatch } from "@/redux/hooks";
import { useEffect, useState } from "react";
import Select, { MultiValue } from "react-select";

const AllURLFilterByTags = () => {
  const [mounted, setMounted] = useState(false);
  const { data: prevTagsRes } = useAllTagsForCustomerQuery({});
  const prevTagsData = (prevTagsRes?.data?.tags || []) as string[];

  const creatableOptions = prevTagsData?.map((item) => ({
    value: item,
    label: item,
  }));
  const [selectedTags, setSelectedTags] = useState<
    MultiValue<{ value: string; label: string }>
  >([]);

  const dispatch = useAppDispatch();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return;

  return (
    <div className="flex-1 max-w-2xl flex justify-between gap-2">
      <Select
        isMulti={true}
        options={creatableOptions}
        value={selectedTags}
        onChange={(v) => setSelectedTags(v)}
        className="flex-1"
        isClearable={false}
      />
      <WeeButton
        onClick={() => {
          dispatch(
            setAllUrlSearchParams({
              tags: selectedTags.map((item) => item.value),
            })
          );
        }}
      >
        Filter
      </WeeButton>
      <WeeButton
        variant={"destructive"}
        onClick={() => {
          setSelectedTags([]);
          dispatch(
            setAllUrlSearchParams({
              tags: [],
            })
          );
        }}
      >
        Clear
      </WeeButton>
    </div>
  );
};

export default AllURLFilterByTags;
