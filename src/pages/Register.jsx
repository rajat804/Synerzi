import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import srmLogo from "../assets/images/srm-logo.png";

const Register = () => {
  const navigate = useNavigate(); // To redirect after successful register

  // Form state
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("https://synerzi-backend.vercel.app/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        setError(result.message || "Registration failed");
      } else {
        alert("Registration successful!");
        navigate("/login"); // Redirect to login page
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

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
          <p className="text-gray-500 mb-4">Register to explore properties</p>

          {error && (
            <p className="text-red-500 mb-4 font-medium">{error}</p>
          )}

          {/* FORM */}
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Full Name"
              className="w-full px-4 py-3 rounded-lg border border-gray-300
              focus:border-[#06B6D4] focus:ring-2 focus:ring-[#06B6D4]/30 outline-none"
              required
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              className="w-full px-4 py-3 rounded-lg border border-gray-300
              focus:border-[#06B6D4] focus:ring-2 focus:ring-[#06B6D4]/30 outline-none"
              required
            />

            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              className="w-full px-4 py-3 rounded-lg border border-gray-300
              focus:border-[#06B6D4] focus:ring-2 focus:ring-[#06B6D4]/30 outline-none"
              required
            />

            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              className="w-full px-4 py-3 rounded-lg border border-gray-300
              focus:border-[#06B6D4] focus:ring-2 focus:ring-[#06B6D4]/30 outline-none"
              required
            />

            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-[#06B6D4]
              text-[#0F172A] font-semibold hover:bg-[#0EA5E9] transition"
              disabled={loading}
            >
              {loading ? "Registering..." : "Register"}
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
