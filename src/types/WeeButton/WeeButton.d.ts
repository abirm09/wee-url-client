import { ButtonProps } from "@/components/ui/button";
import React from "react";

export type TWeeButton = {
  loading?: boolean;
  loadingElement?: string | React.ReactNode;
  loadingClassName?: string;
} & ButtonProps;
