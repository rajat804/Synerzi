import { useEffect, useState } from "react";
import {jwtDecode} from "jwt-decode";

export default function AdminDashboard() {
  const [admin, setAdmin] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      // Token nahi → login page
      return (window.location.href = "/admin-login");
    }

    try {
      const decoded = jwtDecode(token);

      // Role check
      if (decoded.role !== "admin") {
        localStorage.removeItem("token");
        return (window.location.href = "/admin-login");
      }

      setAdmin(decoded);
    } catch (err) {
      console.error(err);
      localStorage.removeItem("token");
      window.location.href = "/admin-login";
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/admin-login";
  };

  if (!admin) return <div className="p-8">Loading...</div>;

  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded shadow">
        <h1 className="text-3xl font-bold mb-4">
          Welcome, {admin.fullName}
        </h1>
        <p>Email: {admin.email}</p>
        <p>Role: {admin.role}</p>

        <button
          onClick={handleLogout}
          className="mt-6 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
