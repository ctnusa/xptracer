import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const HomePage = () => {
  return (
    <div className="flex h-screen bg-tertiary">
      <Sidebar />
      <div className="p-3 w-full bg-tertiary overflow-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default HomePage;
