import React, { useState } from "react";
import { Eye, EyeOff, Check } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectItemIndicator,
} from "../../components/ui/select";

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-12">
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8">
        {/* Logo */}
        <div className="flex flex-col items-center mb-8">
          <img src="/glossa-auth.png" alt="Glossa" className="w-20 h-20 mb-3" />
          <h1 className="text-2xl font-semibold text-[#885ABB]">
            Create account
          </h1>
        </div>

        {/* Form */}
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Business name
            </label>
            <input
              type="text"
              placeholder="salonify"
              className="w-full mt-2 border border-gray-300 rounded-lg px-3 py-2.5 bg-white focus:ring-2 focus:ring-[#885ABB] focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Subdomain
            </label>
            <input
              type="text"
              placeholder="username.salonify.co.uk"
              className="w-full mt-2 border border-gray-300 rounded-lg px-3 py-2.5 bg-white focus:ring-2 focus:ring-[#885ABB] focus:outline-none"
            />
          </div>

          {/* Contact with code */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Contact
            </label>
            <div className="flex gap-3 mt-2">
              <Select defaultValue="+44">
                <SelectTrigger className="w-28 border border-gray-300 rounded-lg px-3 py-2.5 bg-white focus:ring-2 focus:ring-[#885ABB] focus:outline-none">
                  <SelectValue placeholder="+44" />
                </SelectTrigger>
                <SelectContent className="bg-white shadow-md rounded-lg">
                  {["+44", "+41", "+39", "+386", "+387", "+389"].map((code) => (
                    <SelectItem
                      key={code}
                      value={code}
                      className="relative cursor-pointer hover:bg-gray-100 px-3 py-2 rounded-md pr-8"
                    >
                      {code}
                      <SelectItemIndicator className="absolute right-3 inset-y-0 flex items-center text-[#885ABB]">
                        <Check className="w-4 h-4" strokeWidth={3} />
                      </SelectItemIndicator>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <input
                type="text"
                placeholder="7113332213"
                className="flex-1 border border-gray-300 rounded-lg px-3 py-2.5 bg-white focus:ring-2 focus:ring-[#885ABB] focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Address
            </label>
            <input
              type="text"
              placeholder="uk"
              className="w-full mt-2 border border-gray-300 rounded-lg px-3 py-2.5 bg-white focus:ring-2 focus:ring-[#885ABB] focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Website
            </label>
            <input
              type="text"
              placeholder="saloon.com"
              className="w-full mt-2 border border-gray-300 rounded-lg px-3 py-2.5 bg-white focus:ring-2 focus:ring-[#885ABB] focus:outline-none"
            />
          </div>

          {/* Categories */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Business categories
            </label>
            <Select>
              <SelectTrigger className="w-full mt-2 border border-gray-300 rounded-lg px-3 py-2.5 bg-white focus:ring-2 focus:ring-[#885ABB] focus:outline-none">
                <SelectValue placeholder="Select business category" />
              </SelectTrigger>
              <SelectContent className="bg-white shadow-md rounded-lg">
                {[
                  "Hair & Styling Salon",
                  "Nail Salon",
                  "Waxing Salon",
                  "Beauty Salon",
                  "Barbershop",
                ].map((category) => (
                  <SelectItem
                    key={category}
                    value={category.toLowerCase().replace(/\s+/g, "-")}
                    className="relative cursor-pointer hover:bg-gray-100 px-3 py-2 rounded-md pr-8"
                  >
                    {category}
                    <SelectItemIndicator className="absolute right-3 inset-y-0 flex items-center text-[#885ABB]">
                      <Check className="w-4 h-4" strokeWidth={3} />
                    </SelectItemIndicator>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Your name
            </label>
            <input
              type="text"
              placeholder="alex"
              className="w-full mt-2 border border-gray-300 rounded-lg px-3 py-2.5 bg-white focus:ring-2 focus:ring-[#885ABB] focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full mt-2 border border-gray-300 rounded-lg px-3 py-2.5 bg-white focus:ring-2 focus:ring-[#885ABB] focus:outline-none"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <div className="relative mt-2">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Create password"
                className="w-full border border-gray-300 rounded-lg px-3 py-2.5 pr-10 bg-white focus:ring-2 focus:ring-[#885ABB] focus:outline-none"
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
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Confirm password
            </label>
            <div className="relative mt-2">
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm password"
                className="w-full border border-gray-300 rounded-lg px-3 py-2.5 pr-10 bg-white focus:ring-2 focus:ring-[#885ABB] focus:outline-none"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-3 flex items-center text-gray-500"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? (
                  <EyeOff className="w-5 h-5 text-[#885ABB]" />
                ) : (
                  <Eye className="w-5 h-5 text-[#885ABB]" />
                )}
              </button>
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-[#885ABB] text-white py-3 rounded-lg font-semibold hover:bg-[#7647a8] transition"
          >
            CREATE ACCOUNT
          </button>
        </form>

        {/* Footer */}
        <p className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <a href="/login" className="text-[#885ABB] font-medium">
            Sign in
          </a>
        </p>
      </div>
    </div>
  );
}
