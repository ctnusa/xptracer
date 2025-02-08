// import { useState } from "react";
// import {
//   House,
//   Gear,
//   Folder,
//   CaretDown,
//   CaretUp,
//   SignOut,
//   List,
// } from "@phosphor-icons/react";

// const menuItems = [
//   { name: "Dashboard", icon: House, path: "/" },
//   {
//     name: "Projects",
//     icon: Folder,
//     subItems: [
//       { name: "Web App", path: "/projects/web" },
//       { name: "Mobile App", path: "/projects/mobile" },
//     ],
//   },
//   { name: "Settings", icon: Gear, path: "/settings" },
// ];

// const Sidebar = () => {
//   const [isOpen, setIsOpen] = useState(true);
//   const [activeItem, setActiveItem] = useState<string | null>(null);
//   const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

//   return (
//     <div className={`h-screen flex ${isOpen ? "w-64" : "w-20"} transition-all duration-300`}>
//       <div className="bg-gray-900 text-white w-full flex flex-col p-4">

//         {/* Toggle Button */}
//         <button
//           onClick={() => setIsOpen(!isOpen)}
//           className="mb-4 flex items-center gap-2 text-gray-300 hover:text-white"
//         >
//           <List size={24} />
//           {isOpen && <span>Menu</span>}
//         </button>

//         {/* Menu Items */}
//         <nav className="flex flex-col space-y-2">
//           {menuItems.map((item) => (
//             <div key={item.name}>
//               {item.subItems ? (
//                 <div>
//                   <button
//                     onClick={() => setOpenSubmenu(openSubmenu === item.name ? null : item.name)}
//                     className="flex items-center gap-3 p-3 rounded-md hover:bg-gray-700 w-full"
//                   >
//                     <item.icon size={24} />
//                     {isOpen && <span>{item.name}</span>}
//                     {isOpen && (openSubmenu === item.name ? <CaretUp size={16} /> : <CaretDown size={16} />)}
//                   </button>

//                   {/* Submenu Items */}
//                   {openSubmenu === item.name && (
//                     <div className="ml-6 flex flex-col space-y-1">
//                       {item.subItems.map((sub) => (
//                         <button
//                           key={sub.name}
//                           onClick={() => setActiveItem(sub.path)}
//                           className={`flex items-center p-2 rounded-md text-gray-300 hover:bg-gray-700 ${
//                             activeItem === sub.path ? "bg-gray-700" : ""
//                           }`}
//                         >
//                           {isOpen && <span>{sub.name}</span>}
//                         </button>
//                       ))}
//                     </div>
//                   )}
//                 </div>
//               ) : (
//                 <button
//                   onClick={() => setActiveItem(item.path)}
//                   className={`flex items-center gap-3 p-3 rounded-md hover:bg-gray-700 ${
//                     activeItem === item.path ? "bg-gray-700" : ""
//                   }`}
//                 >
//                   <item.icon size={24} />
//                   {isOpen && <span>{item.name}</span>}
//                 </button>
//               )}
//             </div>
//           ))}
//         </nav>

//         {/* Logout */}
//         <button className="mt-auto flex items-center gap-3 p-3 rounded-md text-red-400 hover:bg-red-800">
//           <SignOut size={24} />
//           {isOpen && <span>Logout</span>}
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Sidebar;

import {
  House,
  CaretDoubleLeft,
  CaretDoubleRight,
  CaretDown,
  CaretUp,
  SignOut,
  Gear,
  Icon,
  ChartLine,
} from "@phosphor-icons/react";
import { useState } from "react";
import { useLogoutUserMutation } from "../graphql/generated";
import { useNavigate } from "react-router-dom";

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
      { name: "Income", icon: ChartLine, path: "/income" },
      { name: "Analytics", icon: House, path: "/analytics" },
    ],
  },
  { name: "Notification", icon: House, path: "/goal" },
  {
    name: "Analytics",
    icon: ChartLine,
    path: "/goal",
    subItems: [
      { name: "Income", icon: ChartLine, path: "/income" },
      { name: "Analytics", icon: House, path: "/analytics" },
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

  return (
    <div
      className={`flex flex-col ${
        isOpen ? "w-50" : "w-12 items-center"
      } bg-gray-800 text-white text-sm px-3 py-3 gap-4 h-screen transition-transform duration-700`}
    >
      {isOpen ? (
        <div className="flex justify-between items-center gap-1 h-12">
          <img src="/vite.svg" alt="Logo" className="w-10" />
          <span className="text-lg">Xptracer</span>
          <button className="flex ml-auto" onClick={() => setIsOpen(!isOpen)}>
            <CaretDoubleLeft size={20} weight="duotone" />
          </button>
        </div>
      ) : (
        <button
          className="flex justify-center items-center gap-1 h-12"
          onClick={() => setIsOpen(!isOpen)}
        >
          <CaretDoubleRight size={20} weight="duotone" />
        </button>
      )}

      <hr className="border-gray-600 border-solid border-0.5" />

      {isOpen ? (
        <div className="flex flex-col">
          <p className="uppercase font-bold mb-4">Overview</p>
          <div className="flex flex-col gap-4 ">
            {menuItems.map((item) => (
              <div key={item.name} className="">
                {item.subItems ? (
                  <div className="">
                    <button
                      className="flex gap-2 w-full p-2"
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
                        <CaretUp
                          className="ml-auto"
                          size={20}
                          weight="duotone"
                        />
                      )}
                    </button>

                    {openItem === item.name ? (
                      <div className="flex flex-col ml-6 pt-1 space-y-1">
                        {item.subItems.map((subItem) => (
                          <button className="flex gap-2 hover:bg-gray-700 rounded-md p-1.5">
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
                  <button className="flex gap-2">
                    <item.icon size={20} />
                    <span>{item.name}</span>
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-4 mb-6">
          <div className="flex flex-col gap-4">
            {menuItems.map((item) => (
              <button>
                <item.icon size={20} />
              </button>
            ))}
          </div>
        </div>
      )}

      {isOpen ? (
        <div className="flex flex-col mt-auto gap-4 mb-6">
          <p className="uppercase font-bold">Account</p>
          <div className="flex flex-col gap-4">
            <button className="flex gap-2" onClick={() => {}}>
              <Gear size={20} />
              <span>Settings</span>
            </button>
            <button className="flex gap-2" onClick={() => handleLogout()}>
              <SignOut size={20} />
              <span>Log out</span>
            </button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col mt-auto gap-4 mb-6">
          <div className="flex flex-col gap-4">
            <button onClick={() => {}}>
              <Gear size={20} />
            </button>
            <button onClick={() => handleLogout()}>
              <SignOut size={20} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
