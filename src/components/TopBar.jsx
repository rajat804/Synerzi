const TopBar = () => {
  return (
    <>
      <div className="w-full bg-[#020617] border-b border-white/5">
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
                bg-white/5 text-gray-300
                hover:bg-[#38bdf8] hover:text-[#020617]
                transition-all duration-300
                hover:scale-105
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
            <div className="flex items-center gap-2 hover:text-white transition">
              <i className="far fa-envelope text-[#38bdf8]" />
              <span className="sm:inline">info@synerzi.com</span>
              {/* WhatsApp CTA */}
              <div
                className="
            flex items-center gap-2
            px-4 py-1.5
            rounded-full
            border border-[#38bdf8]
            text-[#38bdf8]
            hover:bg-[#38bdf8] hover:text-[#020617]
            transition
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
      </div>
    </>
  );
};
export default TopBar;
