import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SearchBox from "./SearchBox";

export default function PropertyPage() {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const BASE_API = import.meta.env.VITE_BASE_URL;

  /* ================= FETCH PROPERTIES ================= */
  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const res = await fetch(`${BASE_API}/api/properties`);
        if (!res.ok) throw new Error("Failed to fetch properties");

        const data = await res.json();

        // Latest first
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
  }, [BASE_API]);

  /* ================= REMOVE HTML + TRUNCATE ================= */
  const truncateText = (text, limit = 120) => {
    if (!text) return "No description available";

    // 🔥 Remove all HTML tags safely
    const doc = new DOMParser().parseFromString(text, "text/html");
    const plainText = doc.body.textContent || "";

    return plainText.length > limit
      ? plainText.slice(0, limit) + "..."
      : plainText;
  };

  /* ================= LOADING ================= */
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-lg">
        Loading properties...
      </div>
    );
  }

  /* ================= ERROR ================= */
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
        className="relative min-h-[50vh] sm:min-h-[55vh] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1600)",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative text-center text-white px-4 z-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            All Properties
          </h1>
          <p className="mt-2 text-sm sm:text-base text-gray-200">
            Home / All Properties
          </p>
        </div>
      </section>

      {/* ================= FILTER BAR ================= */}
      <div className="w-full px-4 relative z-20">
        <div
          className="max-w-7xl mx-auto bg-white rounded-2xl shadow-xl p-5 sm:p-6 md:p-8 
                  -mt-10 sm:-mt-16 md:-mt-20"
        >
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
                            ? item.images[0]
                            : `${BASE_API}/${item.images[0]}`
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
                      {item.city || "Location not specified"}
                    </p>

                    <p className="text-gray-600 text-sm mt-3">
                      {truncateText(item.description)}
                    </p>

                    <div className="flex justify-between items-center mt-5">
                      <span className="text-[#06B6D4] font-bold">
                        ₹ {item.price || "On Request"}
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
