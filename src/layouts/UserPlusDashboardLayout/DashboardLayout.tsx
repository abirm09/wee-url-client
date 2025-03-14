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
          <div className="px-2 w-full">
            <TopHeaderDashboard />
            {children}
          </div>
        </SidebarProvider>
      </main>
    </>
  );
};

export default DashboardLayout;
