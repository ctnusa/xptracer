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
} from "@phosphor-icons/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLogoutUserMutation } from "../graphql/generated";

interface MenuItem {
  name: string;
  icon: Icon;
  subItems?: MenuItem[];
  path?: string;
}
const menuItems: MenuItem[] = [
  { name: "Home", icon: House, path: "/" },
  {
    name: "Income",
    icon: House,
    subItems: [
      { name: "Income", icon: ChartLine, path: "/a" },
      { name: "Analytics", icon: House, path: "/b" },
    ],
  },
  { name: "Notification", icon: House, path: "/goal" },
  {
    name: "Analytics",
    icon: ChartLine,
    subItems: [
      { name: "Income", icon: ChartLine, path: "/c" },
      { name: "Analytics", icon: House, path: "/d" },
    ],
  },
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

  const expandedView = (
    <>
      {/* Logo section */}
      <div className="flex justify-center items-center gap-1 h-12">
        <img src="/vite.svg" alt="Logo" className="w-10" />
        <span className="text-lg">Xptracer</span>
        <button
          className="flex ml-auto text-gray-400 hover:text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          <CaretDoubleLeft size={20} weight="duotone" />
        </button>
      </div>

      <hr className="border-gray-600 border-solid border-0.5" />

      {/* Overview section */}
      <div className="flex flex-col">
        <div
          className={`uppercase font-bold mb-4 p-1 ${
            isOpen ? "visible" : "invisible"
          }`}
        >
          Overview
        </div>
        <div className="flex flex-col gap-2">
          {menuItems.map((item) => (
            <div key={item.name} className="">
              {item.subItems ? (
                <div className="">
                  <button
                    className={
                      "flex gap-2 w-full p-1.5 hover:bg-gray-700 rounded-md"
                    }
                    onClick={() =>
                      setOpenItem(openItem === item.name ? null : item.name)
                    }
                  >
                    <item.icon size={20} />
                    <span>{item.name}</span>

                    {openItem !== item.name ? (
                      <CaretDown
                        className="ml-auto"
                        size={20}
                        weight="duotone"
                      />
                    ) : (
                      <CaretUp className="ml-auto" size={20} weight="duotone" />
                    )}
                  </button>

                  {openItem === item.name ? (
                    <div className="flex flex-col ml-6 pt-1 space-y-1">
                      {item.subItems.map((subItem) => (
                        <button
                          key={subItem.name}
                          className={`flex gap-2 hover:bg-gray-700 rounded-md p-1.5 ${
                            activeItem === subItem.path ? "bg-gray-700" : ""
                          }`}
                          onClick={() => setActiveItem(subItem.path!!)}
                        >
                          <subItem.icon size={20} />
                          <span>{subItem.name}</span>
                        </button>
                      ))}
                    </div>
                  ) : (
                    <div></div>
                  )}
                </div>
              ) : (
                <button
                  className={`flex gap-2 hover:bg-gray-700 rounded-md w-full p-1.5 ${
                    activeItem === item.path ? "bg-gray-700" : ""
                  }`}
                  onClick={() => setActiveItem(item.path!!)}
                >
                  <item.icon size={20} />
                  <span>{item.name}</span>
                </button>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Account section fixed the bottom */}
      <div className="flex flex-col mt-auto relative bottom-2 gap-1.5">
        <p className="uppercase font-bold">Account</p>
        <div className="flex flex-col gap-1.5">
          <button
            className={`flex gap-2 p-1.5 rounded-md hover:bg-gray-700 ${
              activeItem === "/settings" ? "bg-gray-500" : ""
            }`}
            onClick={() => setActiveItem("/settings")}
          >
            <Gear size={20} />
            <span>Settings</span>
          </button>
          <button
            className="flex gap-2 p-1.5 rounded-md hover:bg-gray-700"
            onClick={() => handleLogout()}
          >
            <SignOut size={20} />
            <span>Log out</span>
          </button>
        </div>
      </div>
    </>
  );

  const collapsedView = (
    <>
      {/* Logo section */}
      <div className="flex flex-col justify-between items-center gap-2 h-12">
        <img src="/vite.svg" alt="Logo" className="w-10" />
        <button
          className="text-gray-400 hover:text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          <CaretDoubleRight size={20} weight="duotone" />
        </button>
      </div>

      <hr className="border-gray-600 border-solid border-0.5 w-full" />

      {/* Overview section */}
      <div className="flex flex-col absolute top-25">
        <div
          className={`uppercase font-bold mb-4 ${
            isOpen ? "visible" : "invisible"
          }`}
        >
          Overview
        </div>
      </div>
      <div className="flex flex-col relative">
        <div className="flex flex-col gap-2 ">
          {menuItems.map((item) => (
            <div key={item.name} className="">
              <button
                className={`flex gap-2 p-2 hover:bg-gray-700 rounded-md ${
                  activeItem === item.path ? "bg-gray-700" : ""
                }`}
                onClick={() => setActiveItem(item.path!!)}
              >
                <item.icon size={20} />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Account section fixed the bottom */}
      <div className="flex flex-col relative mt-auto bottom-2 gap-2">
        <div className="flex flex-col">
          <button
            className="p-1.5 rounded-md hover:bg-gray-700"
            onClick={() => {}}
          >
            <Gear size={20} />
          </button>
          <button
            className="p-1.5 rounded-md hover:bg-gray-700"
            onClick={() => handleLogout()}
          >
            <SignOut size={20} />
          </button>
        </div>
      </div>
    </>
  );

  return (
    <div
      className={`flex flex-col ${
        isOpen ? "w-50" : "w-12 items-center"
      } bg-gray-800 text-white text-sm px-3 py-3 gap-5 h-screen transition-all duration-700`}
    >
      {isOpen ? expandedView : collapsedView}
    </div>
  );
};

export default Sidebar;
