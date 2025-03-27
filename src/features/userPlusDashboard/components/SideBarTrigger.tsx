"use client";

import PanelLeftIco from "@/assets/images/dashboard/panel-left.svg";
import PanelRightIco from "@/assets/images/dashboard/panel-right.svg";
import { useSidebar } from "@/components";

const SideBarTrigger = () => {
  const { toggleSidebar, open } = useSidebar();
  return (
    <button onClick={() => toggleSidebar()}>
      {open ? (
        <PanelLeftIco className="w-8 h-8" />
      ) : (
        <PanelRightIco className="w-8 h-8" />
      )}
    </button>
  );
};

export default SideBarTrigger;
