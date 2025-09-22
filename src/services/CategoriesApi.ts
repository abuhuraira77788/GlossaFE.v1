import api from "./api";
import { Category } from "../types/categories";

export async function getCategories(): Promise<Category[]> {
  const res = await api.get("/admin/categories");
  return res.data;
}

export async function createCategory(
  data: Partial<Category>
): Promise<Category> {
  const res = await api.post("/admin/categories", data);
  return res.data;
}

export async function getCategoryById(id: string): Promise<Category> {
  const res = await api.get(`/admin/categories/${id}`);
  return res.data;
}

export async function updateCategory(
  id: string,
  data: Partial<Category>
): Promise<Category> {
  const res = await api.post(`/admin/categories/${id}`, data);
  return res.data;
}

export async function deleteCategory(id: string): Promise<void> {
  await api.delete(`/admin/categories/${id}`);
}

export async function bulkUploadCategories(data: FormData): Promise<any> {
  const res = await api.post("/admin/categories/bulk-upload", data, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return res.data;
}

export async function exportCategories(): Promise<Blob> {
  const res = await api.get("/admin/categories/export", {
    responseType: "blob",
  });
  return res.data;
}

export async function flushCategories(): Promise<void> {
  await api.delete("/admin/categories/flush");
}
