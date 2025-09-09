import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8">
        {/* Logo */}
        <div className="flex flex-col items-center mb-8">
          <img src="/glossa-auth.png" alt="Glossa" className="w-20 h-20 mb-3" />
          <h1 className="text-2xl font-semibold text-[#885ABB]">Sign in</h1>
        </div>

        {/* Form */}
        <form className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full mt-2 border border-gray-300 rounded-lg px-3 py-2.5 bg-white focus:ring-2 focus:ring-[#885ABB]"
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
                className="w-full border border-gray-300 rounded-lg px-3 py-2.5 pr-10 bg-white focus:ring-2 focus:ring-[#885ABB]"
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

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-[#885ABB] text-white py-3 rounded-lg font-semibold hover:bg-[#7647a8] transition"
          >
            SIGN IN
          </button>
        </form>

        {/* Footer */}
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
