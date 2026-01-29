import innerImage from "../assets/images/innerfirst-img.jpg";

const Home = () => {
  return (
    <>
      <div className="mt-16">
  {/* Background Image Section with Overlay */}
  <section
    className="w-full h-[80vh] relative flex items-center justify-center"
    style={{
      backgroundImage: `url(${innerImage})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    {/* Overlay */}
    <div className="absolute inset-0 bg-black/50"></div>

    {/* Content */}
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left">
      <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
        Welcome to Synerzi
      </h2>
      <p className="text-lg md:text-2xl text-gray-200 mb-6 drop-shadow-md">
        Discover innovative solutions and amazing features crafted to boost your business.
      </p>
      <a
        href="#contact"
        className="px-6 py-3 rounded-full bg-gradient-to-r from-[#06B6D4] to-[#0EA5E9] text-[#0F172A] font-semibold shadow-lg hover:scale-105 transition-transform duration-300"
      >
        Get Started
      </a>
    </div>
  </section>
</div>

    </>
  );
};

export default Home;
