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

const PropertyArea = () => {
  const [properties, setProperties] = useState([]);

  /* ================= FETCH PROPERTIES ================= */
  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const res = await fetch(
          "https://vercel-synerzi-sbckend.vercel.app/api/properties"
        );
        const data = await res.json();

        // 🔥 DESC order + latest 8 only
        const latest = [...data]
          .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
          .slice(0, 8);

        setProperties(latest);
      } catch (err) {
        console.error("Failed to fetch properties", err);
      }
    };

    fetchProperties();
  }, []);

  return (
    <>
      {/* ================= PROPERTY AREAS ================= */}
      <section className="py-16 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A]">
              Properties by Area
            </h2>
            <p className="text-gray-500 mt-2">
              Top properties from the most popular locations
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {propertyAreas.map((area, index) => (
              <div
                key={index}
                className="relative h-[280px] rounded-xl overflow-hidden group cursor-pointer"
              >
                <img
                  src={area.image}
                  alt={area.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition" />
                <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center">
                  <h3 className="text-xl font-semibold text-white">
                    {area.title}
                  </h3>
                  <p className="text-md font-bold text-[#06B6D4] mt-2">
                    {area.listings}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FEATURED PROPERTIES ================= */}
      <section className="py-14 bg-gray-50 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4">
          <div className="mb-10 text-center">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#0F172A]">
              Featured Properties
            </h2>
            <p className="text-gray-500 mt-1 text-sm">
              Latest premium properties
            </p>
          </div>

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            navigation
            pagination={{ clickable: true }}
            spaceBetween={30}
            breakpoints={{
              320: { slidesPerView: 1.2 },
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-12"
          >
            {properties.map((property) => (
              <SwiperSlide key={property._id}>
                <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition">
                  {/* IMAGE */}
                  <div className="relative h-60 overflow-hidden">
                    <img
                      src={
                        property.images?.[0]?.startsWith("http")
                          ? property.images[0]
                          : `https://vercel-synerzi-sbckend.vercel.app/${property.images?.[0]}`
                      }
                      alt={property.title}
                      className="w-full h-full object-cover hover:scale-105 transition duration-500"
                    />

                    <span className="absolute top-3 left-3 bg-[#06B6D4] text-white text-xs px-3 py-1 rounded">
                      ₹ {property.price}
                    </span>
                  </div>

                  {/* CONTENT */}
                  <div className="px-4 py-4">
                    <h3 className="text-sm md:text-base font-semibold text-[#0F172A] truncate">
                      {property.title}
                    </h3>

                    <p className="text-xs text-gray-500 mt-1">
                      {property.city}, {property.state}
                    </p>

                    <div className="mt-4 flex gap-2">
                      <Link
                        to={`/property/${property._id}`}
                        className="flex-1 text-xs py-2 rounded-md bg-[#06B6D4] text-white text-center hover:bg-[#0891B2]"
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
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default PropertyArea;
