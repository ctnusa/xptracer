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
      className={`flex flex-col justify-between h-screen text-sm py-3 transition-all duration-300 border-solid border-r-1 text-gray-800 border-gray-200 items-start shadow-sm ${
        isOpen ? "w-52" : "w-11"
      }`}
      onClick={toggleSidebar}
    >
      <div
        className={`flex justify-center items-center gap-1 h-12 w-full px-1 mb-5 ${
          isOpen ? "" : "flex-col"
        }`}
      >
        <img src="/vite.svg" alt="Logo" className="w-10" />
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

      <div className="flex flex-col mt-auto w-full">
        <hr className="border-gray-200 border-solid border-0.5 w-full shadow-sm" />

        <div className="flex flex-col px-1">
          {/* <House size={20} className="shrink-0" />
          <p>End</p> */}

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
            {isOpen && <span>Log&nbsp;out</span>}
          </button>
        </div>

        {/* <hr className="border-gray-200 border-solid border-0.5 w-full shadow-sm" />
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
                Logout
              </div>
            )}
            {isOpen && <span>Log out</span>}
          </button>
        </div> */}
      </div>
      {/* </div> */}

      {/* <div
        className={`flex justify-center items-center gap-1 h-12 w-full px-1 mb-5 ${
          isOpen ? "" : "flex-col"
        }`}
      >
        <img src="/vite.svg" alt="Logo" className="w-10" />
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

      <div className="flex flex-col mt-auto w-full ">
        <hr className="border-gray-200 border-solid border-0.5 w-full shadow-sm" />
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
                Logout
              </div>
            )}
            {isOpen && <span>Log out</span>}
          </button>
        </div>
      </div> */}

      {/* <li
      className={`
        relative flex items-center py-2 px-3 my-1
        font-medium rounded-md cursor-pointer
        transition-colors group bg-red-400
    `}
    >
      <House size={20}/>
      <span
        className={`overflow-hidden transition-all ${
          isOpen ? "w-52 ml-3" : "w-0"
        }`}
      >
        Home
      </span>

      {!isOpen && (
        <div
          className={`
          absolute left-full rounded-md px-2 py-1 ml-6
          bg-indigo-100 text-indigo-800 text-sm
          invisible opacity-20 -translate-x-3 transition-all
          group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
      `}
        >
          Hello
        </div>
      )}
    </li> */}

      {/* <div className="flex flex-col" onClick={toggleSidebar}>
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

        <hr className="border-gray-400 border-solid border-0.5 px-5" />

        <div className="flex flex-col">
          <div className="flex flex-col gap-1">
            {menuItems.map((item) => (
              <div>
                <button
                  key={item.name}
                  className={`flex gap-2 rounded-md w-full p-2 cursor-pointer relative group ${
                    activeItem === item.path
                      ? "bg-[#86AEAB]"
                      : "hover:bg-[#C1DDE0]"
                  }`}
                  onClick={() => setActiveItem(item.path!!)}
                >
                  <item.icon size={20} />
                  {!isOpen && (
                    <div className="border-solid absolute left-full top-1/2 ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#C1DDE0] rounded-md px-3 py-2 transform -translate-y-1/2">
                      {item.name}
                    </div>
                  )}
                  {isOpen && <span>{item.name}</span>}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col relative bottom-2 gap-1.5">
        {isOpen && <p className="uppercase font-bold">Account</p>}
        <div className="flex flex-col gap-1.5">
          <button
            className={`flex gap-2 p-2 rounded-md cursor-pointer ${
              activeItem === "/settings" ? "bg-[#86AEAB]" : "hover:bg-[#C1DDE0]"
            }`}
            onClick={() => setActiveItem("/settings")}
          >
            <Gear size={20} />
            {isOpen && <span>Settings</span>}
          </button>
          <button
            className="flex gap-2 p-1.5 rounded-md cursor-pointer hover:bg-[#C1DDE0]"
            onClick={() => handleLogout()}
          >
            <SignOut size={20} />
            {isOpen && <span>Log out</span>}
          </button>
        </div>
      </div> */}
    </div>
  );
};

export default Sidebar;
