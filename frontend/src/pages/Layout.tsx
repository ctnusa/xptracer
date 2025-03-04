import { AppSidebar } from "@/components/app-sidebar";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div className="flex h-screen bg-tertiary">
      <AppSidebar />

      <div className="w-full bg-tertiary overflow-auto">
        <Outlet />
      </div>
    </div>
  );
};

