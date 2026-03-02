import React from "react";
import { Link, useLocation } from "react-router-dom";

const AdminLeftBar = ({ isOpen, toggleSidebar }) => {
  const location = useLocation();

  const isActive = (path) =>
    location.pathname === path ? "bg-slate-700" : "hover:bg-slate-800";

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}

      <aside
        className={`
          fixed top-0 left-0 h-screen w-64 md:w-64 bg-gradient-to-b from-slate-800 to-slate-900 text-white z-30 transform transition-transform
          ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 md:static md:block
        `}
      >
        {/* Header */}
        <div className="p-6 text-xl font-bold border-b border-slate-700 flex justify-between items-center">
          Admin Panel
          {/* Close button for mobile */}
          <button
            className="md:hidden px-2 py-1 text-white rounded bg-slate-700 hover:bg-red-600"
            onClick={toggleSidebar}
          >
            ×
          </button>
        </div>

        {/* Navigation */}
        <nav className="p-4 space-y-2">
          <Link
            to="/admin-dashboard"
            className={`block px-4 py-2 rounded ${isActive("/admin-dashboard")}`}
            onClick={toggleSidebar}
          >
            Dashboard
          </Link>

          {/* <Link
            to="/admin/add-listing"
            className={`block px-4 py-2 rounded ${isActive("/admin/add-listing")}`}
            onClick={toggleSidebar}
          >
            Add Listing
          </Link> */}

          
        </nav>
      </aside>
    </>
  );
};

export default AdminLeftBar;
