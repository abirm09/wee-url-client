import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "@/components/ui/sidebar";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../../../components/ui/collapsible";

import AddIco from "@/assets/images/dashboard/add.svg";
import AnalyticsIco from "@/assets/images/dashboard/analytics.svg";
import PasswordIco from "@/assets/images/dashboard/password.svg";
import UserIco from "@/assets/images/dashboard/user.svg";
import ListViewIco from "@/assets/images/dashboard/view-list.svg";
import AuthStateForDesktop from "@/components/Shared/Header/AuthStateForDesktop";

const UserPlusDashboardSidebar = () => {
  const applicationLinks: {
    name: string;
    path?: string;
    icon?: React.JSX.Element;
    children?: {
      name: string;
      path: string;
      icon: React.JSX.Element;
    }[];
  }[] = [
    {
      name: "Metrics",
      path: "/dashboard",
      icon: <AnalyticsIco />,
    },
    {
      name: "Account",
      children: [
        {
          name: "Profile",
          path: "/user",
          icon: <UserIco />,
        },
        {
          name: "Change password",
          path: "/user/change-password",
          icon: <PasswordIco />,
        },
      ],
    },
    {
      name: "URL",
      children: [
        {
          name: "Create new",
          path: "/dashboard/urls/create",
          icon: <AddIco />,
        },
        {
          name: "View All",
          path: "/dashboard/urls",
          icon: <ListViewIco />,
        },
      ],
    },
  ];

  return (
    <Sidebar>
      <SidebarHeader className="flex items-center justify-center py-5">
        <Link href={"/dashboard"}>
          <Image
            src={`/logo/logo.png`}
            alt="Logo"
            width={175}
            height={35}
            className="w-[87.5px] h-[17.5px] lg:w-[175px] lg:h-[35px]"
            priority
          />
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>

          {applicationLinks.map((item, index) => {
            if (item?.children?.length) {
              return (
                <Collapsible
                  className="group/collapsible"
                  key={item.name + index}
                >
                  <SidebarGroup>
                    <SidebarGroupLabel asChild>
                      <CollapsibleTrigger>
                        {item.name}
                        <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
                      </CollapsibleTrigger>
                    </SidebarGroupLabel>
                    <CollapsibleContent>
                      <SidebarGroupContent>
                        <SidebarMenu>
                          {item.children?.map((childItem, index) => (
                            <SidebarMenuItem key={childItem.name + index}>
                              <SidebarMenuButton asChild>
                                <Link href={`${childItem.path}`}>
                                  {childItem.icon}
                                  {childItem.name}
                                </Link>
                              </SidebarMenuButton>
                            </SidebarMenuItem>
                          ))}
                        </SidebarMenu>
                      </SidebarGroupContent>
                    </CollapsibleContent>
                  </SidebarGroup>
                </Collapsible>
              );
            } else {
              return (
                <SidebarMenu key={item.name + index}>
                  <SidebarMenuItem key={item.name + index}>
                    <SidebarMenuButton asChild>
                      <Link href={`${item.path}`}>
                        {item.icon}
                        {item.name}
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              );
            }
          })}
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="flex justify-center">
        <SidebarSeparator />
        <AuthStateForDesktop />
      </SidebarFooter>
    </Sidebar>
  );
};

export default UserPlusDashboardSidebar;
