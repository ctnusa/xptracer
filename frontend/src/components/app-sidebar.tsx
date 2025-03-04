import { Calendar, Home, Inbox, Search, Settings } from "lucide-react";
import {
  CaretDoubleLeft,
  CaretDoubleRight,
  ChartBar,
  CreditCard,
  Gear,
  House,
  Icon,
  Money,
  SignOut,
} from "@phosphor-icons/react";

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
  SidebarRail,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../app/hooks";
import { logoutAsync } from "../features/auth/authThunks";

// Menu items.
const menuItems = [
  {
    title: "Year",
    url: "/",
    icon: Money,
  },
  {
    title: "Month",
    url: "/month",
    icon: House,
  },
  {
    title: "Expense",
    url: "/expense",
    icon: CreditCard,
  },
  {
    title: "Analytics",
    url: "/analytics",
    icon: ChartBar,
  },
];

// Setting items
const settingItems = [
  {
    title: "Settings",
    url: "/settings",
    icon: Gear,
  },
];

export function AppSidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useAppDispatch();

  const handleLogout = async () => {
    try {
      const result = await dispatch(logoutAsync());
      if (logoutAsync.fulfilled.match(result)) {
        navigate("/login");
      } else {
        // Handle error
      }
    } catch (err) {
      console.error("Logout error:", err);
    }
  };

  return (
    <Sidebar collapsible="icon" className="">
      <SidebarTrigger className="absolute top-2.5 -right-3 z-10" />
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link to="/">
                <House />
                <span className="text-sm">Xptracer</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    isActive={location.pathname === item.url}
                  >
                    <Link to={item.url}>
                      <item.icon />
                      <span className="text-sm">{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>


        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {settingItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    isActive={location.pathname === item.url}
                  >
                    <Link to={item.url}>
                      <item.icon />
                      <span className="text-sm">{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link to={"settings"} onClick={() => handleLogout()}>
                <SignOut size={20} className="shrink-0" />
                <span className="text-sm">Log out</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
