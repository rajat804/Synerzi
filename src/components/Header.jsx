import React, { useState } from "react";
import TopBar from "./TopBar";
import navLogo from "../assets/images/synerzi-logo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("Home");

  const links = ["Home", "All Properties", "About Us", "Contact"];

  return (
    <>
      <TopBar />
      <nav className="w-full bg-[#0F172A]/95 backdrop-blur-md border-b border-[#1E293B] shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
              <img src={navLogo} alt="Logo" className="h-10 w-auto" />
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              {links.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  onClick={() => setActive(link)}
                  className={`relative text-gray-300 px-2 py-1 transition-all duration-300 ${
                    active === link ? "text-[#06B6D4] font-semibold" : ""
                  } before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-0.5 before:bg-[#06B6D4] hover:before:w-full before:transition-all`}
                >
                  {link}
                </a>
              ))}
            </div>

            {/* Right Buttons + Phone + User */}
            <div className="hidden md:flex items-center gap-4">
              {/* Phone */}
              <div className="flex items-center gap-2 text-gray-300 hover:text-[#06B6D4] transition cursor-pointer">
                <i className="fas fa-phone-alt text-[#06B6D4]" />
                <span>+91 98765 43210</span>
              </div>

              {/* User Icon */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#1E293B] text-gray-300 hover:bg-[#06B6D4] hover:text-[#0F172A] cursor-pointer transition">
                <i className="fas fa-user" />
              </div>

              {/* Add Listing Button */}
              <a
                href="#contact"
                className="px-5 py-2 rounded-full bg-gradient-to-r from-[#06B6D4] to-[#0EA5E9] text-[#0F172A] font-semibold shadow-lg hover:scale-105 transition-transform duration-300"
              >
                Add Listing
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="focus:outline-none"
              >
                <i
                  className={`fas ${isOpen ? "fa-times" : "fa-bars"} text-2xl text-gray-300`}
                />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-[#0F172A]/95 backdrop-blur-md px-4 pt-4 pb-6 space-y-3 border-t border-[#1E293B]">
            {links.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => setActive(link)}
                className={`block text-gray-300 px-3 py-2 rounded-md transition-all duration-300 ${
                  active === link
                    ? "bg-[#06B6D4]/20 text-[#06B6D4]"
                    : "hover:bg-[#06B6D4]/10 hover:text-[#06B6D4]"
                }`}
              >
                {link}
              </a>
            ))}

            {/* Mobile Phone */}
            <div className="flex items-center gap-2 text-gray-300 hover:text-[#06B6D4] px-3 py-2 rounded-md transition cursor-pointer">
              <i className="fas fa-phone-alt text-[#06B6D4]" />
              <span>+91 98765 43210</span>
            </div>

            {/* Mobile User Icon */}
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#1E293B] text-gray-300 hover:bg-[#06B6D4] hover:text-[#0F172A] cursor-pointer transition">
              <i className="fas fa-user" />
            </div>

            {/* Add Listing Button */}
            <a
              href="#contact"
              className="block mt-2 px-5 py-2 rounded-full bg-gradient-to-r from-[#06B6D4] to-[#0EA5E9] text-[#0F172A] text-center font-semibold shadow-lg hover:scale-105 transition-transform duration-300"
            >
              Add Listing
            </a>
          </div>
        )}
      </nav>
    </>
  );
};

export default Header;
