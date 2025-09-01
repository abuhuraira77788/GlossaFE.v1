import React, { useState } from "react";
import { Search, Bell, ChevronDown, Home, User } from "lucide-react";
import { Button } from "./ui/Button";
import { Input } from "./ui/input";

const Navbar = () => {
  const [searchValue, setSearchValue] = useState("");
  const notificationCount = 3;

  return (
    <nav className="px-6 py-3 shadow-lg" style={{ backgroundColor: "#402b69" }}>
      <div className="flex items-center justify-between w-full">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="/glossa-white.png"
            alt="Glossa Logo"
            className="h-8 w-auto"
          />
        </div>

        <div className="flex items-center space-x-4">
          {/* Search Bar */}
          <div className="relative w-80 ml-auto">
            <Input
              type="text"
              placeholder="bookings, customers, or products"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              className="w-full pr-12 pl-4 py-2 rounded-full border-0 focus:ring-2 focus:ring-white/20 text-sm font-medium"
            />
            <Search
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5"
              style={{ color: "#402b69" }}
            />
          </div>

          {/* Notifications */}
          <div className="relative">
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:bg-white/10 relative"
            >
              <Bell className="w-6 h-6" />
              {notificationCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-green-500 text-white w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold">
                  {notificationCount}
                </span>
              )}
            </Button>
          </div>

          {/* Home Button */}
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:bg-white/10 p-2 border border-white/40 rounded-md w-10 h-10 flex items-center justify-center"
          >
            <Home className="w-5 h-5" />
          </Button>

          {/* User Menu */}
          <Button
            variant="ghost"
            className="text-white hover:bg-white/10 border border-white/40 rounded-md w-auto px-3 h-10 flex items-center justify-center"
          >
            <User className="w-5 h-5" />
            <ChevronDown className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
