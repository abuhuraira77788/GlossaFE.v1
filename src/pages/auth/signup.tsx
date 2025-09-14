"use client";
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
import { register } from "../../services/auth";

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Form state
  const [businessName, setBusinessName] = useState("");
  const [subdomain, setSubdomain] = useState("");
  const [callingCode, setCallingCode] = useState("+44");
  const [contact, setContact] = useState("");
  const [address, setAddress] = useState("");
  const [website, setWebsite] = useState("");
  const [category, setCategory] = useState("1");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // UI state
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const payload = {
        business_name: businessName,
        subdomain,
        calling_code: callingCode.replace("+", ""),
        contact: callingCode + " " + contact,
        address,
        website,
        name,
        business_categories: category,
        email,
        password,
        password_confirmation: confirmPassword,
      };

      const res = await register(payload);
      console.log("Signup success:", res);

      // redirect to dashboard
      window.location.href = "/dashboard";
    } catch (err: any) {
      console.error(err.response?.data || err.message);
      setError(err.response?.data?.message || "Signup failed");
    } finally {
      setLoading(false);
    }
  };

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
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Business name
            </label>
            <input
              type="text"
              placeholder="salonify"
              value={businessName}
              onChange={(e) => setBusinessName(e.target.value)}
              required
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
              value={subdomain}
              onChange={(e) => setSubdomain(e.target.value)}
              required
              className="w-full mt-2 border border-gray-300 rounded-lg px-3 py-2.5 bg-white focus:ring-2 focus:ring-[#885ABB] focus:outline-none"
            />
          </div>

          {/* Contact with code */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Contact
            </label>
            <div className="flex gap-3 mt-2">
              <Select value={callingCode} onValueChange={setCallingCode}>
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
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                required
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
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
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
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
              required
              className="w-full mt-2 border border-gray-300 rounded-lg px-3 py-2.5 bg-white focus:ring-2 focus:ring-[#885ABB] focus:outline-none"
            />
          </div>

          {/* Categories */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Business categories
            </label>
            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger className="w-full mt-2 border border-gray-300 rounded-lg px-3 py-2.5 bg-white focus:ring-2 focus:ring-[#885ABB] focus:outline-none">
                <SelectValue placeholder="Select business category" />
              </SelectTrigger>
              <SelectContent className="bg-white shadow-md rounded-lg">
                {[
                  { id: "1", label: "Hair & Styling Salon" },
                  { id: "2", label: "Nail Salon" },
                  { id: "3", label: "Waxing Salon" },
                  { id: "4", label: "Beauty Salon" },
                  { id: "5", label: "Barbershop" },
                ].map((cat) => (
                  <SelectItem
                    key={cat.id}
                    value={cat.id}
                    className="relative cursor-pointer hover:bg-gray-100 px-3 py-2 rounded-md pr-8"
                  >
                    {cat.label}
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
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
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
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
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

          {/* Error */}
          {error && (
            <p className="text-red-500 text-sm font-medium text-center">
              {error}
            </p>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#885ABB] text-white py-3 rounded-lg font-semibold hover:bg-[#7647a8] transition"
          >
            {loading ? "Creating..." : "CREATE ACCOUNT"}
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
