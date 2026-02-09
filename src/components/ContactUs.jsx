import ContactForm from "./ContactForm";

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

          <ContactForm/>
        </div>
      </div>
    </section>
  );
}
