"use client";

import { cn } from "@/lib/utils";
import { useAppDispatch } from "@/redux/hooks";
import { TMeta } from "@/types";
import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui";

const Show = ({
  meta,
  className,
  reducerFN,
}: {
  meta?: TMeta;
  className?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  reducerFN: ActionCreatorWithPayload<any>;
}) => {
  const dispatch = useAppDispatch();

  const handleValueChange = (v: string) => {
    dispatch(reducerFN({ limit: Number(v) }));
  };

  return (
    <div className={`${cn("flex gap-2 items-center", className)}`}>
      <span>Showing:</span>
      <Select onValueChange={(v) => handleValueChange(v)}>
        <SelectTrigger className="w-[80px]">
          <SelectValue placeholder={meta?.limit} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="2">2</SelectItem>
            <SelectItem value="10">10</SelectItem>
            <SelectItem value="20">20</SelectItem>
            <SelectItem value="30">30</SelectItem>
            <SelectItem value="40">40</SelectItem>
            <SelectItem value="50">50</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <span>Items</span>
    </div>
  );
};

export default Show;
