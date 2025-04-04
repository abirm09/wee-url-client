import { cn } from "@/lib/utils";
import React from "react";
import { Card } from "../ui";

const Box = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <Card className={`${cn("p-5 shadow-box border ", className)}`}>
      {children}
    </Card>
  );
};

export default Box;
