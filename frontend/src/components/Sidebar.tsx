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
  List,
  Folder,
  Gear,
  CaretUp,
  CaretDown,
} from "@phosphor-icons/react";
import { useState } from "react";

const menuItems = [
  { name: "Dashboard", icon: House, path: "/" },
  {
    name: "Projects",
    icon: Folder,
    subItems: [
      { name: "Web App", path: "/projects/web" },
      { name: "Mobile App", path: "/projects/mobile" },
    ],
  },
  { name: "Settings", icon: Gear, path: "/settings" },
];

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  return (
    <div
      className={`h-screen bg-gray-900 text-white ${isOpen ? "w-50" : "w-13"}`}
    >
      <button
        className="text-gray-300 hover:text-white flex mb-4"
        onClick={() => setIsOpen(!isOpen)}
      >
        <List size={24} />
        {isOpen && <span>Menu</span>}
      </button>

      <nav>
        {menuItems.map((item) => (
          <div key={item.name}>
            <button className="flex" onClick={() => setOpenSubmenu(openSubmenu == item.name ? null : item.name)}>
              <item.icon size={24} />
              {isOpen && <span>{item.name}</span>}
              {isOpen &&
                (openSubmenu == item.name ? (
                  <CaretUp size={16} />
                ) : (
                  <CaretDown size={16} />
                ))}
            </button>

            {openSubmenu == item.name && (
              <div className="flex flex-col">
                {item.subItems?.map((subItem) => (
                  <button
                    key={subItem.name}
                    className=""
                    onClick={() => setActiveItem(subItem.path)}
                  >
                    {isOpen && <span>{subItem.name}</span>}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
