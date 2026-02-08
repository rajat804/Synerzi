import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function PropertyDetails() {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeImage, setActiveImage] = useState("");

  const PHONE = "9896707022";

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        const res = await fetch(
          `https://vercel-synerzi-sbckend.vercel.app/api/properties/${id}`
        );
        const data = await res.json();
        setProperty(data);
        setActiveImage(data?.images?.[0]);
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
    <div className="max-w-7xl mx-auto px-4 py-6">
      {/* TOP SECTION */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* IMAGE GALLERY */}
        <div>
          <div className="rounded-xl overflow-hidden border">
            <img
              src={activeImage}
              alt="property"
              className="w-full h-[260px] sm:h-[360px] lg:h-[420px] object-cover"
            />
          </div>

          {/* Thumbnails */}
          <div className="flex gap-3 mt-4 flex-wrap">
            {property.images?.map((img, idx) => (
              <img
                key={idx}
                src={img}
                onClick={() => setActiveImage(img)}
                className={`w-20 h-20 object-cover rounded-lg cursor-pointer border-2 ${
                  activeImage === img
                    ? "border-[#06B6D4]"
                    : "border-transparent"
                }`}
              />
            ))}
          </div>
        </div>

        {/* PROPERTY INFO */}
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
            {property.title}
          </h1>

          <p className="text-gray-500 mt-1">
            {property.location}, {property.area},{" "}
            {property.city}, {property.state}
          </p>

          {/* Tags */}
          <div className="flex gap-3 mt-4 flex-wrap">
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

          {/* Price */}
          <div className="mt-6 text-3xl font-bold text-[#06B6D4]">
            ₹ {property.price}
          </div>

          {/* QUICK DETAILS */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-6 text-sm">
            <Detail label="BHK" value={property.bhk} />
            <Detail label="Bathrooms" value={property.bathrooms} />
            <Detail label="Balconies" value={property.balconies} />
            <Detail label="Parking" value={property.parking} />
            <Detail label="Facing" value={property.facing} />
            <Detail label="Total Floors" value={property.totalFloors} />
          </div>

          {/* CONTACT BUTTONS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
            <a
              href={`https://wa.me/91${PHONE}?text=Hi, I'm interested in ${property.title}`}
              target="_blank"
              rel="noreferrer"
              className="flex justify-center items-center gap-2 py-3 rounded-lg bg-green-500 text-white font-semibold hover:bg-green-600 transition"
            >
              💬 WhatsApp
            </a>

            <a
              href={`tel:+91${PHONE}`}
              className="flex justify-center items-center gap-2 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
            >
              📞 Call Now
            </a>
          </div>
        </div>
      </div>

      {/* DESCRIPTION */}
      {property.description && (
        <div className="mt-10 bg-white rounded-xl shadow p-6">
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

/* Small reusable component */
const Detail = ({ label, value }) => {
  if (!value) return null;
  return (
    <div className="bg-gray-50 rounded-lg p-3">
      <p className="text-xs text-gray-500">{label}</p>
      <p className="font-semibold text-gray-800">{value}</p>
    </div>
  );
};
