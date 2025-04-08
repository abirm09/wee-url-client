"use client";

import { cn } from "@/lib/utils";
import { useAppDispatch } from "@/redux/hooks";
import { TMeta } from "@/types";
import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../ui";

const Paginate = ({
  meta,
  className,
  reducerFN,
  currentTotalData,
}: {
  meta?: TMeta;
  className?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  reducerFN: ActionCreatorWithPayload<any>;
  currentTotalData?: number;
}) => {
  const dispatch = useAppDispatch();

  const handlePrevNextBtn = (type: "prev" | "next") => {
    if (type === "prev") {
      if (meta?.page === 1) return;
      dispatch(reducerFN({ page: Number(meta?.page || 2) - 1 }));
    } else if (type === "next") {
      if (meta?.page === meta?.total) return;
      dispatch(reducerFN({ page: Number(meta?.page || 1) + 1 }));
    }
  };

  const limit = Number(meta?.limit || "10");
  const page = Number(meta?.page || 1);
  const total = Number(meta?.total || 1);
  const totalPage = Number(meta?.totalPage || "1");

  const showingFrom = limit * page - limit + 1;

  const showingTo = showingFrom + Number(currentTotalData || 0) - 1;

  const pageNumbers: number[] = [];
  for (let i = page - 3; i <= page + 3; i++) {
    if (i < 1) continue;
    if (i > totalPage) break;
    pageNumbers.push(i);
  }

  return (
    <div className={`${cn("mt-5 flex justify-center", className)}`}>
      <div className="flex gap-2 items-center justify-center">
        <div>
          <p className="whitespace-nowrap">
            Showing {showingFrom} to {showingTo} of {total}
          </p>
        </div>
        <Pagination className="inline-block">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                className={`cursor-pointer ${page === 1 ? "pointer-events-none" : ""}`}
                onClick={() => handlePrevNextBtn("prev")}
              />
            </PaginationItem>
            {pageNumbers.map((item) => (
              <PaginationItem key={item} className="cursor-pointer">
                <PaginationLink
                  className={`${page === item ? "bg-primary-foreground" : ""}`}
                  onClick={() => {
                    dispatch(reducerFN({ page: item }));
                  }}
                >
                  {item}
                </PaginationLink>
              </PaginationItem>
            ))}
            <PaginationItem>
              <PaginationNext
                className={`cursor-pointer ${totalPage === page ? "pointer-events-none" : ""}`}
                onClick={() => handlePrevNextBtn("next")}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
};

export default Paginate;
