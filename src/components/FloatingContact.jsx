import { useState } from "react";
import { FaPhoneAlt, FaWhatsapp, FaEnvelope, FaComments } from "react-icons/fa";

const FloatingContact = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-center">
      {/* Floating Icons */}
      {open && (
        <div className="flex flex-col gap-3 mb-3">
          {/* Call */}
          <a
            href="tel:9896707022"
            className="w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-lg text-[#06B6D4] hover:bg-[#06B6D4] hover:text-white transition"
            title="Call"
          >
            <FaPhoneAlt />
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/919896707022"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-lg text-green-500 hover:bg-green-500 hover:text-white transition"
            title="WhatsApp"
          >
            <FaWhatsapp />
          </a>

          {/* Email */}
          <a
            href="mailto:shreeramrealtygroup@gmail.com"
            className="w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-lg text-red-500 hover:bg-red-500 hover:text-white transition"
            title="Email"
          >
            <FaEnvelope />
          </a>
        </div>
      )}

      {/* Main Toggle Button */}
      <button
        onClick={() => setOpen(!open)}
        className="w-14 h-14 rounded-full bg-gradient-to-r from-[#06B6D4] to-[#0EA5E9] text-white flex items-center justify-center shadow-xl hover:scale-110 transition"
        title="Contact"
      >
        <FaComments size={22} />
      </button>
    </div>
  );
};

export default FloatingContact;
