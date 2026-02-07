import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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

const properties = [
  {
    title: "Udyog Vihar Office",
    price: "₹1.2 Cr",
    image:
      "https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    title: "DLF Phase 3 Office",
    price: "₹95 Lakh",
    image:
      "https://images.pexels.com/photos/17879690/pexels-photo-17879690.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    title: "Golf Course Road",
    price: "₹1.8 Cr",
    image:
      "https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Sohna Road Office",
    price: "₹1.1 Cr",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Cyber City Office",
    price: "₹2.3 Cr",
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Modern Glass Skyscraper",
    price: "₹2.0 Cr",
    image:
      "https://images.pexels.com/photos/373965/pexels-photo-373965.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    title: "Downtown Commercial Tower",
    price: "₹1.6 Cr",
    image:
      "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    title: "Tall Office Building",
    price: "₹2.5 Cr",
    image:
      "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
];

const PropertyArea = () => {
  return (
    <>
      {/* Property Areas Section */}
      <section className="py-16 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <div className="mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] text-center">
              Properties by Area
            </h2>
            <p className="text-gray-500 mt-2 text-center">
              Top properties from the most popular locations
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {propertyAreas.map((area, index) => (
              <div
                key={index}
                className="relative h-[280px] rounded-xl overflow-hidden group cursor-pointer"
              >
                {/* Image */}
                <img
                  src={area.image}
                  alt={area.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition"></div>

                {/* Center Content */}
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

      {/* Featured Properties Section */}
      <section className="py-14 bg-gray-50 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <div className="mb-10 text-center">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#0F172A]">
              Featured Properties
            </h2>
            <p className="text-gray-500 mt-1 text-sm">
              Premium commercial properties with best deals
            </p>
          </div>

          {/* Swiper */}
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            navigation
            pagination={{ clickable: true }}
            spaceBetween={30}
            breakpoints={{
              320: { slidesPerView: 2, spaceBetween: 14 }, // mobile
              640: { slidesPerView: 2, spaceBetween: 20 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 3, spaceBetween: 30 }, // 💻 laptop
              1280: { slidesPerView: 3, spaceBetween: 36 }, // wide cards
            }}
            className="featured-swiper pb-12"
          >
            {properties.map((property, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
                  {/* Image */}
                  <div className="relative h-60 lg:h-64 overflow-hidden">
                    <img
                      src={property.image}
                      alt={property.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/15 hover:bg-black/30 transition"></div>

                    {/* Price */}
                    <div
                      className="absolute top-3 left-3 text-xs
                bg-[#06B6D4] text-white font-medium px-3 py-1 rounded"
                    >
                      {property.price}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="px-4 py-3">
                    <h3 className="text-sm md:text-base font-medium text-[#0F172A] truncate">
                      {property.title}
                    </h3>

                    <div className="mt-3 flex gap-2">
                      <button
                        className="flex-1 text-xs py-2 rounded-md
                  bg-[#06B6D4] text-white hover:bg-[#0891B2] transition"
                      >
                        Details
                      </button>

                      <button
                        className="flex-1 text-xs py-2 rounded-md
                  border border-[#06B6D4] text-[#06B6D4]
                  hover:bg-[#06B6D4] hover:text-white transition"
                      >
                        Call
                      </button>
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
