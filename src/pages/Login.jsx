// src/pages/Login.jsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import srmLogo from "../assets/images/srm-logo.png";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ emailOrPhone: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("https://vercel-synerzi-sbckend.vercel.app/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        setError(result.message || "Invalid credentials");
        return;
      }

      localStorage.setItem("token", result.token);
      localStorage.setItem("user", JSON.stringify(result.user));

      navigate("/dashboard");
    } catch (err) {
      console.error("Login error:", err);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <img src={srmLogo} alt="Logo" className="h-12 mb-4" />
        <h2 className="text-2xl font-bold mb-2">Login</h2>
        {error && <p className="text-red-500 mb-2">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="emailOrPhone"
            placeholder="Email or Phone"
            value={formData.emailOrPhone}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded focus:ring-2 focus:ring-purple-500 focus:outline-none transition"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded focus:ring-2 focus:ring-purple-500 focus:outline-none transition"
            required
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full py-2 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded hover:from-indigo-500 hover:to-purple-500 hover:scale-105 transition-all duration-300"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <p className="mt-4 text-sm text-center">
          Don’t have an account?{" "}
          <Link to="/register" className="text-purple-500 hover:underline hover:text-indigo-500 transition-colors">
            Register
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Login;
