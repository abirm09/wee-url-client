import { SidebarProvider } from "@/components";
import {
  TopHeaderDashboard,
  UserPlusDashboardSidebar,
} from "@/features/userPlusDashboard/components";

import React from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <main className="w-full">
        <SidebarProvider>
          <UserPlusDashboardSidebar />
          <div className="w-full bg-gray-50">
            <TopHeaderDashboard />
            <div className="px-5 w-full mt-5">{children}</div>
          </div>
        </SidebarProvider>
      </main>
    </>
  );
};

export default DashboardLayout;

// box-shadow: 0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px -1px rgba(0,0,0,.1);

// Tailwind CSS equivalent for the given box-shadow
// shadow-md corresponds to the provided box-shadow values
// You can use this class in your JSX elements where needed
