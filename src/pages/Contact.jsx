import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import ContactForm from "../components/ContactForm";

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
            Connect with SRM to explore smart property solutions crafted for
            your future.
          </p>
        </div>
      </section>

      {/* ===== MAP ===== */}
      <div className="w-full h-[350px] md:h-[450px] rounded-2xl overflow-hidden shadow-lg">
        <iframe
          className="w-full h-full border-0"
          loading="lazy"
          src="https://www.google.com/maps?q=Shop%20No.%20B-14,%20Main%20Market,%20Sector%201,%20IMT%20Manesar,%20Gurugram,%20Haryana%20122050&output=embed"
        ></iframe>
      </div>

      {/* ===== CONTACT CONTENT ===== */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* LEFT INFO */}
          <div className="space-y-10">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Get in Touch</h2>
              <p className="mt-3 text-gray-600 max-w-md">
                Our experts are always ready to guide you with the right
                property decisions.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <FaMapMarkerAlt className="text-[#06B6D4] text-xl mt-1" />
                <p className="text-gray-700">
                  SRM Realty Pvt Ltd
                  <br />
                  Shop No. B-14, Main Market, Sector 1, IMT Manesar, Gurugram –
                  122050 (HR.)
                </p>
              </div>

              <div className="flex items-center gap-4">
                <FaPhoneAlt className="text-[#06B6D4]" />
                <span className="text-gray-700">+91 98967 07022</span>
              </div>

              <div className="flex items-center gap-4">
                <FaEnvelope className="text-[#06B6D4]" />
                <span className="text-gray-700">
                  shreeramrealtygroup@gmail.com
                </span>
              </div>
            </div>

            {/* SOCIAL */}
            <div>
              <h4 className="font-semibold text-gray-800 mb-4">Follow Us</h4>
              <div className="flex gap-4">
                {[FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter].map(
                  (Icon, i) => (
                    <div
                      key={i}
                      className="w-11 h-11 rounded-full bg-white shadow-md flex items-center justify-center text-gray-600 hover:bg-[#06B6D4] hover:text-white transition-all cursor-pointer hover:-translate-y-1"
                    >
                      <Icon />
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>

          {/* RIGHT FORM */}
          <ContactForm />
        </div>
      </section>
    </>
  );
};

export default Contact;
