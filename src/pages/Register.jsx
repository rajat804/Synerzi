import React from "react";
import { Link } from "react-router-dom";
import srmLogo from "../assets/images/srm-logo.png";

const Register = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-5xl bg-white rounded-2xl shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
        {/* LEFT IMAGE */}
        <div
          className="hidden md:block bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1600)",
          }}
        >
          <div className="h-full w-full bg-black/40 flex items-end p-8">
            <h3 className="text-white text-2xl font-semibold leading-snug">
              Discover premium properties <br /> with SRM
            </h3>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="p-8 sm:p-10 flex flex-col justify-center">
          {/* LOGO */}
          <div className="mb-6 flex items-center">
            <img
              src={srmLogo}
              alt="SRM Logo"
              className="h-10 sm:h-12 w-auto object-contain"
            />
          </div>

          {/* TITLE */}
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Create Account
          </h2>
          <p className="text-gray-500 mb-8">Register to explore properties</p>

          {/* FORM */}
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-3 rounded-lg border border-gray-300
              focus:border-[#06B6D4] focus:ring-2 focus:ring-[#06B6D4]/30 outline-none"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-3 rounded-lg border border-gray-300
              focus:border-[#06B6D4] focus:ring-2 focus:ring-[#06B6D4]/30 outline-none"
            />

            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full px-4 py-3 rounded-lg border border-gray-300
              focus:border-[#06B6D4] focus:ring-2 focus:ring-[#06B6D4]/30 outline-none"
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-3 rounded-lg border border-gray-300
              focus:border-[#06B6D4] focus:ring-2 focus:ring-[#06B6D4]/30 outline-none"
            />

            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-[#06B6D4]
              text-[#0F172A] font-semibold hover:bg-[#0EA5E9] transition"
            >
              Register
            </button>
          </form>

          {/* LOGIN LINK */}
          <p className="text-sm text-gray-600 mt-6 text-center">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-[#06B6D4] font-semibold hover:underline"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Register;
