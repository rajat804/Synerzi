const ContactForm = () => {
  return (
    <form className="bg-white rounded-xl shadow-xl p-8 grid grid-cols-1 md:grid-cols-2 gap-5">
      <input
        type="text"
        placeholder="Full Name"
        className="border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#06B6D4]"
        required
      />

      <input
        type="tel"
        placeholder="Mobile Number"
        className="border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#06B6D4]"
        required
      />

      <input
        type="text"
        placeholder="City"
        className="border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#06B6D4]"
      />

      <input
        type="email"
        placeholder="Email Address"
        className="border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#06B6D4]"
        required
      />

      <textarea
        placeholder="Your Message"
        rows="4"
        className="md:col-span-2 border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#06B6D4]"
      ></textarea>

      <button
        type="submit"
        className="md:col-span-2 bg-gradient-to-r from-[#06B6D4] to-[#0EA5E9] text-white py-3 rounded-md font-semibold shadow hover:scale-[1.02] transition-transform"
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
