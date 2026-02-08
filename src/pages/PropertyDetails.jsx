import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function PropertyDetails() {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);

  const PHONE_NUMBER = "9896707022";

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

  if (loading) return <div className="p-6 text-center">Loading...</div>;
  if (!property) return <div className="p-6 text-center">Property not found</div>;

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-8">
      {/* TOP SECTION */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* IMAGES */}
        <div>
          {property.images?.length > 0 ? (
            <>
              <img
                src={property.images[0]}
                alt={property.title}
                className="w-full h-[320px] md:h-[420px] object-cover rounded-xl"
              />
              <div className="flex gap-2 mt-3 flex-wrap">
                {property.images.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt=""
                    className="w-20 h-20 object-cover rounded-lg border"
                  />
                ))}
              </div>
            </>
          ) : (
            <div className="h-64 bg-gray-200 flex items-center justify-center rounded-lg">
              No Images
            </div>
          )}
        </div>

        {/* DETAILS */}
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
            {property.title}
          </h1>

          <p className="text-sm text-gray-500 mt-1">
            {property.location}, {property.city}, {property.state}
          </p>

          <div className="mt-4 flex flex-wrap gap-3">
            {property.category && (
              <span className="px-3 py-1 rounded-full bg-cyan-100 text-cyan-700 text-sm">
                {property.category}
              </span>
            )}
            {property.purpose && (
              <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm">
                {property.purpose}
              </span>
            )}
          </div>

          <div className="mt-6 text-3xl font-bold text-[#06B6D4]">
            ₹ {property.price}
          </div>

          {/* CALL & WHATSAPP */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
            <a
              href={`https://wa.me/91${PHONE_NUMBER}?text=Hi, I am interested in ${property.title}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 py-3 rounded-lg bg-green-500 text-white font-semibold hover:bg-green-600 transition"
            >
              💬 WhatsApp
            </a>

            <a
              href={`tel:+91${PHONE_NUMBER}`}
              className="flex items-center justify-center gap-2 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
            >
              📞 Call Now
            </a>
          </div>
        </div>
      </div>

      {/* PROPERTY INFO */}
      <div className="mt-10 bg-white rounded-xl shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Property Details</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
          <Detail label="Area" value={property.area} />
          <Detail label="BHK" value={property.bhk} />
          <Detail label="Bathrooms" value={property.bathrooms} />
          <Detail label="Balconies" value={property.balconies} />
          <Detail label="Parking" value={property.parking} />
          <Detail label="Facing" value={property.facing} />
          <Detail label="Total Floors" value={property.totalFloors} />
          <Detail label="City" value={property.city} />
          <Detail label="State" value={property.state} />
        </div>
      </div>

      {/* DESCRIPTION */}
      {property.description && (
        <div className="mt-8 bg-white rounded-xl shadow p-6">
          <h2 className="text-xl font-semibold mb-3">Description</h2>
          <p className="text-gray-600 leading-relaxed">
            {property.description}
          </p>
        </div>
      )}

      {/* AMENITIES */}
      {property.amenities?.length > 0 && (
        <div className="mt-8 bg-white rounded-xl shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Amenities</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {property.amenities.map((a, i) => (
              <span
                key={i}
                className="px-3 py-2 rounded-lg bg-gray-100 text-gray-700 text-sm"
              >
                ✔ {a}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

const Detail = ({ label, value }) => {
  if (!value) return null;
  return (
    <div className="flex flex-col bg-gray-50 p-3 rounded-lg">
      <span className="text-gray-500 text-xs">{label}</span>
      <span className="font-semibold text-gray-800">{value}</span>
    </div>
  );
};
