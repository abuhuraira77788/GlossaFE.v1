import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

// Pages
import Dashboard from "../pages/Dashboard";
import Bookings from "../pages/Bookings";
import POS from "../pages/POS";
import Website from "../pages/Website";
import Reports from "../pages/Reports";
import Manage from "../pages/Manage";
import Customers from "../pages/Customers";
import Upgrades from "../pages/Upgrades";
import Settings from "../pages/Settings";

const AppRoutes = () => {
  return (
    <Router>
      <div className="flex h-screen">
        <Sidebar />
        <div className="flex flex-col flex-1">
          <Navbar />
          <div className="flex-1 bg-gray-100 p-6 overflow-y-auto">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/bookings" element={<Bookings />} />
              <Route path="/pos" element={<POS />} />
              <Route path="/website" element={<Website />} />
              <Route path="/reports" element={<Reports />} />
              <Route path="/manage" element={<Manage />} />
              <Route path="/customers" element={<Customers />} />
              <Route path="/upgrades" element={<Upgrades />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default AppRoutes;
