import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const CategoryProperties = () => {
  const { category } = useParams();
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://vercel-synerzi-sbckend.vercel.app/api/properties/category/${category}`)
      .then((res) => {
        setProperties(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [category]);

  if (loading) return <p className="text-center py-10">Loading...</p>;

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold mb-6 capitalize">
        {category} Properties
      </h2>

      {properties.length === 0 ? (
        <p>No properties found</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((p) => (
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
};

export default CategoryProperties;
