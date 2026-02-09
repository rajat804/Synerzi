import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function PropertyPage() {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  /* ================= FETCH PROPERTIES ================= */
  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const res = await fetch(
          "https://vercel-synerzi-sbckend.vercel.app/api/properties",
        );
        if (!res.ok) throw new Error("Failed to fetch properties");

        const data = await res.json();

        // 🔥 DESC ORDER (latest first)
        const sorted = [...data].sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
        );

        setProperties(sorted);
      } catch (err) {
        console.error(err);
        setError("Failed to load properties");
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  /* ================= HELPERS ================= */
  const truncateText = (text, limit = 120) => {
    if (!text) return "No description available";
    return text.length > limit ? text.slice(0, limit) + "..." : text;
  };

  /* ================= LOADING / ERROR ================= */
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-lg">
        Loading properties...
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-600">
        {error}
      </div>
    );
  }

  return (
    <>
      {/* ================= HERO ================= */}
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
      {/* <section className="bg-white py-8 shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <select className="border rounded-lg px-4 py-3 text-gray-600 focus:ring-2 focus:ring-[#06B6D4] outline-none">
              <option>Type</option>
              <option>Buy</option>
              <option>Rent</option>
              <option>Sale</option>
              <option>Lease</option>
            </select>

            <select className="border rounded-lg px-4 py-3 text-gray-600 focus:ring-2 focus:ring-[#06B6D4] outline-none">
              <option>Property Type</option>
              <option>Apartment</option>
              <option>Villa</option>
              <option>Plot</option>
              <option>Commercial</option>
              <option>Office Space</option>
            </select>

            <div>
              <input
                list="states"
                placeholder="State"
                className="border rounded-lg px-4 py-3 w-full text-gray-600 focus:ring-2 focus:ring-[#06B6D4] outline-none"
              />
              <datalist id="states">
                <option value="Maharashtra" />
                <option value="Delhi" />
                <option value="Karnataka" />
                <option value="Gujarat" />
                <option value="Rajasthan" />
                <option value="Uttar Pradesh" />
              </datalist>
            </div>

            <div>
              <input
                list="cities"
                placeholder="City"
                className="border rounded-lg px-4 py-3 w-full text-gray-600 focus:ring-2 focus:ring-[#06B6D4] outline-none"
              />
              <datalist id="cities">
                <option value="Mumbai" />
                <option value="Pune" />
                <option value="Delhi" />
                <option value="Bangalore" />
                <option value="Ahmedabad" />
                <option value="Jaipur" />
              </datalist>
            </div>

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
      </section> */}
      <div className="w-full px-4">
        <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-xl p-5 sm:p-6 md:p-8 -mt-20 sm:-mt-24 relative z-20">
          <SearchBox />
        </div>
      </div>

      {/* ================= PROPERTIES GRID ================= */}
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
                  {/* IMAGE */}
                  <div className="relative h-56 overflow-hidden">
                    {item.images?.length > 0 ? (
                      <img
                        src={
                          item.images[0].startsWith("http")
                            ? item.images[0] // Cloudinary
                            : `https://vercel-synerzi-sbckend.vercel.app/${item.images[0]}`
                        }
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                        No Image
                      </div>
                    )}

                    {/* PURPOSE BADGE */}
                    <span className="absolute top-4 left-4 bg-[#06B6D4] text-[#0F172A] text-xs px-3 py-1 rounded-full font-semibold shadow">
                      {item.purpose || "Property"}
                    </span>
                  </div>

                  {/* CONTENT */}
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {item.title}
                    </h3>

                    <p className="text-gray-500 text-sm mt-1">
                      {item.city}, {item.state}
                    </p>

                    <p className="text-gray-600 text-sm mt-3">
                      {truncateText(item.description)}
                    </p>

                    <div className="flex justify-between items-center mt-5">
                      <span className="text-[#06B6D4] font-bold">
                        ₹ {item.price}
                      </span>

                      <Link
                        to={`/property/${item._id}`}
                        className="text-sm px-4 py-2 rounded-full border border-[#06B6D4] text-[#06B6D4] hover:bg-[#06B6D4] hover:text-[#0F172A] transition"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>
    </>
  );
}
