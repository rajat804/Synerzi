import React, { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { Link } from "react-router-dom";
import AdminLeftBar from "../components/AdminLeftBar";

export default function AdminDashboard() {
  const [admin, setAdmin] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  /* ================= AUTH CHECK ================= */
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return (window.location.href = "/admin-login");

    try {
      const decoded = jwtDecode(token);
      if (decoded.role !== "admin") {
        localStorage.removeItem("token");
        window.location.href = "/admin-login";
      } else setAdmin(decoded);
    } catch {
      localStorage.removeItem("token");
      window.location.href = "/admin-login";
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/admin-login";
  };

  const toggleSidebar = () => setSidebarOpen((prev) => !prev);

  if (!admin) return <div className="p-8">Loading...</div>;

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* ================= SIDEBAR ================= */}
      <AdminLeftBar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />

      {/* ================= MAIN ================= */}
      <div className="flex-1 flex flex-col">
        {/* HEADER */}
        <header className="bg-white shadow px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            {/* Mobile toggle */}
            <button
              className="md:hidden px-3 py-2 bg-slate-900 text-white rounded"
              onClick={toggleSidebar}
            >
              ☰
            </button>

            <h1 className="text-xl font-semibold">Admin Dashboard</h1>
          </div>

          <div className="flex items-center gap-4">
            <span className="font-medium text-gray-700 hidden md:inline">{admin.fullName}</span>
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
            >
              Logout
            </button>
          </div>
        </header>

        {/* CONTENT */}
        <main className="p-6">
          <div className="bg-white p-8 rounded shadow max-w-xl">
            <h2 className="text-3xl font-bold mb-6 text-slate-800">
              Welcome, {admin.fullName} 👋
            </h2>

            <div className="space-y-3 text-gray-700">
              <p>
                <span className="font-semibold">Name:</span> {admin.fullName}
              </p>
              <p>
                <span className="font-semibold">Email:</span> {admin.email}
              </p>
              <p>
                <span className="font-semibold">Role:</span>{" "}
                <span className="capitalize">{admin.role}</span>
              </p>
            </div>

            <div className="mt-6 flex flex-col md:flex-row gap-4">
              <Link
                to="/admin-listings"
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded font-medium transition text-center"
              >
                📋 Show Listings
              </Link>

              
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
