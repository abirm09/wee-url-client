"use client";

import { useSidebar } from "@/components";
import { Icons } from "@/icons";

const SideBarTrigger = () => {
  const { toggleSidebar } = useSidebar();
  return (
    <button onClick={() => toggleSidebar()} className="text-red-700">
      <Icons.PanelLeft />
    </button>
  );
};

export default SideBarTrigger;
