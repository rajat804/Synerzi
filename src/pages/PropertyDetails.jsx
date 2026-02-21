import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function PropertyDetails() {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeImage, setActiveImage] = useState("");
  const BASE_API = import.meta.env.VITE_BASE_URL;
  const PHONE = "9896707022";

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        const res = await fetch(`${BASE_API}/api/properties/${id}`);
        const data = await res.json();
        setProperty(data);

        if (data?.images?.length > 0) {
          const firstImage = data.images[0].startsWith("http")
            ? data.images[0]
            : `${BASE_API}/${data.images[0]}`;
          setActiveImage(firstImage);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProperty();
  }, [id]);

  if (loading) return <div className="p-6 text-center">Loading...</div>;
  if (!property)
    return <div className="p-6 text-center">Property not found</div>;

  const getImageUrl = (img) =>
    img?.startsWith("http") ? img : `${BASE_API}/${img}`;

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      {/* ================= IMAGE + MAIN INFO ================= */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* IMAGE SECTION */}
        <div>
          <div className="rounded-xl overflow-hidden border">
            <img
              src={activeImage}
              alt="property"
              className="w-full h-[350px] object-cover"
            />
          </div>

          <div className="flex gap-3 mt-4 flex-wrap">
            {property.images?.map((img, idx) => {
              const imgUrl = getImageUrl(img);
              return (
                <img
                  key={idx}
                  src={imgUrl}
                  onClick={() => setActiveImage(imgUrl)}
                  className={`w-20 h-20 object-cover rounded-lg cursor-pointer border-2 ${
                    activeImage === imgUrl
                      ? "border-[#06B6D4]"
                      : "border-transparent"
                  }`}
                />
              );
            })}
          </div>
        </div>

        {/* BASIC INFO */}
        <div>
          <h1 className="text-3xl font-bold">{property.title || "N/A"}</h1>

          <p className="text-gray-500 mt-2">
            {property.address || "N/A"}, {property.location || "N/A"},{" "}
            {property.city || "N/A"}, {property.state || "N/A"} -{" "}
            {property.pincode || "N/A"}, {property.country || "India"}
          </p>

          <div className="mt-6 text-3xl font-bold text-[#06B6D4]">
            ₹ {property.price || "0"}
            {property.priceLabel && (
              <span className="text-lg text-gray-600 ml-2">
                / {property.priceLabel}
              </span>
            )}
          </div>

          {/* TAGS */}
          <div className="flex flex-wrap gap-3 mt-4">
            <Tag value={property.category} />
            <Tag value={property.purpose} />
            <Tag value={property.status} />
            {property.isFeatured && <Tag value="Featured" />}
            {property.isLatest && <Tag value="Latest" />}
          </div>

          {/* CONTACT */}
          <div className="grid grid-cols-2 gap-4 mt-8">
            <a
              href={`https://wa.me/91${PHONE}?text=Hi, I'm interested in ${property.title}`}
              target="_blank"
              rel="noreferrer"
              className="py-3 text-center bg-green-500 text-white rounded-lg font-semibold"
            >
              WhatsApp
            </a>

            <a
              href={`tel:+91${PHONE}`}
              className="py-3 text-center bg-blue-600 text-white rounded-lg font-semibold"
            >
              Call Now
            </a>
          </div>
        </div>
      </div>

      {/* ================= DESCRIPTION ================= */}
      {property.description && (
        <div className="mt-10 bg-white shadow rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-4">Description</h2>
          <div
            className="text-gray-600 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: property.description }}
          />
        </div>
      )}

      {/* ================= PROPERTY DETAILS ================= */}
      <div className="mt-10 bg-white shadow rounded-xl p-6">
        <h2 className="text-xl font-semibold mb-6">Property Details</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          <Detail label="Size" value={property.size} />
          <Detail label="Built Up Area" value={property.builtUpArea} />
          <Detail label="Facing" value={property.facing} />
          <Detail label="Year Built" value={property.yearBuilt} />
          <Detail label="Flooring" value={property.flooring} />
          <Detail label="Ownership" value={property.ownership} />
          <Detail label="Possession" value={property.possession} />
          <Detail label="Structure Type" value={property.structureType} />
          <Detail label="Total Floors" value={property.totalFloors} />
          <Detail label="Road Width" value={property.roadWidth} />
          <Detail label="Open Sides" value={property.openSides} />
        </div>
      </div>

      {/* ================= AMENITIES ================= */}
      <div className="mt-10 bg-white shadow rounded-xl p-6">
        <h2 className="text-xl font-semibold mb-4">Amenities</h2>

        {property.amenities?.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {property.amenities.map((a, i) => (
              <span
                key={i}
                className="px-3 py-2 bg-gray-100 rounded-lg text-sm"
              >
                ✔ {a}
              </span>
            ))}
          </div>
        ) : (
          <p className="text-gray-500">No amenities available</p>
        )}
      </div>
    </div>
  );
}

/* DETAIL BOX */
const Detail = ({ label, value }) => (
  <div className="bg-gray-50 p-3 rounded-lg">
    <p className="text-xs text-gray-500">{label}</p>
    <p className="font-semibold">{value || "N/A"}</p>
  </div>
);

/* TAG COMPONENT */
const Tag = ({ value }) =>
  value ? (
    <span className="px-3 py-1 bg-cyan-100 text-cyan-700 rounded-full text-sm">
      {value}
    </span>
  ) : null;
