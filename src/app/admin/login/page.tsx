"use client"

import { useState } from "react";

export default function AdminAuthPage() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [form, setForm] = useState({ email: "", password: "", confirm: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Log form data
    console.log(isSignUp ? "Sign Up Data:" : "Sign In Data:", form);
    // Reset form (optional)
    setForm({ email: "", password: "", confirm: "" });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-100 via-amber-50 to-amber-100 relative">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-amber-400/20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-300/15 rounded-full blur-3xl -z-10" />

      <div className="w-full max-w-md bg-white/95 rounded-2xl shadow-2xl p-8 flex flex-col items-center">
        {/* Logo/Branding */}
        <div className="bg-gradient-to-br from-amber-500 to-amber-600 rounded-full p-4 mb-6 shadow-lg">
          <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path d="M12 15v2m0-6v2m0 4a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">La Perla Negra</h1>
          <div className="flex items-center justify-center mb-3">
            <div className="h-[2px] w-8 bg-gradient-to-r from-transparent via-amber-500 to-transparent" />
            <span className="mx-3 text-sm font-semibold tracking-wider text-amber-600 uppercase">
              Admin Panel
            </span>
            <div className="h-[2px] w-8 bg-gradient-to-l from-transparent via-amber-500 to-transparent" />
          </div>
          <p className="text-gray-600">{isSignUp ? "Create your admin account" : "Sign in to your account"}</p>
        </div>

        <form className="w-full space-y-5" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
            <div className="relative">
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition outline-none bg-white"
                placeholder="admin@laperlanegra.com"
              />
              <span className="absolute left-3 top-3 text-gray-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path d="M16 12H8m8 0a4 4 0 1 0-8 0 4 4 0 0 0 8 0Z" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Password</label>
            <div className="relative">
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition outline-none bg-white"
                placeholder="Enter your password"
              />
              <span className="absolute left-3 top-3 text-gray-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path d="M12 15v2m0-6v2m0 4a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </div>
          </div>
          
          {isSignUp && (
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Confirm Password</label>
              <div className="relative">
                <input
                  type="password"
                  name="confirm"
                  value={form.confirm}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition outline-none bg-white"
                  placeholder="Confirm your password"
                />
                <span className="absolute left-3 top-3 text-gray-400">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path d="M12 15v2m0-6v2m0 4a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </div>
            </div>
          )}
          
          <button
            type="submit"
            className="w-full py-3 mt-6 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-bold rounded-lg shadow-lg hover:from-amber-600 hover:to-amber-700 transition-all duration-200 transform hover:-translate-y-0.5 hover:scale-105"
          >
            {isSignUp ? "Create Account" : "Sign In"}
          </button>
        </form>

        <div className="w-full flex flex-col items-center mt-8">
          <span className="text-gray-600 text-sm">
            {isSignUp ? "Already have an account?" : "Don't have an account?"}
            <button
              className="ml-1 text-amber-600 font-semibold hover:text-amber-700 hover:underline"
              onClick={() => setIsSignUp((v) => !v)}
              type="button"
            >
              {isSignUp ? "Sign In" : "Sign Up"}
            </button>
          </span>
        </div>
        
        {/* {!isSignUp && (
          <div className="mt-6 p-4 bg-amber-50 rounded-lg border border-amber-200">
            <p className="text-xs text-amber-800 text-center">
              <strong>Demo credentials:</strong><br />
              <span className="font-mono">admin@laperlanegra.com / admin123</span>
            </p>
          </div>
        )} */}
      </div>
    </div>
  );
} 