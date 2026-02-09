import { useState } from "react";
import { FaPhoneAlt, FaWhatsapp, FaEnvelope, FaComments } from "react-icons/fa";

const FloatingContact = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {/* Floating Options */}
      {open && (
        <div className="flex flex-col items-end gap-3 mb-3 animate-fadeIn">
          {/* CALL */}
          <a
            href="tel:9896707022"
            className="flex items-center gap-3 bg-white shadow-lg px-4 py-2 rounded-full text-gray-700 hover:bg-[#06B6D4] hover:text-white transition"
          >
            <FaPhoneAlt />
            <span className="text-sm font-medium">Call</span>
          </a>

          {/* WHATSAPP */}
          <a
            href="https://wa.me/919896707022"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-white shadow-lg px-4 py-2 rounded-full text-gray-700 hover:bg-green-500 hover:text-white transition"
          >
            <FaWhatsapp />
            <span className="text-sm font-medium">WhatsApp</span>
          </a>

          {/* EMAIL */}
          <a
            href="mailto:shreeramrealtygroup@gmail.com"
            className="flex items-center gap-3 bg-white shadow-lg px-4 py-2 rounded-full text-gray-700 hover:bg-red-500 hover:text-white transition"
          >
            <FaEnvelope />
            <span className="text-sm font-medium">Email</span>
          </a>
        </div>
      )}

      {/* Main Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        className="w-14 h-14 rounded-full bg-gradient-to-r from-[#06B6D4] to-[#0EA5E9] text-white flex items-center justify-center shadow-xl hover:scale-110 transition"
      >
        <FaComments size={22} />
      </button>
    </div>
  );
};

export default FloatingContact;
