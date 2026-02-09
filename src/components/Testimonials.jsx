import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Rohit Mehra",
    role: "Business Owner",
    text: "SRM team is extremely professional. Helped me close the best commercial deal.",
  },
  {
    name: "Catherine",
    role: "Investor",
    text: "Excellent market knowledge and transparent process. Highly recommended.",
  },
  {
    name: "Vikrant",
    role: "Startup Founder",
    text: "Smooth experience from site visit to final deal. Very reliable team.",
  },
  {
    name: "Anjali Sharma",
    role: "Property Consultant",
    text: "They understand customer needs perfectly. Loved working with SRM.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        {/* Heading */}
        <p className="uppercase tracking-widest text-xs text-cyan-500 font-semibold">
          Testimonial
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
          What Our Clients Say
        </h2>
        <p className="text-gray-500 max-w-xl mx-auto mt-3 text-sm">
          Real feedback from people who trust our real estate expertise
        </p>

        {/* Slider */}
        <div className="mt-14">
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            spaceBetween={25}
            centeredSlides={true}
            loop={true}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {testimonials.map((item, i) => (
              <SwiperSlide key={i}>
                <div className="bg-white rounded-xl p-6 shadow-md h-full flex flex-col justify-between hover:shadow-xl transition">
                  {/* Stars */}
                  <div className="flex justify-center text-orange-500 mb-4">
                    ★★★★★
                  </div>

                  {/* Text */}
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    “{item.text}”
                  </p>

                  {/* Name */}
                  <div className="mt-auto">
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
