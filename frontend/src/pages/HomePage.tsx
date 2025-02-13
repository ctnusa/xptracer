import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const HomePage = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />

      <div className="p-3 bg-background w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default HomePage;
