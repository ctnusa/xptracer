import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const HomePage = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />

      <div className="p-3 bg-[#16113A] w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default HomePage;
