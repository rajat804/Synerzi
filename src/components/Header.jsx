import React, { useState } from "react";
import TopBar from "./TopBar";
import navLogo from "../assets/images/srm-logo.png";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about-us" },
    { name: "All Properties", path: "/properties" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <>
      <TopBar />

      <nav className="w-full bg-[#0F172A]/95 backdrop-blur-md border-b border-[#1E293B] shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16 relative">
            {/* LEFT: Logo */}
            <Link to="/" className="flex items-center gap-2">
              <img src={navLogo} alt="Logo" className="h-9 sm:h-10 w-auto" />
            </Link>

            {/* CENTER: Main Navigation */}
            <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-8">
              {links.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`relative text-sm lg:text-base font-medium transition
                      ${
                        isActive
                          ? "text-[#06B6D4]"
                          : "text-gray-300 hover:text-[#06B6D4]"
                      }`}
                  >
                    {link.name}

                    {/* Active underline */}
                    <span
                      className={`absolute -bottom-2 left-0 h-0.5 bg-[#06B6D4] transition-all duration-300
                      ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}
                    />
                  </Link>
                );
              })}
            </div>

            {/* RIGHT: Secondary Actions */}
            <div className="hidden md:flex items-center gap-4 ml-auto">
              {/* Phone */}
              <div className="flex items-center gap-2 text-sm text-gray-300 hover:text-[#06B6D4] transition cursor-pointer">
                <i className="fas fa-phone-alt text-[#06B6D4]" />
                <span className="hidden lg:block">+91 98765 43210</span>
              </div>

              {/* User Login */}
              <Link
                to="/login"
                title="Login"
                className="flex items-center justify-center w-9 h-9 rounded-full
                bg-[#1E293B] text-gray-300
                hover:bg-[#06B6D4] hover:text-[#0F172A]
                transition"
              >
                <i className="fas fa-user text-sm" />
              </Link>

              {/* CTA */}
              <Link
                to="/contact"
                className="px-4 py-2 rounded-full bg-gradient-to-r from-[#06B6D4] to-[#0EA5E9]
                text-[#0F172A] text-sm font-semibold shadow-lg hover:scale-105 transition-transform"
              >
                Add Listing
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
          <div className="md:hidden bg-[#0F172A]/95 backdrop-blur-md border-t border-[#1E293B] px-4 py-5 space-y-3">
            {links.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 rounded-md transition
                    ${
                      isActive
                        ? "bg-[#06B6D4]/20 text-[#06B6D4]"
                        : "text-gray-300 hover:bg-[#06B6D4]/10 hover:text-[#06B6D4]"
                    }`}
                >
                  {link.name}
                </Link>
              );
            })}

            {/* Mobile Phone */}
            <div className="flex items-center gap-2 text-gray-300 px-3 py-2">
              <i className="fas fa-phone-alt text-[#06B6D4]" />
              <span>+91 98765 43210</span>
            </div>

            {/* Mobile Actions */}
            <div className="flex items-center gap-4 px-3 pt-2">
              <Link
                to="/login"
                onClick={() => setIsOpen(false)}
                className="w-10 h-10 flex items-center justify-center rounded-full
                bg-[#1E293B] text-gray-300 hover:bg-[#06B6D4] hover:text-[#0F172A]"
              >
                <i className="fas fa-user" />
              </Link>

              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="flex-1 text-center px-4 py-2 rounded-full
                bg-gradient-to-r from-[#06B6D4] to-[#0EA5E9]
                text-[#0F172A] font-semibold shadow-lg"
              >
                Add Listing
              </Link>
            </div>
          </div>
        )}
      </nav>
      {/* <nav className="w-full bg-[#0F172A]/95 backdrop-blur-md border-b border-[#1E293B] shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16 justify-between w-full">
            LEFT: Logo
            <Link to="/" className="flex items-center">
              <img src={navLogo} alt="Logo" className="h-9 sm:h-10 w-auto" />
            </Link>

            CENTER: Navigation (Desktop & Tablet)
            <div className="hidden md:flex flex-1 justify-center gap-6 lg:gap-8">
              {links.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`relative text-sm lg:text-base font-medium transition
                ${isActive ? "text-[#06B6D4]" : "text-gray-300 hover:text-[#06B6D4]"}`}
                  >
                    {link.name}
                    {isActive && (
                      <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-[#06B6D4]" />
                    )}
                  </Link>
                );
              })}
            </div>

            RIGHT: Icons + Add Listing + Toggle
            <div className="flex items-center gap-2 sm:gap-3 md:gap-3 lg:gap-4">
              Phone Icon only on Tablet/Desktop, hide number on tablet
              <div className="flex items-center text-gray-300 hover:text-[#06B6D4] transition cursor-pointer">
                <i className="fas fa-phone-alt text-[#06B6D4]" />
                <span className="hidden lg:inline ml-1 text-sm">
                  +91 98765 43210
                </span>
              </div>

              User Icon
              <Link
                to="/login"
                className="flex items-center justify-center w-9 h-9 rounded-full
          bg-[#1E293B] text-gray-300 hover:bg-[#06B6D4] hover:text-[#0F172A]
          transition"
              >
                <i className="fas fa-user text-sm" />
              </Link>

              Add Listing
              <Link
                to="/contact"
                className="px-2 sm:px-3 md:px-3 lg:px-4 py-1 sm:py-2 rounded-full bg-gradient-to-r from-[#06B6D4] to-[#0EA5E9]
          text-[#0F172A] text-xs sm:text-sm md:text-sm lg:text-sm font-semibold shadow-lg hover:scale-105 transition-transform"
              >
                Add Listing
              </Link>

              MOBILE TOGGLE (only <md)
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="ml-1 md:hidden"
              >
                <i
                  className={`fas ${isOpen ? "fa-times" : "fa-bars"} text-2xl text-gray-300`}
                />
              </button>
            </div>
          </div>
        </div>

        MOBILE MENU
        {isOpen && (
          <div className="md:hidden bg-[#0F172A]/95 backdrop-blur-md border-t border-[#1E293B] px-4 py-5 space-y-3">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="block text-gray-300 px-3 py-2 rounded-md hover:bg-[#06B6D4]/10 hover:text-[#06B6D4]"
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </nav> */}
    </>
  );
};

export default Header;
