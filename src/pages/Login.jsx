import React from "react";
import { Link } from "react-router-dom";
import srmLogo from "../assets/images/srm-logo.png";


const Login = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 px-4">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
        {/* LEFT IMAGE */}
        <div className="hidden md:block relative">
          <img
            src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg"
            alt="login"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <h2 className="text-white text-3xl font-bold text-center px-6">
              Welcome Back to <br /> SRM Properties
            </h2>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="p-8 sm:p-12">
          {/* LOGO */}
          <div className="mb-6 flex items-center">
            <img
              src={srmLogo}
              alt="SRM Logo"
              className="h-10 sm:h-12 w-auto object-contain"
            />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Login Account
          </h2>
          <p className="text-gray-500 mb-8">Please login to continue</p>

          <form className="space-y-5">
            {/* Email */}
            <div>
              <label className="text-sm text-gray-600">Email Address</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="mt-1 w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#06B6D4] outline-none"
              />
            </div>

            {/* Password */}
            <div>
              <label className="text-sm text-gray-600">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                className="mt-1 w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#06B6D4] outline-none"
              />
            </div>

            {/* Remember + Forgot */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-gray-600">
                <input type="checkbox" className="accent-[#06B6D4]" />
                Remember me
              </label>
              <Link
                to="/forgot-password"
                className="text-[#06B6D4] hover:underline"
              >
                Forgot Password?
              </Link>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-gradient-to-r from-[#06B6D4] to-[#0EA5E9]
              text-[#0F172A] font-semibold hover:scale-105 transition-transform"
            >
              Login
            </button>
          </form>

          {/* Register */}
          <p className="text-center text-gray-600 mt-6 text-sm">
            Don’t have an account?
            <Link
              to="/register"
              className="ml-1 text-[#06B6D4] font-semibold hover:underline"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;
