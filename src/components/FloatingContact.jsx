import { useState } from "react";

const FloatingContact = () => {
  const [open, setOpen] = useState(false);

  const phoneNumber = "9896707022";
  const whatsappNumber = "919896707022";

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-3">
      {/* WhatsApp Button */}
      {open && (
        <a
          href={`https://wa.me/${whatsappNumber}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 flex items-center justify-center rounded-full
          bg-green-500 text-white shadow-lg
          hover:scale-110 transition-all"
        >
          <i className="fab fa-whatsapp text-xl"></i>
        </a>
      )}

      {/* Phone Button */}
      {open && (
        <a
          href={`tel:${phoneNumber}`}
          className="w-12 h-12 flex items-center justify-center rounded-full
          bg-blue-500 text-white shadow-lg
          hover:scale-110 transition-all"
        >
          <i className="fas fa-phone text-lg"></i>
        </a>
      )}

      {/* Main Menu Button */}
      <button
        onClick={() => setOpen(!open)}
        className="w-14 h-14 rounded-full bg-gradient-to-r from-[#06B6D4] to-[#0EA5E9]
        text-white shadow-xl flex items-center justify-center
        hover:scale-110 transition-all"
      >
        <i
          className={`fas ${open ? "fa-times" : "fa-comment-dots"} text-xl`}
        ></i>
      </button>
    </div>
  );
};

export default FloatingContact;
