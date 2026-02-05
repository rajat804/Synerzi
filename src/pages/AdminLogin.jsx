import { useState } from "react";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const BASE_URL = "https://synerzi-backend.vercel.app" || "http://localhost:4000";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(`${BASE_URL}/api/admin/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        alert(data.message || "Login failed");
      } else {
        alert(data.message || "Login successful");
        localStorage.setItem("token", data.token);
        window.location.href = "/admin-dashboard";
      }
    } catch (err) {
      console.error(err);
      alert("Server error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-cyan-500 to-blue-600">
      <form
        onSubmit={handleSubmit}
        className="p-8 bg-white/90 backdrop-blur-md shadow-2xl rounded-2xl w-96 flex flex-col transition-transform transform hover:scale-105"
      >
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800 tracking-tight">
          Admin Login
        </h1>

        <input
          type="email"
          placeholder="Email"
          className="mb-4 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 outline-none transition"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="mb-6 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 outline-none transition"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button
          type="submit"
          disabled={loading}
          className={`py-3 rounded-lg text-white font-semibold transition-all shadow-md ${
            loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-blue-500 hover:to-cyan-500 hover:scale-105"
          }`}
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        <p className="mt-4 text-center text-gray-500 text-sm">
          © 2026 Synerzi. All rights reserved.
        </p>
      </form>
    </div>
  );
}
