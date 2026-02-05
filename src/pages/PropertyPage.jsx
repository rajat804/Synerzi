import { useEffect, useState } from "react";

export default function PropertyPage() {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch properties from backend
  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const res = await fetch("http://localhost:4000/api/properties");
        if (!res.ok) throw new Error("Failed to fetch properties");
        const data = await res.json();
        setProperties(data);
      } catch (err) {
        console.error(err);
        setError("Failed to load properties");
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center text-lg">
        Loading properties...
      </div>
    );

  if (error)
    return (
      <div className="min-h-screen flex items-center justify-center text-red-600">
        {error}
      </div>
    );

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
            <select className="border rounded-lg px-4 py-3 text-gray-600 focus:ring-2 focus:ring-[#06B6D4] outline-none">
              <option>Type</option>
              <option>Buy</option>
              <option>Rent</option>
            </select>

            <select className="border rounded-lg px-4 py-3 text-gray-600 focus:ring-2 focus:ring-[#06B6D4] outline-none">
              <option>Category</option>
              <option>Apartment</option>
              <option>Villa</option>
              <option>Plot</option>
              <option>Commercial</option>
              <option>Office Space</option>
            </select>

            <select className="border rounded-lg px-4 py-3 text-gray-600 focus:ring-2 focus:ring-[#06B6D4] outline-none">
              <option>State</option>
              <option>Maharashtra</option>
              <option>Delhi</option>
              <option>Karnataka</option>
              <option>Gujarat</option>
            </select>

            <select className="border rounded-lg px-4 py-3 text-gray-600 focus:ring-2 focus:ring-[#06B6D4] outline-none">
              <option>City</option>
              <option>Mumbai</option>
              <option>Pune</option>
              <option>Bangalore</option>
              <option>Ahmedabad</option>
            </select>

            <input
              type="text"
              placeholder="Area (sq ft)"
              className="border rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#06B6D4] outline-none"
            />

            <button className="bg-gradient-to-r from-[#06B6D4] to-[#0EA5E9] text-[#0F172A] rounded-lg font-semibold hover:scale-105 transition">
              Search
            </button>
          </div>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.length === 0 ? (
              <p className="text-center col-span-full text-gray-600">
                No properties available
              </p>
            ) : (
              properties.map((item) => (
                <div
                  key={item._id}
                  className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden group"
                >
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden">
                    {item.images && item.images.length > 0 ? (
                      <img
                        src={`http://localhost:4000/${item.images[0]}`}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-500">
                        No Image
                      </div>
                    )}

                    <span className="absolute top-4 left-4 bg-[#06B6D4] text-[#0F172A] text-xs px-3 py-1 rounded-full font-semibold shadow">
                      {item.type}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {item.title}
                    </h3>
                    {/* State & City */}
                    <p className="text-gray-500 text-sm mt-1">
                      {item.state}, {item.city}
                    </p>
                    {/* Description */}
                    <p className="text-gray-600 text-sm mt-3 line-clamp-2">
                      {item.description}
                    </p>
                    {/* Price */}
                    <div className="flex justify-between items-center mt-5">
                      <span className="text-[#06B6D4] font-bold flex items-center">
                        <span className="mr-1">₹</span> {item.price}
                      </span>
                      <button className="text-sm px-4 py-2 rounded-full border border-[#06B6D4] text-[#06B6D4] hover:bg-[#06B6D4] hover:text-[#0F172A] transition">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* View All Button */}
          <div className="flex justify-center mt-12">
            <a
              href="/properties"
              className="px-8 py-3 rounded-full bg-gradient-to-r from-[#06B6D4] to-[#0EA5E9] text-[#0F172A] font-semibold shadow-lg hover:scale-105 transition-transform"
            >
              View All Properties
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
