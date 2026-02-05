export default function ContactUs() {
  return (
    <section
      className="relative bg-fixed bg-center bg-cover py-20"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1560184897-ae75f418493e')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <div className="text-white">
            <h2 className="text-4xl font-bold mb-4 text-[#06B6D4]">Contact SRM</h2>
            <p className="text-gray-200 leading-relaxed">
              Looking for the best commercial or residential property? Get in touch with our expert team today.
            </p>
          </div>

          {/* FORM */}
          <form className="bg-white rounded-xl shadow-xl p-8 grid grid-cols-1 md:grid-cols-2 gap-5">
            
            <input
              type="text"
              placeholder="Full Name"
              className="border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#06B6D4] focus:border-[#06B6D4] transition"
              required
            />

            <input
              type="tel"
              placeholder="Mobile Number"
              className="border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#06B6D4] focus:border-[#06B6D4] transition"
              required
            />

            <input
              type="text"
              placeholder="City"
              className="border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#06B6D4] focus:border-[#06B6D4] transition"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#06B6D4] focus:border-[#06B6D4] transition"
              required
            />

            <textarea
              placeholder="Your Message"
              rows="4"
              className="md:col-span-2 border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#06B6D4] focus:border-[#06B6D4] transition"
            ></textarea>

            <button
              type="submit"
              className="md:col-span-2 bg-gradient-to-r from-[#06B6D4] to-[#0EA5E9] text-white py-3 rounded-md font-semibold shadow hover:scale-[1.02] transition-transform"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
