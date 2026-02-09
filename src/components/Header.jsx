import React, { useState } from "react";
import TopBar from "./TopBar";
import navLogo from "../assets/images/srm-logo.png";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [categoryOpen, setCategoryOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about-us" },
    { name: "All Properties", path: "/properties" },
    { name: "Contact Us", path: "/contact" },
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

      <nav className="w-full bg-[#0F172A]/95 backdrop-blur-md border-b border-[#1E293B] shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16 relative">
            {/* LOGO */}
            <Link to="/" className="flex items-center gap-2">
              <img src={navLogo} alt="Logo" className="h-9 sm:h-10" />
            </Link>

            {/* DESKTOP MENU */}
            <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-8">
              {links.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`text-sm lg:text-base font-medium transition ${
                      isActive
                        ? "text-[#06B6D4]"
                        : "text-gray-300 hover:text-[#06B6D4]"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}

              {/* LIST BY CATEGORY */}
              <div className="relative group">
                <span className="cursor-pointer text-sm lg:text-base font-medium text-gray-300 hover:text-[#06B6D4]">
                  List by Category
                </span>

                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-56 bg-[#020617] border border-[#1E293B] rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition z-50">
                  <ul className="py-2">
                    {categories.map((cat) => (
                      <li key={cat.name}>
                        <Link
                          to={cat.path}
                          className="block px-4 py-2 text-sm text-gray-300 hover:bg-[#06B6D4]/10 hover:text-[#06B6D4]"
                        >
                          {cat.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* DESKTOP ACTIONS */}
            <div className="hidden md:flex items-center gap-4 ml-auto">
              <Link
                to="/login"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-[#1E293B] text-gray-300 hover:bg-[#06B6D4] hover:text-[#0F172A]"
              >
                <i className="fas fa-user text-sm" />
              </Link>

              <Link
                to="/admin-login"
                className="px-4 py-2 rounded-full bg-gradient-to-r from-[#06B6D4] to-[#0EA5E9] text-[#0F172A] font-semibold shadow-lg hover:scale-105 transition"
              >
                Admin Login
              </Link>
            </div>

            {/* MOBILE TOGGLE */}
            <div className="md:hidden ml-auto">
              <button onClick={() => setIsOpen(!isOpen)}>
                <i
                  className={`fas ${
                    isOpen ? "fa-times" : "fa-bars"
                  } text-2xl text-gray-300`}
                />
              </button>
            </div>
          </div>
        </div>

        {/* MOBILE MENU */}
        {isOpen && (
          <div className="md:hidden bg-[#0F172A]/95 border-t border-[#1E293B] px-4 py-5 space-y-3">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 text-gray-300 hover:text-[#06B6D4]"
              >
                {link.name}
              </Link>
            ))}

            {/* MOBILE CATEGORY */}
            <div>
              <button
                onClick={() => setCategoryOpen(!categoryOpen)}
                className="w-full flex items-center justify-between px-3 py-2 text-gray-300"
              >
                <span>List by Category</span>
                <i
                  className={`fas fa-chevron-down transition ${
                    categoryOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {categoryOpen && (
                <div className="pl-6 mt-2 space-y-2">
                  {categories.map((cat) => (
                    <Link
                      key={cat.name}
                      to={cat.path}
                      onClick={() => {
                        setIsOpen(false);
                        setCategoryOpen(false);
                      }}
                      className="block text-sm text-gray-400 hover:text-[#06B6D4]"
                    >
                      {cat.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* MOBILE ACTIONS */}
            <div className="flex gap-4 pt-3">
              <Link
                to="/login"
                onClick={() => setIsOpen(false)}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-[#1E293B] text-gray-300"
              >
                <i className="fas fa-user" />
              </Link>

              <Link
                to="/admin-login"
                onClick={() => setIsOpen(false)}
                className="flex-1 text-center px-4 py-2 rounded-full bg-gradient-to-r from-[#06B6D4] to-[#0EA5E9] text-[#0F172A] font-semibold"
              >
                Admin Login
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Header;
