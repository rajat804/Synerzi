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
            <h2 className="text-4xl font-bold mb-4 text-[#F59E0B]">Contact Us</h2>
            <p className="text-[#E5E7EB] leading-relaxed">
              Looking for the best commercial or residential property?
              Get in touch with our expert team today.
            </p>
          </div>

          {/* FORM */}
          <form className="bg-[#1F2937] rounded-xl shadow-xl p-8 grid grid-cols-1 md:grid-cols-2 gap-5">
            
            <input
              type="text"
              placeholder="Full Name"
              className="border border-gray-600 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#10B981] bg-[#111827] text-[#E5E7EB]"
              required
            />

            <input
              type="tel"
              placeholder="Mobile Number"
              className="border border-gray-600 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#10B981] bg-[#111827] text-[#E5E7EB]"
              required
            />

            <input
              type="text"
              placeholder="City"
              className="border border-gray-600 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#10B981] bg-[#111827] text-[#E5E7EB]"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="border border-gray-600 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#10B981] bg-[#111827] text-[#E5E7EB]"
              required
            />

            <textarea
              placeholder="Your Message"
              rows="4"
              className="md:col-span-2 border border-gray-600 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#10B981] bg-[#111827] text-[#E5E7EB]"
            ></textarea>

            <button
              type="submit"
              className="md:col-span-2 bg-gradient-to-r from-[#F59E0B] to-[#10B981] text-black py-3 rounded-md hover:opacity-90 transition font-semibold"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
