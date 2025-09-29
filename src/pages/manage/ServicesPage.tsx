"use client";

import { useState, useRef, useEffect } from "react";
import { Search, SlidersHorizontal, ChevronDown } from "lucide-react";
import { CategoriesSidebar } from "../../components/categories/CategoriesSidebar";
import { ServicesPanel } from "../../components/categories/ServicesPanel";
import { CategoryModal } from "../../components/categories/CategoryModal";
import { ServiceModal } from "../../components/categories/ServiceModal";
import { BundleModal } from "../../components/categories/BundleModal";
import { DeleteConfirmModal } from "../../components/categories/DeleteConfirmModal";
import { FiltersModal } from "../../components/categories/FiltersModal";
import { useNavigate } from "react-router-dom";

export default function ServicesPage() {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [servicesOptionsOpen, setServicesOptionsOpen] = useState(false);

  const navigate = useNavigate();

  // --- Data (static for now) ---
  const [categories, setCategories] = useState([
    { id: "1", name: "Hair Styles" },
    { id: "2", name: "Colour" },
  ]);
  const [activeCategory, setActiveCategory] = useState("1");

  const [services, setServices] = useState([
    {
      id: "s1",
      name: "Blow Dry",
      duration: 40,
      price: 15,
      staff: ["Sarah", "Mike"],
      status: "active" as "active" | "inactive",
      categoryId: "1",
      type: "single",
    },
    {
      id: "s2",
      name: "Cut & Finish",
      duration: 45,
      price: 20,
      staff: ["Lisa"],
      status: "inactive" as "active" | "inactive",
      categoryId: "1",
      type: "single",
    },
  ]);

  // --- Filters ---
  const [showFiltersModal, setShowFiltersModal] = useState(false);
  const [filters, setFilters] = useState({
    status: "all",
    type: "all",
    teamMember: "all",
    onlineBookings: "all",
    commissions: "all",
  });

  // --- Combine search + filters ---
  const filteredServices = services
    .filter((s) => s.categoryId === activeCategory)
    .filter((s) => s.name.toLowerCase().includes(searchTerm.toLowerCase()))
    .filter((s) =>
      filters.status === "all" ? true : s.status === filters.status
    )
    .filter((s) => (filters.type === "all" ? true : s.type === filters.type))
    .filter((s) =>
      filters.teamMember === "all" ? true : s.staff.includes(filters.teamMember)
    );
  // (onlineBookings + commissions can be used once those fields exist on services)

  // --- Modal state ---
  const [showCategoryModal, setShowCategoryModal] = useState(false);
  const [categoryMode, setCategoryMode] = useState<"add" | "edit">("add");
  const [editingCategory, setEditingCategory] = useState<any>(null);

  const [showServiceModal, setShowServiceModal] = useState(false);
  const [serviceMode, setServiceMode] = useState<"add" | "edit">("add");
  const [editingService, setEditingService] = useState<any>(null);

  const [showBundleModal, setShowBundleModal] = useState(false);

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteTarget, setDeleteTarget] = useState<{
    type: "category" | "service";
    id: string;
    name: string;
  } | null>(null);

  // --- Close dropdown if clicked outside ---
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // --- Category Handlers ---
  const handleCategoryAdd = () => {
    setCategoryMode("add");
    setEditingCategory(null);
    setShowCategoryModal(true);
  };

  const handleCategoryEdit = (category: any) => {
    setCategoryMode("edit");
    setEditingCategory(category);
    setShowCategoryModal(true);
  };

  const handleCategoryDelete = (id: string, name: string) => {
    setDeleteTarget({ type: "category", id, name });
    setShowDeleteModal(true);
  };

  // --- Service Handlers ---
  const handleServiceAdd = () => {
    setServiceMode("add");
    setEditingService(null);
    setShowServiceModal(true);
  };

  const handleServiceEdit = (service: any) => {
    setServiceMode("edit");
    setEditingService(service);
    setShowServiceModal(true);
  };

  const handleServiceDelete = (id: string, name: string) => {
    setDeleteTarget({ type: "service", id, name });
    setShowDeleteModal(true);
  };

  // --- Bundle Handlers ---
  const handleBundleAdd = () => {
    setShowBundleModal(true);
  };

  return (
    <div className="flex flex-col w-full h-full bg-gray-50">
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-5 bg-white relative">
        <h1 className="text-[24px] font-semibold text-[#885ABB]">
          Services and Categories
        </h1>

        {/* Add button + dropdown */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setOpen(!open)}
            className="bg-[#885ABB] hover:bg-[#6f47a2] text-white px-6 py-3 rounded-lg text-[16px] font-semibold flex items-center gap-2"
          >
            Add <ChevronDown className="w-4 h-4" strokeWidth={3} />
          </button>

          {open && (
            <div className="absolute right-0 mt-2 w-56 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
              <ul className="flex flex-col py-2">
                <li>
                  <button
                    onClick={() => {
                      handleServiceAdd();
                      setOpen(false);
                    }}
                    className="w-full text-left px-6 py-2.5 hover:bg-gray-50 text-[15px]"
                  >
                    Single Service
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      handleBundleAdd();
                      setOpen(false);
                    }}
                    className="w-full text-left px-6 py-2.5 hover:bg-gray-50 text-[15px]"
                  >
                    Bundle
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      handleCategoryAdd();
                      setOpen(false);
                    }}
                    className="w-full text-left px-6 py-2.5 hover:bg-gray-50 text-[15px]"
                  >
                    Category
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Toolbar */}
      <div className="flex items-center gap-3 px-6 py-4 bg-gray-50 w-[90%]">
        {/* Search */}
        <div className="relative w-1/2">
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full border border-[#885ABB] rounded-lg pl-4 pr-4 py-3 text-[15px] 
                 placeholder-gray-500 focus:ring-2 focus:ring-[#885ABB] focus:outline-none"
          />
          <Search
            className="absolute right-3 top-3 w-5 h-5 text-[#885ABB]"
            strokeWidth={3}
          />
        </div>

        {/* Filters */}
        <button
          onClick={() => setShowFiltersModal(true)}
          className="flex justify-between items-center w-[20%] border border-[#885ABB] rounded-lg px-5 py-3 text-[15px] font-medium text-gray-800 hover:bg-purple-50"
        >
          <span>Filters</span>
          <SlidersHorizontal
            className="w-4 h-4 text-[#885ABB]"
            strokeWidth={3}
          />
        </button>

        {/* Services Options */}
        <div className="relative w-[20%]">
          <button
            onClick={() => setServicesOptionsOpen(!servicesOptionsOpen)}
            className="flex justify-between items-center w-full border border-[#885ABB] rounded-lg px-5 py-3 text-[15px] font-medium text-gray-800 hover:bg-purple-50"
          >
            <span>Services Options</span>
            <ChevronDown
              className={`w-4 h-4 text-[#885ABB] transition-transform duration-200 ${
                servicesOptionsOpen ? "rotate-180" : ""
              }`}
              strokeWidth={4}
            />
          </button>

          {servicesOptionsOpen && (
            <div className="absolute right-0 mt-2 w-56 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
              <ul className="flex flex-col py-2">
                {/* <li>
          <button className="w-full text-left px-6 py-2.5 hover:bg-gray-50 text-[15px]">
            Quick Booking Link
          </button>
        </li>
        <li>
          <button className="w-full text-left px-6 py-2.5 hover:bg-gray-50 text-[15px]">
            Set Menu Order
          </button>
        </li> */}
                <li>
                  <button
                    onClick={() => {
                      navigate("/service-settings");
                      setServicesOptionsOpen(false);
                    }}
                    className="w-full text-left px-6 py-2.5 hover:bg-gray-50 text-[15px]"
                  >
                    Settings
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-1 px-6 py-6 gap-6">
        <div className="w-72">
          <CategoriesSidebar
            categories={categories}
            activeCategory={activeCategory}
            onCategorySelect={setActiveCategory}
            onCategoryAdd={handleCategoryAdd}
            onCategoryEdit={handleCategoryEdit}
            onCategoryDelete={handleCategoryDelete}
          />
        </div>

        <div className="flex-1">
          <ServicesPanel
            services={filteredServices}
            categoryName={
              categories.find((c) => c.id === activeCategory)?.name ||
              "Services"
            }
            onServiceAdd={handleServiceAdd}
            onServiceEdit={handleServiceEdit}
            onServiceDelete={handleServiceDelete}
          />
        </div>
      </div>

      {/* Modals */}
      {showFiltersModal && (
        <FiltersModal
          isOpen={showFiltersModal}
          onClose={() => setShowFiltersModal(false)}
          onApply={(newFilters) => setFilters(newFilters)}
          teamMembers={["Sarah", "Mike", "Lisa"]}
        />
      )}

      {showCategoryModal && (
        <CategoryModal
          isOpen={showCategoryModal}
          mode={categoryMode}
          category={editingCategory}
          onClose={() => setShowCategoryModal(false)}
          onSave={(data) => {
            if (categoryMode === "add") {
              setCategories([
                ...categories,
                { id: Date.now().toString(), name: data.name },
              ]);
            } else {
              setCategories(
                categories.map((c) =>
                  c.id === editingCategory.id ? { ...c, name: data.name } : c
                )
              );
            }
            setShowCategoryModal(false);
          }}
        />
      )}

      {showServiceModal && (
        <ServiceModal
          isOpen={showServiceModal}
          mode={serviceMode}
          service={editingService}
          onClose={() => setShowServiceModal(false)}
          onSave={(data) => {
            if (serviceMode === "add") {
              setServices([
                ...services,
                {
                  ...data,
                  id: Date.now().toString(),
                  categoryId: activeCategory,
                  type: "single",
                },
              ]);
            } else {
              setServices(
                services.map((s) =>
                  s.id === editingService.id ? { ...s, ...data } : s
                )
              );
            }
            setShowServiceModal(false);
          }}
        />
      )}

      {showBundleModal && (
        <BundleModal
          isOpen={showBundleModal}
          onClose={() => setShowBundleModal(false)}
          onSave={(data) => {
            setServices([...services, { ...data }]);
            setShowBundleModal(false);
          }}
          categories={categories}
          services={services}
        />
      )}

      {showDeleteModal && deleteTarget && (
        <DeleteConfirmModal
          isOpen={showDeleteModal}
          type={deleteTarget.type}
          name={deleteTarget.name}
          onClose={() => setShowDeleteModal(false)}
          onConfirm={() => {
            if (deleteTarget.type === "category") {
              setCategories(categories.filter((c) => c.id !== deleteTarget.id));
              setServices(
                services.filter((s) => s.categoryId !== deleteTarget.id)
              );
            } else {
              setServices(services.filter((s) => s.id !== deleteTarget.id));
            }
            setShowDeleteModal(false);
          }}
        />
      )}
    </div>
  );
}
