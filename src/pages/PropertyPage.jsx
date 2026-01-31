import React from "react";

const properties = [
  {
    id: 1,
    title: "Luxury Apartment",
    location: "Mumbai, India",
    price: "₹1.2 Cr",
    type: "For Sale",
    description:
      "Spacious luxury apartment with modern interiors, premium amenities, and excellent connectivity in the heart of Mumbai.",
    img: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    id: 2,
    title: "Modern Villa",
    location: "Pune, India",
    price: "₹2.5 Cr",
    type: "For Sale",
    description:
      "Elegant modern villa featuring a private garden, ample parking, and a peaceful environment in a prime Pune locality.",
    img: "https://images.pexels.com/photos/164558/pexels-photo-164558.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    id: 3,
    title: "Office Space",
    location: "Bangalore, India",
    price: "₹80,000 / month",
    type: "For Rent",
    description:
      "Fully furnished office space with conference rooms, high-speed internet, and proximity to IT hubs.",
    img: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    id: 4,
    title: "Premium Penthouse",
    location: "Delhi, India",
    price: "₹3.8 Cr",
    type: "For Sale",
    description:
      "Ultra-luxury penthouse with skyline views, private terrace, and top-class amenities.",
    img: "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    id: 5,
    title: "Retail Shop",
    location: "Ahmedabad, India",
    price: "₹45,000 / month",
    type: "For Rent",
    description:
      "Well-located retail shop ideal for showroom or boutique, with heavy footfall area.",
    img: "https://images.pexels.com/photos/37347/office-skyline-building.jpg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    id: 6,
    title: "Independent House",
    location: "Jaipur, India",
    price: "₹95 Lakh",
    type: "For Sale",
    description:
      "Beautiful independent house with spacious rooms, parking space, and family-friendly neighborhood.",
    img: "https://images.pexels.com/photos/276554/pexels-photo-276554.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    id: 7,
    title: "Co-working Space",
    location: "Hyderabad, India",
    price: "₹15,000 / seat",
    type: "For Rent",
    description:
      "Modern co-working space with flexible seating, cafeteria, and high-speed connectivity.",
    img: "https://images.pexels.com/photos/3184634/pexels-photo-3184634.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    id: 8,
    title: "Studio Apartment",
    location: "Noida, India",
    price: "₹18,000 / month",
    type: "For Rent",
    description:
      "Compact and stylish studio apartment suitable for working professionals.",
    img: "https://images.pexels.com/photos/271795/pexels-photo-271795.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    id: 9,
    title: "Commercial Plot",
    location: "Surat, India",
    price: "₹4.5 Cr",
    type: "For Sale",
    description:
      "Prime commercial plot suitable for investment or business development.",
    img: "https://images.pexels.com/photos/259950/pexels-photo-259950.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
];

const PropertyPage = () => {
  return (
    <>
      {/* HERO */}
      <section
        className="relative h-[45vh] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1600)",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative text-center text-white px-4">
          <h1 className="text-3xl md:text-4xl font-bold">All Properties</h1>
          <p className="mt-2 text-gray-200">Home / All Properties</p>
        </div>
      </section>

      {/* FILTER BAR */}
      <section className="bg-white py-8 shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {/* Type */}
            <select className="border rounded-lg px-4 py-3 text-gray-600 focus:ring-2 focus:ring-[#06B6D4] outline-none">
              <option>Type</option>
              <option>Buy</option>
              <option>Rent</option>
            </select>

            {/* Category */}
            <select className="border rounded-lg px-4 py-3 text-gray-600 focus:ring-2 focus:ring-[#06B6D4] outline-none">
              <option>Category</option>
              <option>Apartment</option>
              <option>Villa</option>
              <option>Plot</option>
              <option>Commercial</option>
              <option>Office Space</option>
            </select>

            {/* State */}
            <select className="border rounded-lg px-4 py-3 text-gray-600 focus:ring-2 focus:ring-[#06B6D4] outline-none">
              <option>State</option>
              <option>Maharashtra</option>
              <option>Delhi</option>
              <option>Karnataka</option>
              <option>Gujarat</option>
            </select>

            {/* City */}
            <select className="border rounded-lg px-4 py-3 text-gray-600 focus:ring-2 focus:ring-[#06B6D4] outline-none">
              <option>City</option>
              <option>Mumbai</option>
              <option>Pune</option>
              <option>Bangalore</option>
              <option>Ahmedabad</option>
            </select>

            {/* Area */}
            <input
              type="text"
              placeholder="Area (sq ft)"
              className="border rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#06B6D4] outline-none"
            />

            {/* Search */}
            <button className="bg-gradient-to-r from-[#06B6D4] to-[#0EA5E9] text-[#0F172A] rounded-lg font-semibold hover:scale-105 transition">
              Search
            </button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          {/* Properties Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden group"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />

                  <span className="absolute top-4 left-4 bg-[#06B6D4] text-[#0F172A] text-xs px-3 py-1 rounded-full font-semibold shadow">
                    {item.type}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {item.title}
                  </h3>

                  <p className="text-gray-500 text-sm mt-1">{item.location}</p>

                  {/* Description */}
                  <p className="text-gray-600 text-sm mt-3 line-clamp-2">
                    {item.description}
                  </p>

                  {/* Price + Button */}
                  <div className="flex justify-between items-center mt-5">
                    <span className="text-[#06B6D4] font-bold">
                      {item.price}
                    </span>

                    <button
                      className="text-sm px-4 py-2 rounded-full border border-[#06B6D4] text-[#06B6D4]
                hover:bg-[#06B6D4] hover:text-[#0F172A] transition"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View All Button */}
          <div className="flex justify-center mt-12">
            <a
              href="/properties"
              className="px-8 py-3 rounded-full bg-gradient-to-r from-[#06B6D4] to-[#0EA5E9]
        text-[#0F172A] font-semibold shadow-lg hover:scale-105 transition-transform"
            >
              View All Properties
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default PropertyPage;
