import WhyChooseUs from "./Whychooseus";

const SynerziSection = () => {
  const items = [
    {
      letter: "S",
      title: "Signature Properties",
      description: "Properties having exceptional qualities.",
      img: "https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=400&q=80",
    },
    {
      letter: "R",
      title: "Remarkable",
      description: "Extraordinary properties that stand out.",
      img: "https://images.pexels.com/photos/373965/pexels-photo-373965.jpeg?auto=compress&cs=tinysrgb&w=400&q=80",
    },
    {
      letter: "M",
      title: "Modern Living",
      description: "Innovative and contemporary property designs.",
      img: "https://images.pexels.com/photos/323711/pexels-photo-323711.jpeg?auto=compress&cs=tinysrgb&w=400&q=80",
    },
  ];
  

  return (
    <>
      <section
        className="py-12 sm:py-16 lg:py-20 bg-cover bg-center relative"
        style={{
          backgroundImage:
            'url("https://images.pexels.com/photos/323776/pexels-photo-323776.jpeg?auto=compress&cs=tinysrgb&w=1600&q=80")',
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative max-w-7xl mx-auto px-4">
          {/* Section Title */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-white mb-10">
            SRM Highlights
          </h2>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-center justify-items-center">
            {items.map((item) => (
              <div
                key={item.letter}
                className="flex flex-col items-center text-center group"
              >
                {/* Circle Image */}
                <div className="relative w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 mb-4 rounded-full overflow-hidden shadow-xl">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <span className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
                      {item.letter}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-semibold text-white group-hover:text-[#06B6D4] transition mb-2">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm sm:text-base text-gray-200 leading-relaxed px-2 sm:px-4 lg:px-6">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <WhyChooseUs/>
    </>
  );
};

export default SynerziSection;
