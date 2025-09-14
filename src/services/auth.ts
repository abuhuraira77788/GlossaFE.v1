import api from "./api";

//  LOGIN
export const login = async (
  email: string,
  password: string,
  rememberMe = true
) => {
  const response = await api.post("/login", {
    email,
    password,
    remember_me: rememberMe,
  });

  // store token if backend sends it
  if (response.data?.token) {
    localStorage.setItem("token", response.data.token);
  }

  return response.data;
};

//  LOGOUT
export const logout = async () => {
  await api.post("/logout");
  localStorage.removeItem("token");
};

//  REGISTER
export const register = async (data: {
  business_name: string;
  subdomain: string;
  calling_code: string;
  contact: string;
  address: string;
  website: string;
  name: string;
  business_categories: string;
  email: string;
  password: string;
  password_confirmation: string;
}) => {
  const response = await api.post("/register", data);

  // store token if backend sends it
  if (response.data?.token) {
    localStorage.setItem("token", response.data.token);
  }

  return response.data;
};
