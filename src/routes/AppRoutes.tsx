import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import ReportsSubSidebar from "../components/ReportsSubSidebar";

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
import CashUpDetail from "../components/CashUpDetail";
import DailySalesPage from "../pages/reports/DailySalesPage";
import ManageSubSidebar from "../components/ManageSubSidebar";
import Signup from "../pages/auth/signup";
import Login from "../pages/auth/login";
import ConsultationsPage from "../pages/Consultations";
import FormTemplatesPage from "../pages/FormTemplatePage";
import { AuthProvider, useAuth } from "../auth/AuthContext";
import CategoriesPage from "../pages/manage/CategoriesPage";
import ServiceSettings from "../pages/ServiceSettings";

// -------------------------------
// Layout wrapper (for app pages only)
// -------------------------------
const Layout = () => {
  const location = useLocation();

  const isBookings = location.pathname.startsWith("/bookings");
  const isReports =
    location.pathname.startsWith("/reports") ||
    location.pathname.startsWith("/cashup");
  const isDailySales = location.pathname.startsWith("/daily-sales");
  const isManage = location.pathname.startsWith("/manage");
  const isServices = location.pathname.startsWith("/services");
  const isCategories = location.pathname.startsWith("/categories");

  return (
    <div className="flex h-screen">
      {/* Main Sidebar */}
      <Sidebar />

      {/* Sub Sidebar only for Reports */}
      {(isReports || isDailySales) && <ReportsSubSidebar />}

      {/* Sub Sidebar only for Manage */}
      {(isManage || isServices || isCategories) && <ManageSubSidebar />}

      <div className="flex flex-col flex-1">
        <Navbar />

        <div
          className={`flex-1 bg-gray-100 overflow-y-auto ${
            isDailySales || isManage
              ? "pt-0 pr-0 pb-3 pl-0"
              : isReports
              ? "pt-0 pr-3 pb-3 pl-3"
              : isBookings
              ? "pt-0 pr-6 pb-6 pl-6"
              : "pt-4 pr-6 pb-6 pl-6"
          }`}
        >
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/bookings" element={<Bookings />} />
            <Route path="/pos" element={<POS />} />
            <Route path="/website" element={<Website />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/consultation" element={<ConsultationsPage />} />
            <Route
              path="/form-templates"
              element={
                <FormTemplatesPage
                  onNavigateBack={() => window.history.back()}
                />
              }
            />
            <Route path="/cashup/:id" element={<CashUpDetail />} />
            <Route path="/daily-sales" element={<DailySalesPage />} />
            <Route path="/manage" element={<Manage />} />
            <Route path="/categories" element={<CategoriesPage />} />
            <Route path="/service-settings" element={<ServiceSettings />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/upgrades" element={<Upgrades />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

// -------------------------------
// Main AppRoutes
// -------------------------------
const AppRoutes = () => {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          {/* Auth routes (no sidebar/navbar) */}
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />

          {/* App routes (with sidebar/navbar via Layout) */}
          <Route path="/*" element={<Layout />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
};

export default AppRoutes;
