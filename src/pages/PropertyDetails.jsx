import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function PropertyDetails() {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        const res = await fetch(
          `https://vercel-synerzi-sbckend.vercel.app/api/properties/${id}`
        );
        const data = await res.json();
        setProperty(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchProperty();
  }, [id]);

  if (loading) return <div className="p-6">Loading...</div>;
  if (!property) return <div className="p-6">Property not found</div>;

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Images */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        {property.images?.map((img, idx) => (
          <img
            key={idx}
            src={img}
            className="w-full h-64 object-cover rounded-lg"
          />
        ))}
      </div>

      {/* Title */}
      <h1 className="text-2xl font-bold mb-2">{property.title}</h1>

      {/* Price */}
      <p className="text-xl text-[#06B6D4] font-semibold mb-4">
        ₹ {property.price}
      </p>

      {/* Details */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm mb-6">
        <div><b>City:</b> {property.city}</div>
        <div><b>Area:</b> {property.area} sq ft</div>
        <div><b>BHK:</b> {property.bhk}</div>
        <div><b>Parking:</b> {property.parking}</div>
      </div>

      {/* Description */}
      <div className="mb-6">
        <h3 className="font-semibold mb-2">Description</h3>
        <p className="text-gray-600">{property.description}</p>
      </div>

      {/* Amenities */}
      {property.amenities?.length > 0 && (
        <div>
          <h3 className="font-semibold mb-2">Amenities</h3>
          <div className="flex flex-wrap gap-2">
            {property.amenities.map((a, i) => (
              <span
                key={i}
                className="px-3 py-1 bg-gray-100 rounded-full text-sm"
              >
                {a}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
