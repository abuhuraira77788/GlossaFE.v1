import { LayoutGrid } from "lucide-react";
import React from "react";
import { NavLink } from "react-router-dom";

interface SidebarItem {
  id: string;
  label: string;
  icon: string | React.ElementType; // string for image paths, component for Lucide
  path: string;
}

const mainItems: SidebarItem[] = [
  {
    id: "dashboard",
    label: "Dashboard",
    icon: "/bars/dashboard.svg",
    path: "/dashboard",
  },
  {
    id: "bookings",
    label: "Bookings",
    icon: "/bars/bookings.svg",
    path: "/bookings",
  },
  { id: "pos", label: "POS", icon: "/bars/pos.svg", path: "/pos" },
  {
    id: "website",
    label: "Website",
    icon: "/bars/website.svg",
    path: "/website",
  },
  {
    id: "reports",
    label: "Reports",
    icon: "/bars/reports.svg",
    path: "/reports",
  },
  { id: "manage", label: "Manage", icon: LayoutGrid, path: "/manage" }, // Lucide icon
  {
    id: "customers",
    label: "Customers",
    icon: "/bars/customers.svg",
    path: "/customers",
  },
  {
    id: "upgrades",
    label: "Upgrades",
    icon: "/bars/upgrades.svg",
    path: "/upgrades",
  },
];

const footerItem: SidebarItem = {
  id: "settings",
  label: "Settings",
  icon: "/bars/settings.svg",
  path: "/settings",
};

const Sidebar: React.FC = () => {
  const renderNavLink = (item: SidebarItem) => {
    const isString = typeof item.icon === "string";
    const IconComponent = !isString ? (item.icon as React.ElementType) : null;

    return (
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
              {isString ? (
                <img
                  src={item.icon as string}
                  alt={item.label}
                  className={`w-5 h-5 ${
                    isActive ? "filter brightness-0 invert" : ""
                  }`}
                />
              ) : (
                IconComponent && (
                  <IconComponent
                    size={20}
                    className={isActive ? "text-white" : "text-purple-600"}
                  />
                )
              )}
            </div>
            <span className="text-sm">{item.label}</span>
          </>
        )}
      </NavLink>
    );
  };

  return (
    <div className="w-56 h-screen bg-white p-4 flex flex-col justify-between">
      <nav className="space-y-2">{mainItems.map(renderNavLink)}</nav>
      <div className="mt-auto">{renderNavLink(footerItem)}</div>
    </div>
  );
};

export default Sidebar;
