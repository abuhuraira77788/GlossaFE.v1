import React from "react";
import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  BookOpenText,
  ShoppingBasket,
  Globe2,
  BarChart3,
  LayoutGrid,
  UserRound,
  ArrowUp,
  Cog,
} from "lucide-react";

interface SidebarItem {
  id: string;
  label: string;
  icon: React.ElementType;
  path: string;
}

const mainItems: SidebarItem[] = [
  {
    id: "dashboard",
    label: "Dashboard",
    icon: LayoutDashboard,
    path: "/dashboard",
  },
  { id: "bookings", label: "Bookings", icon: BookOpenText, path: "/bookings" },
  { id: "pos", label: "POS", icon: ShoppingBasket, path: "/pos" },
  { id: "website", label: "Website", icon: Globe2, path: "/website" },
  { id: "reports", label: "Reports", icon: BarChart3, path: "/reports" },
  { id: "manage", label: "Manage", icon: LayoutGrid, path: "/manage" },
  { id: "customers", label: "Customers", icon: UserRound, path: "/customers" },
  { id: "upgrades", label: "Upgrades", icon: ArrowUp, path: "/upgrades" },
];

const footerItem: SidebarItem = {
  id: "settings",
  label: "Settings",
  icon: Cog,
  path: "/settings",
};

const Sidebar: React.FC = () => {
  const renderNavLink = (item: SidebarItem) => (
    <NavLink
      key={item.id}
      to={item.path}
      className={({ isActive }) =>
        `flex items-center space-x-3 px-3 py-2 rounded-md cursor-pointer transition 
        ${
          isActive
            ? "bg-purple-100 text-purple-700 font-semibold"
            : "text-black hover:bg-gray-100"
        }`
      }
    >
      {({ isActive }) => (
        <>
          <div
            className={`w-9 h-9 flex items-center justify-center rounded-md 
            ${isActive ? "bg-purple-600" : "bg-gray-100"}`}
          >
            <item.icon
              size={20}
              className={isActive ? "text-white" : "text-purple-600"}
            />
          </div>
          <span className="text-sm">{item.label}</span>
        </>
      )}
    </NavLink>
  );

  return (
    <div className="w-56 h-screen bg-white p-4 flex flex-col justify-between">
      <nav className="space-y-2">{mainItems.map(renderNavLink)}</nav>
      <div className="mt-auto">{renderNavLink(footerItem)}</div>
    </div>
  );
};

export default Sidebar;
