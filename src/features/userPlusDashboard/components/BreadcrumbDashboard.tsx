"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment } from "react";

const BreadcrumbDashboard = () => {
  const pathNames = usePathname().split("/").filter(Boolean);
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <Link href="/">Home</Link>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        {pathNames.map((item, index) => (
          <Fragment key={index}>
            <BreadcrumbItem>
              <Link
                href={`/${pathNames.slice(0, index + 1).join("/")}`}
                className="capitalize"
              >
                {item.split("-").join(" ")}
              </Link>
            </BreadcrumbItem>
            {index < pathNames.length - 1 && <BreadcrumbSeparator />}
          </Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default BreadcrumbDashboard;
