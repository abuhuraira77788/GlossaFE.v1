export interface Category {
  id: string;
  name: string;
  description?: string;
  status: "active" | "inactive";
  image?: string;
  created_at?: string;
  updated_at?: string;
}
