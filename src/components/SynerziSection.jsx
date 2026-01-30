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
      className="py-20 bg-cover bg-center relative"
      style={{
        backgroundImage: `url("https://images.pexels.com/photos/323776/pexels-photo-323776.jpeg?auto=compress&cs=tinysrgb&w=1600&q=80")`, // premium building background
      }}
    >
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-8">
        {items.map((item) => (
          <div key={item.letter} className="text-center group">
            {/* Letter with background image + overlay */}
            <div className="relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden shadow-xl">
              <img
                src={item.img}
                alt={item.letter}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <span className="text-4xl font-bold text-white">{item.letter}</span>
              </div>
            </div>

            {/* Title */}
            <h3 className="text-lg font-semibold mb-1 text-white group-hover:text-[#06B6D4] transition-colors">
              {item.title}
            </h3>

            {/* Description */}
            <p className="text-sm text-gray-200">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SynerziSection;
