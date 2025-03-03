import Sidebar from "@/components/Sidebar";
import { Outlet } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="flex h-screen bg-tertiary">
      <Sidebar />
      <div className="w-full bg-tertiary overflow-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default HomePage;
