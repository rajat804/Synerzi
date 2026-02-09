import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import TopBar from "./TopBar";
import navLogo from "../assets/images/srm-logo.png";

const Header = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [categoryOpen, setCategoryOpen] = useState(false);

  const mainLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about-us" },
    { name: "All Properties", path: "/properties" },
    { name: "Contact", path: "/contact" },
  ];

  const categories = [
    { name: "Commercial Property", path: "/category/commercial" },
    { name: "Residential Property", path: "/category/residential" },
    { name: "Office Spaces", path: "/category/office" },
    { name: "Retail Shops", path: "/category/retail" },
    { name: "Warehouses", path: "/category/warehouse" },
  ];

  return (
    <>
      <TopBar />

      <nav className="sticky top-0 z-50 bg-[#0F172A]/95 backdrop-blur-md border-b border-[#1E293B]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center h-16 relative">
            {/* LOGO */}
            <Link to="/" className="flex items-center">
              <img src={navLogo} alt="SRM Logo" className="h-9" />
            </Link>

            {/* CENTER MENU (DESKTOP ONLY) */}
            <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 gap-8">
              {mainLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-sm font-medium transition ${
                    location.pathname === link.path
                      ? "text-[#06B6D4]"
                      : "text-gray-300 hover:text-[#06B6D4]"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* RIGHT TOGGLE (DESKTOP + MOBILE) */}
            <div className="ml-auto">
              <button onClick={() => setMenuOpen(!menuOpen)}>
                <i
                  className={`fas ${
                    menuOpen ? "fa-times" : "fa-bars"
                  } text-xl text-gray-300`}
                />
              </button>
            </div>
          </div>
        </div>

        {/* SLIDE / DROPDOWN MENU */}
        {menuOpen && (
          <div className="bg-[#020617] border-t border-[#1E293B]">
            <div className="max-w-7xl mx-auto px-4 py-5 space-y-4">

              {/* MOBILE MAIN LINKS */}
              <div className="lg:hidden space-y-2">
                {mainLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={() => setMenuOpen(false)}
                    className="block text-gray-300 hover:text-[#06B6D4]"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

              {/* CATEGORY */}
              <div>
                <button
                  onClick={() => setCategoryOpen(!categoryOpen)}
                  className="flex items-center justify-between w-full text-gray-300"
                >
                  <span>Property by Category</span>
                  <i
                    className={`fas fa-chevron-down transition ${
                      categoryOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {categoryOpen && (
                  <div className="mt-3 pl-4 space-y-2">
                    {categories.map((cat) => (
                      <Link
                        key={cat.name}
                        to={cat.path}
                        onClick={() => setMenuOpen(false)}
                        className="block text-sm text-gray-400 hover:text-[#06B6D4]"
                      >
                        {cat.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* ACTIONS */}
              <div className="flex gap-4 pt-4 border-t border-[#1E293B]">
                <Link
                  to="/login"
                  onClick={() => setMenuOpen(false)}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-[#1E293B] text-gray-300 hover:bg-[#06B6D4] hover:text-[#0F172A]"
                >
                  <i className="fas fa-user" />
                </Link>

                <Link
                  to="/admin-login"
                  onClick={() => setMenuOpen(false)}
                  className="flex-1 text-center py-2 rounded-full bg-gradient-to-r from-[#06B6D4] to-[#0EA5E9] text-[#0F172A] font-semibold"
                >
                  Admin Login
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Header;
