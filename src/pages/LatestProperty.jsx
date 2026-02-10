import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function LatestProperty() {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://vercel-synerzi-sbckend.vercel.app/api/properties")
      .then(res => res.json())
      .then(data => {
        const latest = data.filter(p => p.isLatest === true);
        setProperties(latest);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="text-center py-10">Loading latest properties...</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-8 text-center">
        🆕 Latest Properties
      </h1>

      {properties.length === 0 ? (
        <p className="text-center text-gray-500">
          No latest properties found
        </p>
      ) : (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {properties.map(p => (
            <div
              key={p._id}
              className="bg-white rounded-xl shadow hover:shadow-lg"
            >
              <img
                src={
                  p.images?.[0]?.startsWith("http")
                    ? p.images[0]
                    : `https://vercel-synerzi-sbckend.vercel.app/${p.images?.[0]}`
                }
                className="h-52 w-full object-cover rounded-t-xl"
              />

              <div className="p-4">
                <h3 className="font-semibold">{p.title}</h3>
                <p className="text-sm text-gray-500">
                  {p.city}, {p.location}
                </p>

                <div className="mt-4 flex justify-between">
                  <span className="text-[#06B6D4] font-bold">₹ {p.price}</span>
                  <Link
                    to={`/property/${p._id}`}
                    className="text-sm px-4 py-2 rounded-full border border-[#06B6D4] text-[#06B6D4] hover:bg-[#06B6D4] hover:text-[#0F172A] transition"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
