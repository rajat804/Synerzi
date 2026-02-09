import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Rohit Mehra",
    role: "Business Owner",
    text: "SRM team is extremely professional. Helped me close the best commercial deal smoothly.",
  },
  {
    name: "Catherine",
    role: "Investor",
    text: "Excellent market understanding and transparent process. Highly recommended.",
  },
  {
    name: "Vikrant",
    role: "Startup Founder",
    text: "Very reliable team. From site visit to final documentation everything was perfect.",
  },
  {
    name: "Anjali Sharma",
    role: "Property Consultant",
    text: "Their knowledge and customer support is outstanding. Truly premium service.",
  },
];

export default function Testimonials() {
  return (
    <section className="relative py-24 bg-gradient-to-br from-[#F0F9FF] via-white to-[#ECFEFF] overflow-hidden">
      {/* Background blur shapes */}
      <div className="absolute -top-24 -left-24 w-72 h-72 bg-cyan-300/30 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-sky-300/30 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 text-center">
        {/* Heading */}
        <p className="uppercase tracking-widest text-xs font-semibold text-cyan-600">
          Testimonials
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
          What Our Clients Say
        </h2>
        <p className="text-gray-500 max-w-xl mx-auto mt-3 text-sm">
          Real experiences from clients who trusted SRM for premium properties
        </p>

        {/* Slider */}
        <div className="mt-16">
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            loop
            spaceBetween={30}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {testimonials.map((item, i) => (
              <SwiperSlide key={i}>
                <div className="h-full bg-white/70 backdrop-blur-md border border-white rounded-2xl p-7 shadow-lg hover:shadow-2xl transition-all duration-300">
                  {/* Stars */}
                  <div className="flex justify-center text-amber-400 mb-4 text-lg">
                    ★★★★★
                  </div>

                  {/* Text */}
                  <p className="text-gray-600 text-sm leading-relaxed mb-8">
                    “{item.text}”
                  </p>

                  {/* Footer */}
                  <div className="border-t pt-4">
                    <h4 className="font-semibold text-slate-900">
                      {item.name}
                    </h4>
                    <p className="text-xs text-gray-500">{item.role}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
