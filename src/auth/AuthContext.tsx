"use client";
import React, { createContext, useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import {
  login as loginApi,
  logout as logoutApi,
  register as registerApi,
} from "../services/auth";

interface AuthContextType {
  user: any;
  login: (email: string, password: string) => Promise<void>;
  signup: (data: any) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<any>(null);
  const navigate = useNavigate();

  console.log("AuthContext file loaded:", __filename);

  useEffect(() => {
    console.log("AuthProvider current user state:", user);
  }, [user]);

  // Load persisted user
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = async (email: string, password: string) => {
    const { user: loggedInUser } = await loginApi(email, password);
    if (loggedInUser) {
      setUser(loggedInUser);
      localStorage.setItem("user", JSON.stringify(loggedInUser));

      // small tick to allow state propagation
      setTimeout(() => navigate("/dashboard"), 0);
    }
  };

  const signup = async (formData: any) => {
    const { user: registeredUser } = await registerApi(formData);
    console.log("📝 User from register:", registeredUser);

    if (registeredUser) {
      setUser(registeredUser);
      localStorage.setItem("user", JSON.stringify(registeredUser));
    }

    navigate("/");
  };

  const logout = async () => {
    await logoutApi();
    setUser(null);
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside AuthProvider");
  return ctx;
};
