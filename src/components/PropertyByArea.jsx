const propertyAreas = [
  {
    title: "Udyog Vihar",
    listings: "50 Listings",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "DLF Phase 3",
    listings: "38 Listings",
    image:
      "https://images.unsplash.com/photo-1501183638710-841dd1904471?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Golf Course Road",
    listings: "62 Listings",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Sohna Road",
    listings: "41 Listings",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
  },
];
const properties = [
  {
    title: "Udyog Vihar Office",
    price: "₹1.2 Cr",
    image:
      "https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    title: "DLF Phase 3 Office",
    price: "₹95 Lakh",
    image:
      "https://images.pexels.com/photos/17879690/pexels-photo-17879690.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    title: "Golf Course Road",
    price: "₹1.8 Cr",
    image:
      "https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Sohna Road Office",
    price: "₹1.1 Cr",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Cyber City Office",
    price: "₹2.3 Cr",
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Modern Glass Skyscraper",
    price: "₹2.0 Cr",
    image:
      "https://images.pexels.com/photos/373965/pexels-photo-373965.jpeg?auto=compress&cs=tinysrgb&w=800", 
    // modern skyscraper building view
  },
  {
    title: "Downtown Commercial Tower",
    price: "₹1.6 Cr",
    image:
      "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800", 
    // city downtown building
  },
  {
    title: "Tall Office Building",
    price: "₹2.5 Cr",
    image:
      "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800", 
    // high-rise office building
  },
];
const PropertyByArea = () => {
  return (
    <>
      <section className="py-16 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <div className="mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] text-center">
              Properties by Area
            </h2>
            <p className="text-gray-500 mt-2 text-center">
              Top properties from the most popular locations
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {propertyAreas.map((area, index) => (
              <div
                key={index}
                className="relative h-[280px] rounded-xl overflow-hidden group cursor-pointer"
              >
                {/* Image */}
                <img
                  src={area.image}
                  alt={area.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition"></div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
                  <h3 className="text-xl font-semibold text-white">
                    {area.title}
                  </h3>
                  <p className="text-md font-bold text-[#06B6D4]">
                    {area.listings}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* // property product grid */}
      <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A]">
            Featured Properties
          </h2>
          <p className="text-gray-500 mt-2">
            Explore our premium commercial properties with best deals.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {properties.map((property, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg group hover:shadow-2xl transition-shadow duration-300"
            >
              {/* Image + Overlay */}
              <div className="relative h-56">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition"></div>
                {/* Price */}
                <div className="absolute top-3 left-3 bg-gradient-to-r from-[#06B6D4] to-[#0EA5E9] text-white font-bold px-3 py-1 rounded shadow-lg">
                  {property.price}
                </div>
                {/* Hover icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-white text-3xl bg-black/40 p-3 rounded-full shadow-lg cursor-pointer">
                    <i className="fas fa-eye"></i>
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 flex flex-col items-center">
                <h3 className="text-lg font-semibold mb-3 text-center">
                  {property.title}
                </h3>
                <div className="flex gap-3 w-full">
                  <button className="flex-1 px-3 py-2 bg-gradient-to-r from-[#06B6D4] to-[#0EA5E9] text-[#0F172A] font-semibold rounded-lg hover:scale-105 transition-transform">
                    More Info
                  </button>
                  <button className="flex-1 px-3 py-2 border border-[#06B6D4] text-[#06B6D4] font-semibold rounded-lg hover:bg-[#06B6D4] hover:text-white transition-colors">
                    Call Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
};

export default PropertyByArea;
