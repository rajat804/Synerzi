import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#1F2937] text-[#E5E7EB] pt-16">
      <div className="max-w-7xl mx-auto px-4">

        {/* TOP GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-12">

          {/* COMPANY INFO */}
          <div>
            <h3 className="text-[#F59E0B] text-xl font-semibold mb-4">Synerzi</h3>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              Synerzi is a premium real estate advisory firm delivering
              investment, leasing & sales solutions across prime locations.
            </p>

            <div className="flex gap-3">
              <a className="p-2 bg-gray-700 rounded hover:bg-gradient-to-r from-[#F59E0B] to-[#10B981] hover:text-white transition">
                <FaFacebookF />
              </a>
              <a className="p-2 bg-gray-700 rounded hover:bg-gradient-to-r from-[#F59E0B] to-[#10B981] hover:text-white transition">
                <FaInstagram />
              </a>
              <a className="p-2 bg-gray-700 rounded hover:bg-gradient-to-r from-[#F59E0B] to-[#10B981] hover:text-white transition">
                <FaLinkedinIn />
              </a>
              <a className="p-2 bg-gray-700 rounded hover:bg-gradient-to-r from-[#F59E0B] to-[#10B981] hover:text-white transition">
                <FaYoutube />
              </a>
            </div>
          </div>

          {/* CONTACT US */}
          <div>
            <h4 className="text-[#F59E0B] font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex gap-2 items-start">
                <FaMapMarkerAlt className="mt-1 text-[#F59E0B]" />
                Shop No. B-14, Main Market, Sector 1, IMT Manesar, Gurugram – 122050 (HR.)
              </li>
              <li className="flex gap-2 items-center">
                <FaPhoneAlt className="text-[#F59E0B]" /> +91 9896707022
              </li>
              <li className="flex gap-2 items-center">
                <FaEnvelope className="text-[#F59E0B]" /> info@synerzi.com
              </li>
            </ul>
          </div>

          {/* LISTS BY CATEGORY */}
          <div>
            <h4 className="text-[#F59E0B] font-semibold mb-4">Lists by Category</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="hover:text-[#F59E0B] cursor-pointer">Commercial Property</li>
              <li className="hover:text-[#F59E0B] cursor-pointer">Residential Property</li>
              <li className="hover:text-[#F59E0B] cursor-pointer">Office Spaces</li>
              <li className="hover:text-[#F59E0B] cursor-pointer">Retail Shops</li>
              <li className="hover:text-[#F59E0B] cursor-pointer">Warehouses</li>
            </ul>
          </div>

          {/* LATEST PROPERTIES */}
          <div>
            <h4 className="text-[#F59E0B] font-semibold mb-4">Latest Properties</h4>

            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <p className="text-[#E5E7EB]">Udyog Vihar, Gurugram</p>
                <span className="text-xs text-gray-400">₹1.2 Cr • Office Space</span>
              </li>
              <li>
                <p className="text-[#E5E7EB]">Cyber City, Gurugram</p>
                <span className="text-xs text-gray-400">₹2.5 Cr • Commercial</span>
              </li>
              <li>
                <p className="text-[#E5E7EB]">Sohna Road</p>
                <span className="text-xs text-gray-400">₹90 Lakh • Retail</span>
              </li>
            </ul>
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-gray-700 py-6 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Synerzi. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
