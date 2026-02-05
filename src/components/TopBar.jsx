const TopBar = () => {
  return (
    <div className="w-full bg-[#0f172a] border-b border-gray-800">
      <div
        className="
        max-w-7xl mx-auto
        px-4 sm:px-6
        py-2
        flex flex-col sm:flex-row
        gap-2 sm:gap-0
        sm:justify-between
        sm:items-center
        text-sm
      "
      >
        {/* LEFT : SOCIAL ICONS */}
        <div className="flex justify-center sm:justify-start gap-3">
          {["facebook-f", "linkedin-in", "youtube", "instagram"].map(
            (icon) => (
              <a
                key={icon}
                className="
                w-9 h-9 flex items-center justify-center
                rounded-full
                bg-gray-700 text-gray-200
                hover:bg-gradient-to-br hover:from-[#06b6d4] hover:to-[#0ea5e9]
                hover:text-white
                transition-all duration-300
                hover:scale-110 shadow-md hover:shadow-lg
                cursor-pointer
              "
              >
                <i className={`fab fa-${icon}`} />
              </a>
            ),
          )}
        </div>

        {/* RIGHT : CONTACT */}
        <div
          className="
          flex flex-col sm:flex-row
          items-center
          gap-2 sm:gap-6
          text-gray-400
        "
        >
          {/* Email (hide text on very small screens) */}
          <div className="flex items-center gap-2 hover:text-white transition-colors duration-300">
            <i className="far fa-envelope text-teal-400" />
            <span className="sm:inline">info@synerzi.com</span>
          </div>

          {/* WhatsApp CTA */}
          <div
            className="
            flex items-center gap-2
            px-4 py-1.5
            rounded-full
            border border-teal-400
            text-teal-400
            hover:bg-gradient-to-r hover:from-teal-400 hover:to-cyan-400
            hover:text-white
            transition-all duration-300
            cursor-pointer
            font-medium
          "
          >
            <i className="fab fa-whatsapp" />
            <span>WhatsApp</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
