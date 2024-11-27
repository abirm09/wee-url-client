import React from "react";
import { twMerge } from "tailwind-merge";

const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <div className={`${twMerge("container", className)}`}>{children}</div>;
};

export default Container;
