import { AppSidebar } from "@/components/app-sidebar";
import { Outlet } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="flex h-screen bg-tertiary">
      {/* <Sidebar /> */}
      <AppSidebar />

      <div className="w-full bg-tertiary overflow-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default HomePage;
