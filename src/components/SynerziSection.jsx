const SynerziSection = () => {
  const items = [
    {
      letter: "S",
      title: "Signature Properties",
      description: "Properties having exceptional qualities.",
      img: "https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=400&q=80",
    },
    {
      letter: "Y",
      title: "Yielding",
      description: "Generating huge profitable return on investment.",
      img: "https://images.pexels.com/photos/17879690/pexels-photo-17879690.jpeg?auto=compress&cs=tinysrgb&w=400&q=80",
    },
    {
      letter: "N",
      title: "Neighborhood",
      description: "Fostering a sense of community around.",
      img: "https://images.pexels.com/photos/323711/pexels-photo-323711.jpeg?auto=compress&cs=tinysrgb&w=400&q=80",
    },
    {
      letter: "E",
      title: "Exquisite",
      description: "Exclusively crafted properties of exceptional beauty.",
      img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
    },
    {
      letter: "R",
      title: "Remarkable",
      description: "Extraordinary properties that stand out.",
      img: "https://images.pexels.com/photos/373965/pexels-photo-373965.jpeg?auto=compress&cs=tinysrgb&w=400&q=80",
    },
    {
      letter: "Z",
      title: "Zoning",
      description: "Well-regulated properties conforming to land use rules.",
      img: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=400&q=80",
    },
    {
      letter: "I",
      title: "Instant Equity",
      description: "Offering unique opportunities with desirable returns.",
      img: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=400&q=80",
    },
  ];

  return (
    <section
      className="py-12 sm:py-14 lg:py-16 bg-cover bg-center relative"
      style={{
        backgroundImage: `url("https://images.pexels.com/photos/323776/pexels-photo-323776.jpeg?auto=compress&cs=tinysrgb&w=1600&q=80")`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative max-w-7xl mx-auto px-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-6">
        {items.map((item) => (
          <div
            key={item.letter}
            className="text-center group flex flex-col items-center"
          >
            {/* Circle */}
            <div className="relative w-20 h-20 sm:w-22 sm:h-22 lg:w-24 lg:h-24 mb-3 rounded-full overflow-hidden shadow-lg">
              <img
                src={item.img}
                alt={item.letter}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <span className="text-3xl lg:text-4xl font-bold text-white">
                  {item.letter}
                </span>
              </div>
            </div>

            {/* Title */}
            <h3 className="text-sm sm:text-base font-semibold text-white group-hover:text-[#06B6D4] transition">
              {item.title}
            </h3>

            {/* Description (hidden on very small screens) */}
            <p className="hidden sm:block text-xs text-gray-200 mt-1 leading-snug">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SynerziSection;
