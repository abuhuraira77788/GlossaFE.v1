import { Plus, Search } from "lucide-react";
import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";

interface FormTemplatesHeaderProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  itemsPerPage: string;
  onItemsPerPageChange: (value: string) => void;
  onCreateNew: () => void;
}

const FormTemplatesHeader = ({
  searchQuery,
  onSearchChange,
  itemsPerPage,
  onItemsPerPageChange,
  onCreateNew,
}: FormTemplatesHeaderProps) => {
  return (
    <div
      className="mb-6 flex flex-col items-start justify-between gap-4 rounded-xl 
               bg-white p-6 sm:flex-row sm:items-center
               border border-transparent transition-shadow hover:shadow-sm hover:border-[#BBB9F3]"
    >
      <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-[#402B69]">Show</span>
          <Select value={itemsPerPage} onValueChange={onItemsPerPageChange}>
            <SelectTrigger className="w-20">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="10">10</SelectItem>
              <SelectItem value="25">25</SelectItem>
              <SelectItem value="50">50</SelectItem>
              <SelectItem value="100">100</SelectItem>
            </SelectContent>
          </Select>
          <span className="text-sm text-gray-500">entries</span>
        </div>

        <div className="relative">
          <Search
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />
          <Input
            placeholder="Search templates..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-64 pl-10 md:w-80"
          />
        </div>
      </div>

      <Button
        onClick={onCreateNew}
        className="bg-[#885ABB] text-white hover:opacity-90"
      >
        <Plus size={18} className="mr-2" />
        Create New
      </Button>
    </div>
  );
};

export default FormTemplatesHeader;
