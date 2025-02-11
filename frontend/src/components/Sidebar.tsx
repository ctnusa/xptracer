import {
  CaretDoubleLeft,
  CaretDoubleRight,
  CaretDown,
  CaretUp,
  ChartLine,
  Gear,
  House,
  Icon,
  SignOut,
  Money,
  CreditCard,
  ChartBar,
} from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLogoutUserMutation } from "../graphql/generated";

interface MenuItem {
  name: string;
  icon: Icon;
  path?: string;
}
const menuItems: MenuItem[] = [
  { name: "Home", icon: House, path: "/" },
  { name: "Income", icon: Money, path: "/income" },
  { name: "Expense", icon: CreditCard, path: "/expense" },
  { name: "Analytics", icon: ChartBar, path: "/analytics" },
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const [openItem, setOpenItem] = useState<string | null>(null);
  const [logout] = useLogoutUserMutation();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const { data } = await logout();
      if (data?.logoutUser?.ok) {
        localStorage.removeItem("token");
        navigate("/login");
      } else {
        // setError("Unable to logout");
      }
    } catch (err) {
      console.error("Logout error:", err);
    }
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (event: React.MouseEvent, item: MenuItem) => {
    if (isOpen) {
      setOpenItem(openItem === item.name ? null : item.name);
    } else if (item.path) {
      setActiveItem(item.path);
      //TODO: add path here
      // navigate(item.path);
    }
  };

  useEffect(() => {
    setActiveItem("/");
  }, []);

  return (
    <div
      className={`flex flex-col justify-between h-screen text-sm transition-all duration-300 border-solid border-r-1 text-gray-800 border-gray-200 items-start shadow-sm ${
        isOpen ? "w-52" : "w-11"
      }`}
    >
      <div
        className={`flex justify-center items-center gap-1 h-14 py-10 w-full px-1 ${
          isOpen ? "" : "flex-col"
        }`}
      >
        <img src="/vite.svg" alt="Logo" className="w-8.5" />
        {isOpen && <span className="text-lg">Xptracer</span>}
        <button
          className={`${
            isOpen ? "ml-auto" : ""
          }  cursor-pointer hover:text-gray-500`}
          onClick={toggleSidebar}
        >
          {isOpen ? (
            <CaretDoubleLeft size={20} weight="duotone" />
          ) : (
            <CaretDoubleRight size={20} weight="duotone" />
          )}
        </button>
      </div>

      <hr className="border-gray-200 border-solid border-0.5 w-full shadow-sm" />

      <div className="flex flex-col py-2 w-full px-1">
        {menuItems.map((item) => (
          <button
            key={item.name}
            className={`flex gap-2 rounded-md w-full p-2 cursor-pointer relative group ${
              activeItem === item.path ? "bg-[#86AEAB]" : "hover:bg-[#C1DDE0]"
            }`}
            onClick={() => setActiveItem(item.path!!)}
          >
            <item.icon size={20} className="shrink-0" />
            {!isOpen && (
              <div className="border-solid absolute left-full top-1/2 ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#C1DDE0] rounded-md px-3 py-2 transform -translate-y-1/2">
                {item.name}
              </div>
            )}
            {isOpen && <span className="">{item.name}</span>}
          </button>
        ))}
      </div>

      <hr className="border-gray-200 mt-auto border-solid mb-1 border-0.5 w-full shadow-sm" />
      <div className="flex flex-col mb-1 w-full">
        <div className="flex flex-col px-1">
          <button
            className={`flex gap-2 p-2 rounded-md cursor-pointer relative group ${
              activeItem === "/settings" ? "bg-[#86AEAB]" : "hover:bg-[#C1DDE0]"
            }`}
            onClick={() => setActiveItem("/settings")}
          >
            <Gear size={20} className="shrink-0" />
            {!isOpen && (
              <div className="border-solid absolute left-full top-1/2 ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#C1DDE0] rounded-md px-3 py-2 transform -translate-y-1/2">
                Settings
              </div>
            )}
            {isOpen && <span>Settings</span>}
          </button>
          <button
            className="flex gap-2 p-2 rounded-md cursor-pointer relative group hover:bg-[#C1DDE0]"
            onClick={() => handleLogout()}
          >
            <SignOut size={20} className="shrink-0" />
            {!isOpen && (
              <div className="border-solid absolute left-full top-1/2 ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#C1DDE0] rounded-md px-3 py-2 transform -translate-y-1/2">
                Log out
              </div>
            )}
            {isOpen && <span className="whitespace-nowrap">Log out</span>}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
