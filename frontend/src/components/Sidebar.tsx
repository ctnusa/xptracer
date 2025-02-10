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
import { useEffect, useState } from "react";
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
  const [contextMenu, setContextMenu] = useState<{
    x: number;
    y: number;
    subItems: MenuItem[];
  } | null>(null);
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
    setContextMenu(null); // Close context menu when toggling sidebar
  };

  const handleItemClick = (event: React.MouseEvent, item: MenuItem) => {
    if (isOpen) {
      setOpenItem(openItem === item.name ? null : item.name);
    } else if (item.subItems) {
      const menuItemRect = event.currentTarget.getBoundingClientRect();
      setContextMenu({
        x: 42,
        y: menuItemRect.top,
        subItems: item.subItems,
      });
    } else if (item.path) {
      //TODO: add path here
      // navigate(item.path);
    }
  };

  const handleSubItemClick = (path: string) => {
    setActiveItem(path);
    // TODO: add path here
    // navigate(path);
    setContextMenu(null);
  };

  useEffect(() => {
    setActiveItem("/");
  }, []);

  return (
    <div
      className={`flex flex-col text-sm  py-3 gap-5 h-screen transition-all duration-700 border-solid border-r-2 text-gray-600 border-gray-200 ${
        isOpen ? "w-50 px-3" : "w-12 items-center"
      }`}
    >
      {/* Logo section */}
      <div
        className={`flex justify-center items-center gap-1 h-12 ${
          isOpen ? "" : "flex-col"
        }`}
      >
        <img src="/vite.svg" alt="Logo" className="w-10" />
        {isOpen && <span className="text-lg">Xptracer</span>}
        <button
          className={`${
            isOpen ? "ml-auto" : ""
          } text-gray-400 cursor-pointer hover:text-gray-500`}
          onClick={toggleSidebar}
        >
          {isOpen ? (
            <CaretDoubleLeft size={20} weight="duotone" />
          ) : (
            <CaretDoubleRight size={20} weight="duotone" />
          )}
        </button>
      </div>

      <hr className="border-gray-300 border-solid border-0.5 px-5" />

      {/* Overview section */}
      <div className="flex flex-col">
        {isOpen && (
          <div className={`uppercase font-bold mb-4 p-1 text-gray-500`}>
            Main Menu
          </div>
        )}
        <div className="flex flex-col gap-1">
          {menuItems.map((item) => (
            <div key={item.name}>
              {item.subItems ? (
                <div className="">
                  <button
                    className={
                      "flex gap-2 w-full p-1.5 hover:bg-[#EDF6F7] hover:border-l-[#86AEAB] hover:border-l-3 rounded-md cursor-pointer"
                    }
                    onClick={(event) => handleItemClick(event, item)}
                  >
                    <item.icon size={20} />
                    {isOpen && <span>{item.name}</span>}
                    {isOpen && (
                      <>
                        {openItem !== item.name ? (
                          <CaretDown
                            className="ml-auto"
                            size={20}
                            weight="duotone"
                          />
                        ) : (
                          <CaretUp
                            className="ml-auto"
                            size={20}
                            weight="duotone"
                          />
                        )}
                      </>
                    )}
                  </button>

                  {isOpen && (
                    <>
                      {openItem === item.name ? (
                        <div className="flex flex-col ml-6 pt-1 space-y-1">
                          {item.subItems.map((subItem) => (
                            <button
                              key={subItem.name}
                              className={`flex gap-2 hover:bg-[#EDF6F7] rounded-md p-1.5 cursor-pointer hover:border-l-[#86AEAB] hover:border-l-3 ${
                                activeItem === subItem.path
                                  ? "border-l-[#86AEAB] border-l-3 bg-[#EDF6F7]"
                                  : ""
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
                    </>
                  )}
                </div>
              ) : (
                <button
                  className={`flex gap-2 hover:bg-[#EDF6F7] rounded-md w-full p-1.5 cursor-pointer hover:border-l-[#86AEAB] hover:border-l-3 ${
                    activeItem === item.path
                      ? "bg-[#EDF6F7] border-l-3 border-l-[#86AEAB]"
                      : ""
                  }`}
                  onClick={() => setActiveItem(item.path!!)}
                >
                  <item.icon size={20} />
                  {isOpen && <span>{item.name}</span>}
                </button>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Account section fixed the bottom */}
      <div className="flex flex-col mt-auto relative bottom-2 gap-1.5">
        {isOpen && <p className="uppercase font-bold">Account</p>}
        <div className="flex flex-col gap-1.5">
          <button
            className={`flex gap-2 p-1.5 rounded-md hover:bg-[#EDF6F7] cursor-pointer hover:border-l-[#86AEAB] hover:border-l-3 ${
              activeItem === "/settings"
                ? "bg-[#EDF6F7] border-l-3 border-l-[#86AEAB]"
                : ""
            }`}
            onClick={() => setActiveItem("/settings")}
          >
            <Gear size={20} />
            {isOpen && <span>Settings</span>}
          </button>
          <button
            className="flex gap-2 p-1.5 rounded-md cursor-pointer hover:bg-[#EDF6F7] hover:border-l-[#86AEAB] hover:border-l-3"
            onClick={() => handleLogout()}
          >
            <SignOut size={20} />
            {isOpen && <span>Log out</span>}
          </button>
        </div>
      </div>

      {contextMenu && (
        <div
          className="absolute border-solid border-1 border-gray-300 rounded-md shadow-lg p-2 bg-white"
          style={{ top: contextMenu.y, left: contextMenu.x }}
        >
          {contextMenu.subItems.map((subItem) => (
            <button
              key={subItem.name}
              className={`flex gap-2 hover:bg-[#EDF6F7] rounded-md p-1.5 w-full cursor-pointer ${
                activeItem === subItem.path ? "bg-[#EDF6F7]" : ""
              }`}
              onClick={() => handleSubItemClick(subItem.path!!)}
            >
              <subItem.icon size={20} />
              <span>{subItem.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Sidebar;
