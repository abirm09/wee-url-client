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
} from "@/components/ui/sidebar";
import { Icons } from "@/icons";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../../../components/ui/collapsible";

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
      icon: <Icons.Dashboard />,
    },
    {
      name: "Account",
      children: [
        {
          name: "Profile",
          path: "/user",
          icon: <Icons.User />,
        },
        {
          name: "Change password",
          path: "/user/change-password",
          icon: <Icons.Password />,
        },
      ],
    },
    {
      name: "URL",
      children: [
        {
          name: "Create new",
          path: "/dashboard/create-link",
          icon: <Icons.AddCircle />,
        },
        {
          name: "View All",
          path: "/dashboard/view-links",
          icon: <Icons.ViewGrid />,
        },
      ],
    },
  ];

  return (
    <Sidebar>
      <SidebarHeader>
        <Link
          href={"/"}
          className="py-2 flex justify-center items-center gap-2"
        >
          <Image
            src={`/logo/logo.png`}
            alt="Logo"
            height={100}
            width={100}
            className="w-10"
          />
          <div>
            <h2 className="font-bold">WeeURL</h2>
            <p className="text-sm">Shorten your URL</p>
          </div>
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
      <SidebarFooter>
        <h2>Hello</h2>
      </SidebarFooter>
    </Sidebar>
  );
};

export default UserPlusDashboardSidebar;
