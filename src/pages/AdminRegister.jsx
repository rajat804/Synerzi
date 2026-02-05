import { useState } from "react";

export default function AdminRegister() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = { fullName, email, password };

    try {
      const response = await fetch("https://synerzi-backend.vercel.app/api/admin/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        alert(data.message || "Registration failed");
      } else {
        alert(data.message || "Admin registered successfully");
        setFullName("");
        setEmail("");
        setPassword("");
        window.location.href = "/admin-login";
      }
    } catch (err) {
      console.error(err);
      alert("Server error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-500 to-indigo-600">
      <form
        onSubmit={handleSubmit}
        className="p-8 bg-white/90 backdrop-blur-md shadow-2xl rounded-2xl w-96 flex flex-col transition-transform transform hover:scale-105"
      >
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800 tracking-tight">
          Register Admin
        </h1>

        <input
          type="text"
          placeholder="Full Name"
          className="mb-4 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-400 focus:border-purple-400 outline-none transition"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
        />

        <input
          type="email"
          placeholder="Email"
          className="mb-4 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-400 focus:border-purple-400 outline-none transition"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="mb-6 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-400 focus:border-purple-400 outline-none transition"
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
              : "bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-indigo-500 hover:to-purple-500 hover:scale-105"
          }`}
        >
          {loading ? "Registering..." : "Register"}
        </button>

        <p className="mt-4 text-center text-gray-500 text-sm">
          © 2026 Synerzi. All rights reserved.
        </p>
      </form>
    </div>
  );
}
