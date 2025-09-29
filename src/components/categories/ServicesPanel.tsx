import {
  Plus,
  Edit2,
  Trash2,
  Clock,
  DollarSign,
  Users,
  CheckCircle2,
  XCircle,
} from "lucide-react";

interface Service {
  id: string;
  name: string;
  duration: number;
  price: number;
  staff: string[];
  status: "active" | "inactive";
  categoryId: string;
}

interface ServicesPanelProps {
  services: Service[];
  categoryName: string;
  onServiceAdd: () => void;
  onServiceEdit: (service: Service) => void;
  onServiceDelete: (id: string, name: string) => void;
}

export const ServicesPanel = ({
  services,
  categoryName,
  onServiceAdd,
  onServiceEdit,
  onServiceDelete,
}: ServicesPanelProps) => {
  return (
    <div className="h-full bg-[#F9F9F9]">
      {/* Header */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">{categoryName}</h2>
            <p className="text-sm text-gray-500 mt-1">
              {services.length} service{services.length !== 1 ? "s" : ""}{" "}
              available
            </p>
          </div>
          <button
            onClick={onServiceAdd}
            className="flex items-center bg-[#885ABB] hover:bg-[#6f47a2] text-white rounded-xl px-6 py-2 transition-colors"
          >
            <Plus className="h-4 w-4 mr-2" />
            Add Service
          </button>
        </div>
      </div>

      {/* Services Table */}
      <div className="p-6">
        {services.length === 0 ? (
          <div className="text-center py-12">
            <div className="mx-auto w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <Plus className="h-8 w-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              No Services Yet
            </h3>
            <p className="text-gray-500 mb-6">
              Start by adding your first service to this category.
            </p>
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            {/* Table Header */}
            <div className="bg-gray-50 px-6 py-3 border-b border-gray-200">
              <div className="grid grid-cols-12 gap-2 text-sm font-semibold text-gray-600">
                <div className="col-span-3">Service Name</div>
                <div className="col-span-2">Duration</div>
                <div className="col-span-2">Price</div>
                <div className="col-span-2">Staff</div>
                <div className="col-span-2">Status</div>
                <div className="col-span-1 text-right">Actions</div>
              </div>
            </div>

            {/* Table Body */}
            <div className="divide-y divide-gray-200">
              {services.map((service, index) => (
                <div
                  key={service.id}
                  className={`px-6 py-4 hover:bg-gray-50 transition-colors ${
                    index % 2 === 0 ? "bg-white" : "bg-gray-50"
                  }`}
                >
                  <div className="grid grid-cols-12 gap-2 items-center text-sm">
                    {/* Service Name */}
                    <div className="col-span-3 font-medium text-gray-900">
                      {service.name}
                    </div>

                    {/* Duration (simplified) */}
                    <div className="col-span-2 flex items-center text-gray-600">
                      <Clock className="h-4 w-4 mr-1 text-gray-400" />
                      {service.duration} min
                    </div>

                    {/* Price */}
                    <div className="col-span-2 flex items-center font-medium text-gray-600">
                      ${service.price}
                    </div>

                    {/* Staff */}
                    <div className="col-span-2 flex items-center text-gray-600">
                      <Users className="h-4 w-4 mr-1 text-gray-400" />
                      <span className="truncate">
                        {service.staff.join(", ")}
                      </span>
                    </div>

                    {/* Status */}
                    <div className="col-span-2">
                      {service.status === "active" ? (
                        <span className="inline-flex items-center text-sm font-medium text-gray-700">
                          <span className="h-2 w-2 rounded-full bg-green-500 mr-2" />
                          Active
                        </span>
                      ) : (
                        <span className="inline-flex items-center text-sm font-medium text-gray-700">
                          <span className="h-2 w-2 rounded-full bg-red-500 mr-2" />
                          Inactive
                        </span>
                      )}
                    </div>

                    {/* Actions */}
                    <div className="col-span-1 flex justify-end gap-2">
                      <button
                        onClick={() => onServiceEdit(service)}
                        className="p-1.5 text-gray-500 hover:text-[#885ABB] hover:bg-purple-50 rounded-lg transition-colors"
                      >
                        <Edit2 className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() =>
                          onServiceDelete(service.id, service.name)
                        }
                        className="p-1.5 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
