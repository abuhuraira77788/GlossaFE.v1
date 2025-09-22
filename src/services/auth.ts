import api from "./api";

// LOGIN
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
  console.log("🔎 Raw login response:", response.data);

  const token = response.data?.data?.token;
  const user = response.data?.data?.user;

  console.log("👉 Extracted user in auth.ts:", user);

  if (token) localStorage.setItem("token", token);

  return { token, user };
};

// LOGOUT
export const logout = async () => {
  try {
    await api.post("/logout");
  } finally {
    localStorage.removeItem("token");
  }
};

// REGISTER
export const register = async (data: any) => {
  const response = await api.post("/register", data);

  const token = response.data?.data?.token;
  const user = response.data?.data?.user;

  if (token) {
    localStorage.setItem("token", token);
  }

  return { token, user };
};
