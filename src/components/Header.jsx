import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import TopBar from "./TopBar";
import navLogo from "../assets/images/srm-logo.png";

const Header = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [categoryOpenMobile, setCategoryOpenMobile] = useState(false);

  const mainLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about-us" },
    { name: "All Properties", path: "/properties" },
    { name: "Contact", path: "/contact" },
  ];

  const categories = [
    { name: "Commercial Property", path: "/category/commercial" },
    { name: "Dareshell Property", path: "/category/dareshell" },
    { name: "Furnished", path: "/category/furnished" },
    { name: "Industrial Plot", path: "/category/industrial-plot" },
    { name: "Plot", path: "/category/plot" },
    { name: "Shed", path: "/category/shed" },
    { name: "Warehouse", path: "/category/warehouse" },
    { name: "Factory", path: "/category/factory" },
    { name: "Latest Property", path: "/latestProperty" },
    { name: "Featured", path: "/featuredProperty" },
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

            {/* CENTER MENU (DESKTOP) */}
            <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 gap-8 items-center">
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

              {/* CATEGORY HOVER DROPDOWN */}
              <div className="relative group">
                <button className="text-sm font-medium text-gray-300 hover:text-[#06B6D4]">
                  Property by Category
                </button>
                <div className="absolute left-0 top-full mt-2 w-56 bg-[#020617] border border-[#1E293B] rounded shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 z-50">
                  {categories.map((cat) => (
                    <Link
                      key={cat.name}
                      to={cat.path}
                      className="block px-4 py-2 text-sm text-gray-300 hover:bg-[#0F172A] hover:text-[#06B6D4]"
                    >
                      {cat.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT ACTIONS (DESKTOP) */}
            <div className="hidden lg:flex ml-auto items-center gap-4">
              <Link
                to="/login"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-[#1E293B] text-gray-300 hover:bg-[#06B6D4] hover:text-[#0F172A]"
              >
                <i className="fas fa-user" />
              </Link>

              <a
                href="tel:+917290009902"
                className="text-gray-300 hover:text-[#06B6D4] text-sm"
              >
                +91 72900 09902
              </a>

              <Link
                to="/admin-login"
                target="_blank"
                className="px-4 py-2 rounded-full bg-gradient-to-r from-[#06B6D4] to-[#0EA5E9] text-[#0F172A] font-semibold text-sm hover:opacity-90"
              >
                Add Listing
              </Link>
            </div>

            {/* MOBILE MENU BUTTON */}
            <div className="ml-auto lg:hidden">
              <button onClick={() => setMenuOpen(!menuOpen)}>
                <i
                  className={`fas ${menuOpen ? "fa-times" : "fa-bars"} text-xl text-gray-300`}
                />
              </button>
            </div>
          </div>
        </div>

        {/* MOBILE SLIDE MENU */}
        {menuOpen && (
          <div className="lg:hidden bg-[#020617] border-t border-[#1E293B]">
            <div className="max-w-7xl mx-auto px-4 py-5 space-y-4">
              {/* MAIN LINKS */}
              <div className="space-y-2">
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

              {/* CATEGORY TOGGLE */}
              <div>
                <button
                  onClick={() => setCategoryOpenMobile(!categoryOpenMobile)}
                  className="flex items-center justify-between w-full text-gray-300"
                >
                  <span>Property by Category</span>
                  <i
                    className={`fas fa-chevron-down transition ${
                      categoryOpenMobile ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {categoryOpenMobile && (
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
              <div className="flex flex-col gap-2 pt-4 border-t border-[#1E293B]">
                <Link
                  to="/login"
                  onClick={() => setMenuOpen(false)}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-[#1E293B] text-gray-300 hover:bg-[#06B6D4] hover:text-[#0F172A]"
                >
                  <i className="fas fa-user" />
                </Link>
                <a
                  href="tel:+917290009902"
                  className="text-gray-300 hover:text-[#06B6D4]"
                >
                  +91 72900 09902
                </a>
                <Link
                  to="/admin-login"
                  target="_blank"
                  onClick={() => setMenuOpen(false)}
                  className="px-4 py-2 rounded-full bg-gradient-to-r from-[#06B6D4] to-[#0EA5E9] text-[#0F172A] font-semibold text-sm"
                >
                  Add Listing
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
