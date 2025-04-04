import BreadcrumbDashboard from "./BreadcrumbDashboard";
import SideBarTrigger from "./SideBarTrigger";

const TopHeaderDashboard = () => {
  return (
    <div className="p-4 flex gap-2 items-center bg-sidebar">
      <SideBarTrigger />
      <span className="w-[2px] bg-gray-400 h-5"></span>
      <BreadcrumbDashboard />
    </div>
  );
};

export default TopHeaderDashboard;
