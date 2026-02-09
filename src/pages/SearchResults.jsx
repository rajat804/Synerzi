import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";

const SearchResults = () => {
  const { search } = useLocation();
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchResults = async () => {
      setLoading(true);
      const res = await fetch(
        `https://vercel-synerzi-sbckend.vercel.app/api/properties/search${search}`
      );
      const data = await res.json();
      setProperties(data);
      setLoading(false);
    };

    fetchResults();
  }, [search]);

  if (loading) return <div className="p-10">Loading...</div>;

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-6">
        Search Results ({properties.length})
      </h2>

      {properties.length === 0 ? (
        <p>No property found</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {properties.map((item) => (
            <div
              key={item._id}
              className="bg-white rounded-xl shadow hover:shadow-lg overflow-hidden"
            >
              <img
                src={item.images?.[0]}
                className="h-48 w-full object-cover"
              />

              <div className="p-4">
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-sm text-gray-500">
                  {item.location}, {item.city}
                </p>
                <p className="text-[#06B6D4] font-bold mt-2">
                  ₹ {item.price}
                </p>

                <Link
                  to={`/property/${item._id}`}
                  className="block mt-3 text-center text-sm py-2 rounded bg-[#06B6D4] text-white"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchResults;
