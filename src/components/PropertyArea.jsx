import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

/* ================= STATIC AREAS ================= */
const propertyAreas = [
  {
    title: "Udyog Vihar",
    listings: "50 Listings",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "DLF Phase 3",
    listings: "38 Listings",
    image:
      "https://images.unsplash.com/photo-1501183638710-841dd1904471?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Golf Course Road",
    listings: "62 Listings",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Sohna Road",
    listings: "41 Listings",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
  },
];

/* ================= CLEAN DESCRIPTION FUNCTION ================= */
const cleanDescription = (html) => {
  if (!html) return "No description available";

  try {
    let decoded = html;

    // Decode multiple times (for encoded HTML)
    for (let i = 0; i < 3; i++) {
      const textarea = document.createElement("textarea");
      textarea.innerHTML = decoded;
      decoded = textarea.value;
    }

    // Remove tags
    decoded = decoded.replace(/<[^>]*>/g, "");

    // Remove extra spaces
    return decoded.replace(/\s+/g, " ").trim();
  } catch {
    return html;
  }
};

const truncateText = (text, limit = 120) => {
  if (!text) return "No description available";
  return text.length > limit ? text.slice(0, limit) + "..." : text;
};

const PropertyArea = () => {
  const [latestProperties, setLatestProperties] = useState([]);
  const [featuredProperties, setFeaturedProperties] = useState([]);

  const BASE_API = import.meta.env.VITE_BASE_URL;

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const res = await fetch(`${BASE_API}/api/properties`);
        const data = await res.json();

        const latest = data
          .filter((p) => p.isLatest === true)
          .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
          .slice(0, 8);

        const featured = data.filter((p) => p.isFeatured === true);

        setLatestProperties(latest);
        setFeaturedProperties(featured);
      } catch (err) {
        console.error("Failed to fetch properties", err);
      }
    };

    fetchProperties();
  }, [BASE_API]);

  return (
    <>
      {/* PROPERTY AREAS */}
      <section className="py-16 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold text-[#0F172A]">
              Properties by Area
            </h2>
            <p className="text-gray-500 mt-2">
              Top properties from the most popular locations
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {propertyAreas.map((area, index) => (
              <div
                key={index}
                className="relative h-[260px] rounded-xl overflow-hidden group"
              >
                <img
                  src={area.image}
                  alt={area.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-black/50" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                  <h3 className="text-xl font-semibold">{area.title}</h3>
                  <p className="text-[#06B6D4] font-bold mt-2">
                    {area.listings}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LATEST */}
      {latestProperties.length > 0 && (
        <PropertySection
          title="Latest Properties"
          properties={latestProperties}
          badge="Latest"
          BASE_API={BASE_API}
        />
      )}

      {/* FEATURED */}
      {featuredProperties.length > 0 && (
        <PropertySection
          title="Featured Properties"
          properties={featuredProperties}
          badge="Featured"
          BASE_API={BASE_API}
        />
      )}
    </>
  );
};

/* ================= REUSABLE SECTION ================= */
const PropertySection = ({ title, properties, badge, BASE_API }) => (
  <section className="py-16 bg-gray-50">
    <div className="max-w-[1400px] mx-auto px-4">
      <div className="mb-10 text-center">
        <h2 className="text-2xl font-semibold text-[#0F172A]">{title}</h2>
      </div>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        autoplay={{ delay: 3500 }}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={30}
        breakpoints={{
          320: { slidesPerView: 1.1 },
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
        }}
      >
        {properties.map((property) => (
          <SwiperSlide key={property._id}>
            <PropertyCard
              property={property}
              badge={badge}
              BASE_API={BASE_API}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </section>
);

/* ================= PROPERTY CARD ================= */
const PropertyCard = ({ property, badge, BASE_API }) => {
  const cleanText = truncateText(cleanDescription(property.description));

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition">
      <div className="relative h-60 overflow-hidden">
        {property.images?.[0] ? (
          <img
            src={
              property.images[0].startsWith("http")
                ? property.images[0]
                : `${BASE_API}/${property.images[0]}`
            }
            alt={property.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
            No Image
          </div>
        )}

        {badge && (
          <span className="absolute top-3 right-3 bg-emerald-500 text-white text-xs px-3 py-1 rounded-full">
            {badge}
          </span>
        )}

        <span className="absolute top-3 left-3 bg-[#06B6D4] text-white text-xs px-3 py-1 rounded">
          ₹ {property.price}
        </span>
      </div>

      <div className="px-4 py-4">
        <h3 className="font-semibold text-[#0F172A] truncate">
          {property.title}
        </h3>

        <p className="text-xs text-gray-500 mt-1">
          {property.city}, {property.state}
        </p>

        <p className="text-xs text-gray-600 mt-2">
          {cleanText}
        </p>

        <div className="mt-4 flex gap-2">
          <Link
            to={`/property/${property._id}`}
            className="flex-1 text-xs py-2 rounded-md bg-[#06B6D4] text-white text-center"
          >
            Details
          </Link>

          <a
            href="tel:9896707022"
            className="flex-1 text-xs py-2 rounded-md border border-[#06B6D4] text-[#06B6D4] text-center hover:bg-[#06B6D4] hover:text-white transition"
          >
            Call
          </a>
        </div>
      </div>
    </div>
  );
};

export default PropertyArea;
