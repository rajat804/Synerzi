import Faq from "../components/Faq";
import SynerziSection from "../components/SynerziSection";

const AboutUs = () => {
  const stats = [
    {
      title: "Property Sold",
      value: "1,250+",
    },
    {
      title: "Property Rented",
      value: "980+",
    },
    {
      title: "Property Listed",
      value: "2,300+",
    },
  ];
  return (
    <>
      {/* hero section || inner image section */}
      <section
        className="relative w-full min-h-[65vh] md:min-h-[75vh] flex items-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative max-w-7xl mx-auto px-4 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="text-[#06B6D4]">Synerzi</span>
          </h1>

          <p className="max-w-2xl text-gray-200 text-base md:text-lg leading-relaxed">
            We are a passionate team working together to deliver innovative,
            transparent, and customer-focused real estate solutions.
          </p>
        </div>
      </section>
      {/* more about us section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* LEFT CONTENT */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-8">
                More About <span className="text-[#06B6D4]">Synerzi</span>
              </h2>

              {/* Mission */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-[#0F172A] mb-2">
                  Our Mission
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Our mission is to simplify real estate decisions by providing
                  transparent, reliable, and innovative solutions that truly
                  benefit our clients.
                </p>
              </div>

              {/* Vision */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-[#0F172A] mb-2">
                  Our Vision
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  We envision becoming a trusted real estate brand known for
                  professionalism, integrity, and long-term relationships with
                  our clients.
                </p>
              </div>

              {/* How Started */}
              <div>
                <h3 className="text-xl font-semibold text-[#0F172A] mb-2">
                  How Synerzi Started
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Synerzi was founded with a simple idea — to bring clarity,
                  honesty, and innovation into the real estate industry through
                  a customer-first approach.
                </p>
              </div>
            </div>

            {/* RIGHT GRID BOXES */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">
                <h4 className="text-lg font-semibold text-[#06B6D4] mb-2">
                  Trust & Transparency
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  We believe in open communication and honest dealings that
                  build long-term trust with our clients.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">
                <h4 className="text-lg font-semibold text-[#06B6D4] mb-2">
                  Customer First
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Every decision we make is guided by what’s best for our
                  customers and their investments.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">
                <h4 className="text-lg font-semibold text-[#06B6D4] mb-2">
                  Innovation Driven
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  We use modern tools and insights to deliver smarter and faster
                  real estate solutions.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">
                <h4 className="text-lg font-semibold text-[#06B6D4] mb-2">
                  Sustainable Growth
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Our focus is on long-term growth that benefits clients,
                  partners, and communities alike.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* synerzi section  */}
      <SynerziSection />

      {/* Our client section */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          {/* Heading */}
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Our Trusted Clients
            </h2>
            <p className="text-gray-500 mt-2 text-sm md:text-base">
              Brands and companies we proudly work with
            </p>
          </div>

          {/* Logos Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
            {[
              "https://upload.wikimedia.org/wikipedia/commons/a/ab/Logo_TV_2015.png",
              "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
              "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
              "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
              "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
              "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
            ].map((logo, index) => (
              <div
                key={index}
                className="flex items-center justify-center grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition duration-300"
              >
                <img
                  src={logo}
                  alt="Client Logo"
                  className="h-10 md:h-12 object-contain mb-3"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <Faq />

      {/* stars section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute -top-24 -left-24 w-72 h-72 bg-[#06B6D4]/20 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 -right-24 w-72 h-72 bg-blue-500/10 blur-3xl rounded-full"></div>

        <div className="relative max-w-7xl mx-auto px-4">
          {/* Heading */}
          <div className="text-center mb-14">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 tracking-tight">
              SYNERZI STATS
            </h2>
            <p className="text-gray-600 mt-3 max-w-xl mx-auto">
              Our real estate journey reflected through trust, growth and
              results
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {stats.map((item, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-3xl p-8 text-center border border-gray-200 shadow-sm
          hover:shadow-xl hover:-translate-y-2 transition-all duration-500"
              >
                {/* Hover gradient border */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-[#06B6D4] to-blue-500 opacity-0 group-hover:opacity-10 transition"></div>

                {/* Icon (optional) */}
                {item.icon && (
                  <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-full bg-[#06B6D4]/10 text-[#06B6D4] text-2xl">
                    {item.icon}
                  </div>
                )}

                <h3 className="text-4xl md:text-5xl font-extrabold text-[#06B6D4]">
                  {item.value}
                </h3>

                <p className="mt-3 text-gray-700 font-semibold tracking-wide">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About us contact section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden grid grid-cols-1 lg:grid-cols-2">
            {/* LEFT IMAGE */}
            <div className="relative h-72 lg:h-auto overflow-hidden group">
              <img
                src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="Team Meeting"
                className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-700"
              />

              {/* Premium Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-black/40 to-transparent"></div>

              {/* Soft Color Overlay */}
              <div className="absolute inset-0 bg-[#06B6D4]/20 mix-blend-multiply"></div>

              {/* Optional Text (looks premium) */}
              <div className="absolute bottom-8 left-8 text-white max-w-xs">
                <h3 className="text-2xl font-bold leading-tight">
                  Smart Conversations.
                  <br />
                  Better Decisions.
                </h3>
                <p className="text-sm text-gray-200 mt-2">
                  Trusted by professionals & growing teams
                </p>
              </div>
            </div>

            {/* RIGHT FORM */}
            <div className="p-8 sm:p-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center">
                Get in touch to plan your next transaction
              </h2>

              <p className="text-gray-600 mt-4 mb-8">
                Our expert team would love to contribute their expertise and
                insights and help you today.
              </p>

              <form className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="text-sm text-gray-600">First name*</label>
                  <input
                    type="text"
                    placeholder="First name"
                    className="w-full mt-2 px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#06B6D4] outline-none"
                  />
                </div>

                <div>
                  <label className="text-sm text-gray-600">Last name*</label>
                  <input
                    type="text"
                    placeholder="Last name"
                    className="w-full mt-2 px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#06B6D4] outline-none"
                  />
                </div>

                <div>
                  <label className="text-sm text-gray-600">Email*</label>
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full mt-2 px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#06B6D4] outline-none"
                  />
                </div>

                <div>
                  <label className="text-sm text-gray-600">Mobile*</label>
                  <input
                    type="text"
                    placeholder="Mobile"
                    className="w-full mt-2 px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#06B6D4] outline-none"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="text-sm text-gray-600">Message</label>
                  <textarea
                    rows="4"
                    placeholder="Message"
                    className="w-full mt-2 px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#06B6D4] outline-none"
                  ></textarea>
                </div>

                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    className="w-full bg-[#0A66C2] hover:bg-[#084e96] text-white py-3 rounded-lg font-semibold transition"
                  >
                    Send Email
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
