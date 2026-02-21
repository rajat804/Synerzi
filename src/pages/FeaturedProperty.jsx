import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function FeaturedProperty() {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const BASE_API = import.meta.env.VITE_BASE_URL;

  /* ================= SAFE HTML REMOVE ================= */
  const stripHtml = (html) => {
    if (!html) return "No description available";

    try {
      const doc = new DOMParser().parseFromString(html, "text/html");
      return doc.body.textContent || "";
    } catch (err) {
      return html.replace(/<[^>]+>/g, "");
    }
  };

  /* ================= TRUNCATE TEXT ================= */
  const truncateText = (text, limit = 120) => {
    if (!text) return "No description available";
    return text.length > limit ? text.slice(0, limit) + "..." : text;
  };

  /* ================= FETCH FEATURED ================= */
  useEffect(() => {
    const fetchFeatured = async () => {
      try {
        const res = await fetch(`${BASE_API}/api/properties`);
        if (!res.ok) throw new Error("Failed to fetch properties");

        const data = await res.json();

        const featured = data
          .filter((p) => p.isFeatured === true)
          .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

        setProperties(featured);
      } catch (err) {
        console.error(err);
        setError("Failed to load featured properties");
      } finally {
        setLoading(false);
      }
    };

    fetchFeatured();
  }, [BASE_API]);

  /* ================= LOADING ================= */
  if (loading) {
    return (
      <div className="text-center py-16 text-lg">
        Loading featured properties...
      </div>
    );
  }

  /* ================= ERROR ================= */
  if (error) {
    return (
      <div className="text-center py-16 text-red-600">
        {error}
      </div>
    );
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">
          ⭐ Featured Properties
        </h2>

        {properties.length === 0 ? (
          <p className="text-center text-gray-500">
            No featured properties available
          </p>
        ) : (
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {properties.map((p) => {
              const cleanDescription = truncateText(
                stripHtml(p.description)
              );

              return (
                <div
                  key={p._id}
                  className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden group"
                >
                  {/* IMAGE */}
                  <div className="relative h-56 overflow-hidden">
                    {p.images && p.images.length > 0 ? (
                      <img
                        src={
                          p.images[0].startsWith("http")
                            ? p.images[0]
                            : `${BASE_API}/${p.images[0]}`
                        }
                        alt={p.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-500">
                        No Image
                      </div>
                    )}

                    {/* Featured Badge */}
                    <span className="absolute top-4 left-4 bg-yellow-400 text-black text-xs px-3 py-1 rounded-full font-semibold shadow">
                      Featured
                    </span>
                  </div>

                  {/* CONTENT */}
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {p.title}
                    </h3>

                    <p className="text-gray-500 text-sm mt-1">
                      {p.city}, {p.location}
                    </p>

                    <p className="text-gray-600 text-sm mt-3">
                      {cleanDescription}
                    </p>

                    <div className="flex justify-between items-center mt-5">
                      <span className="text-[#06B6D4] font-bold text-lg">
                        ₹ {p.price}
                      </span>

                      <Link
                        to={`/property/${p._id}`}
                        className="text-sm px-4 py-2 rounded-full border border-[#06B6D4] text-[#06B6D4] hover:bg-[#06B6D4] hover:text-[#0F172A] transition"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
