"use client";
import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { login } from "../../services/auth";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await login(email, password, remember);
      console.log("Login success:", res);

      window.location.href = "/dashboard";
    } catch (err: any) {
      setError(err.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8">
        <div className="flex flex-col items-center mb-8">
          <img src="/glossa-auth.png" alt="Glossa" className="w-20 h-20 mb-3" />
          <h1 className="text-2xl font-semibold text-[#885ABB]">Sign in</h1>
        </div>

        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mt-2 border border-gray-300 rounded-lg px-3 py-2.5 bg-white focus:ring-2 focus:ring-[#885ABB]"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <div className="relative mt-2">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-3 py-2.5 pr-10 bg-white focus:ring-2 focus:ring-[#885ABB]"
                required
              />
              <button
                type="button"
                className="absolute inset-y-0 right-3 flex items-center text-gray-500"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOff className="w-5 h-5 text-[#885ABB]" />
                ) : (
                  <Eye className="w-5 h-5 text-[#885ABB]" />
                )}
              </button>
            </div>
            <div className="flex justify-between items-center mt-2">
              <label className="flex items-center text-sm text-gray-600">
                <input
                  type="checkbox"
                  checked={remember}
                  onChange={(e) => setRemember(e.target.checked)}
                  className="h-4 w-4 text-[#885ABB] border-gray-300 rounded focus:ring-[#885ABB]"
                />
                <span className="ml-2">Remember me</span>
              </label>
              <a
                href="/forgot-password"
                className="text-sm text-[#885ABB] font-medium hover:underline"
              >
                Forgot Password?
              </a>
            </div>
          </div>

          {error && (
            <p className="text-red-500 text-sm font-medium text-center">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#885ABB] text-white py-3 rounded-lg font-semibold hover:bg-[#7647a8] transition"
          >
            {loading ? "Signing in..." : "SIGN IN"}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-600">
          No account?{" "}
          <a href="/signup" className="text-[#885ABB] font-medium">
            Create one
          </a>
        </p>
      </div>
    </div>
  );
}
