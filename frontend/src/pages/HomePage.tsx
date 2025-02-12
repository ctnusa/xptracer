import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const HomePage = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />

      <div className="p-3 bg-[#F1F3F4] w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default HomePage;
