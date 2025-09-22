import React, { useState } from "react";
import { Search, ChevronDown } from "lucide-react";
import { Button } from "./ui/Button";
import { Input } from "./ui/input";
import { useAuth } from "../auth/AuthContext"; // adjust path
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [searchValue, setSearchValue] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const notificationCount = 3;

  console.log("AuthContext file loaded:", __filename);

  const { user, logout } = useAuth();
  console.log("Navbar sees user:", user);

  const navigate = useNavigate();

  return (
    <nav className="px-6 py-3 shadow-lg" style={{ backgroundColor: "#402b69" }}>
      <div className="flex items-center justify-between w-full">
        {/* Logo */}
        <div
          className="flex items-center cursor-pointer"
          onClick={() => navigate("/")}
        >
          <img src="/logo.svg" alt="Glossa Logo" className="h-9 w-auto" />
        </div>

        <div className="flex items-center space-x-4 relative">
          {/* Search Bar */}
          <div className="relative w-80 ml-auto hidden md:block">
            <Input
              type="text"
              placeholder="bookings, customers, or products"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              className="w-full pr-12 pl-4 py-2 rounded-full border-0 focus:ring-2 focus:ring-white/20 text-sm font-medium"
            />
            <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white" />
          </div>

          {/* Notifications */}
          <div className="relative">
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:bg-white/10 relative rounded-md w-10 h-10 flex items-center justify-center"
            >
              <img
                src="/bars/ring.svg"
                alt="Notifications"
                className="w-5 h-5"
              />
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
            onClick={() => navigate("/")}
            className="text-white hover:bg-white/10 p-2 border border-white/40 rounded-md w-10 h-10 flex items-center justify-center"
          >
            <img src="/bars/home.svg" alt="Home" className="w-5 h-5" />
          </Button>

          {/* User Menu */}
          <div className="relative">
            <Button
              variant="ghost"
              onClick={() => setMenuOpen((prev) => !prev)}
              className="text-white hover:bg-white/10 border border-white/40 rounded-md w-auto px-3 h-10 flex items-center justify-center gap-2"
            >
              <img src="/bars/profile.svg" alt="Profile" className="w-5 h-5" />
              <ChevronDown className="w-4 h-4" />
            </Button>

            {/* Dropdown */}
            {menuOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg border p-2 z-50">
                {user ? (
                  <button
                    onClick={() => {
                      logout();
                      setMenuOpen(false);
                    }}
                    className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
                  >
                    Sign Out
                  </button>
                ) : (
                  <>
                    <button
                      onClick={() => {
                        navigate("/login");
                        setMenuOpen(false);
                      }}
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
                    >
                      Login
                    </button>
                    <button
                      onClick={() => {
                        navigate("/signup");
                        setMenuOpen(false);
                      }}
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
                    >
                      Sign Up
                    </button>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
