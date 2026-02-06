import { FaRegClock, FaBuilding, FaUserCheck, FaHandsHelping } from "react-icons/fa";

const WhyChooseUs = () => {
  const features = [
    {
      title: "10+ Years Experience",
      description: "Over a decade of excellence in delivering top-quality properties.",
      icon: <FaRegClock className="text-cyan-500 text-5xl mb-4" />,
    },
    {
      title: "500+ Properties",
      description: "A vast portfolio of residential and commercial properties.",
      icon: <FaBuilding className="text-cyan-500 text-5xl mb-4" />,
    },
    {
      title: "Trusted Advisors",
      description: "Professional guidance ensuring smooth property transactions.",
      icon: <FaUserCheck className="text-cyan-500 text-5xl mb-4" />,
    },
    {
      title: "Client Satisfaction",
      description: "Our clients are at the heart of everything we do.",
      icon: <FaHandsHelping className="text-cyan-500 text-5xl mb-4" />,
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-cyan-50 to-sky-100">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl sm:text-5xl font-bold text-center text-gray-800 mb-12">
          Why Choose Us
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-8 flex flex-col items-center text-center shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl cursor-pointer"
            >
              {feature.icon}
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
