import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const HomePage = () => {
  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      <div className="p-3 w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default HomePage;
