import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const Contact = () => {
  return (
    <>
      {/* ===== HERO ===== */}
      <section
        className="relative h-[60vh] bg-fixed bg-center bg-cover flex items-center"
        style={{
          backgroundImage:
            'url("https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&w=1600")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40"></div>

        <div className="relative max-w-7xl mx-auto px-4 text-white">
          <h1 className="text-4xl md:text-6xl font-bold">
            Let’s Talk Business
          </h1>
          <p className="mt-4 max-w-xl text-gray-200 text-lg">
            Connect with Synerzi to explore smart property solutions crafted for
            your future.
          </p>
        </div>
      </section>

      {/* ===== MAP ===== */}
      <div className="w-full h-[350px]">
        <iframe
          className="w-full h-full border-0"
          loading="lazy"
          src="https://www.google.com/maps?q=Noida%20India&output=embed"
        ></iframe>
      </div>

      {/* ===== CONTACT CONTENT ===== */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* LEFT INFO */}
          <div className="space-y-10">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">
                Get in Touch
              </h2>
              <p className="mt-3 text-gray-600 max-w-md">
                Our experts are always ready to guide you with the right
                property decisions.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <FaMapMarkerAlt className="text-[#06B6D4] text-xl mt-1" />
                <p className="text-gray-700">
                  Synerzi Realty Pvt Ltd <br />
                  Sector 62, Noida, Uttar Pradesh
                </p>
              </div>

              <div className="flex items-center gap-4">
                <FaPhoneAlt className="text-[#06B6D4]" />
                <span className="text-gray-700">+91 98765 43210</span>
              </div>

              <div className="flex items-center gap-4">
                <FaEnvelope className="text-[#06B6D4]" />
                <span className="text-gray-700">info@synerzi.com</span>
              </div>
            </div>

            {/* SOCIAL */}
            <div>
              <h4 className="font-semibold text-gray-800 mb-4">
                Follow Us
              </h4>
              <div className="flex gap-4">
                {[FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter].map(
                  (Icon, i) => (
                    <div
                      key={i}
                      className="w-11 h-11 rounded-full bg-white shadow-md flex items-center justify-center text-gray-600 hover:bg-[#06B6D4] hover:text-white transition-all cursor-pointer hover:-translate-y-1"
                    >
                      <Icon />
                    </div>
                  )
                )}
              </div>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="relative">
            <div className="absolute inset-0 bg-[#06B6D4]/10 rounded-3xl blur-3xl"></div>

            <div className="relative bg-white/90 backdrop-blur-lg p-8 rounded-3xl shadow-xl">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Send Us a Message
              </h3>

              <form className="space-y-5">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-[#06B6D4] outline-none"
                />

                <input
                  type="text"
                  placeholder="Your Phone"
                  className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-[#06B6D4] outline-none"
                />

                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-[#06B6D4] outline-none"
                />

                <textarea
                  rows="4"
                  placeholder="Your Message"
                  className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-[#06B6D4] outline-none"
                ></textarea>

                <button
                  type="submit"
                  className="w-full py-3 rounded-lg bg-gradient-to-r from-[#06B6D4] to-[#0EA5E9] text-white font-semibold hover:scale-[1.02] transition-all shadow-lg"
                >
                  Send Email
                </button>
              </form>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default Contact;
