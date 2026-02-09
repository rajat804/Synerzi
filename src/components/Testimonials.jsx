import { useState, useEffect } from "react";
import SynerziSection from "./SynerziSection";

const testimonials = [
  {
    name: "Amit Sharma",
    role: "Investor, Delhi",
    text: "SRM helped me find the best commercial property with excellent ROI.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Neha Verma",
    role: "Business Owner",
    text: "Very professional team. Smooth leasing experience.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Rahul Mehta",
    role: "Consultant",
    text: "One of the most reliable property partners I’ve worked with.",
    image: "https://randomuser.me/api/portraits/men/65.jpg",
  },
];

const logos = [
  "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
];

export default function TestimonialsSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 bg-gray-50">
      <div className="text-center mb-[50px]">
        <h2 className="text-3xl font-bold text-black">Testimonials</h2>
      </div>

      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* LEFT - YOUTUBE */}
        <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Company Overview"
            allowFullScreen
          />
        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col gap-8">
          {/* TESTIMONIAL CARD */}
          <div className="bg-white p-6 rounded-xl shadow-lg transition-all duration-500">
            <div className="flex items-center gap-4">
              <img
                src={testimonials[index].image}
                alt={testimonials[index].name}
                className="w-16 h-16 rounded-full object-cover border"
              />
              <div>
                <h4 className="font-semibold text-gray-900">
                  {testimonials[index].name}
                </h4>
                <p className="text-sm text-gray-500">
                  {testimonials[index].role}
                </p>
              </div>
            </div>

            <p className="mt-4 text-gray-700 italic">
              “{testimonials[index].text}”
            </p>

            {/* DOTS */}
            <div className="flex gap-2 mt-4">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`h-2 w-2 rounded-full ${
                    i === index ? "bg-black" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* SRM HIGHLIGHTS */}
          {/* SRM HIGHLIGHTS */}
          {/* <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl shadow-md p-5 text-center hover:shadow-xl transition">
              <div className="text-3xl mb-2">🏢</div>
              <h4 className="text-lg font-semibold text-[#0F172A]">500+</h4>
              <p className="text-sm text-gray-500">Commercial Deals</p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-5 text-center hover:shadow-xl transition">
              <div className="text-3xl mb-2">📍</div>
              <h4 className="text-lg font-semibold text-[#0F172A]">25+</h4>
              <p className="text-sm text-gray-500">Prime Locations</p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-5 text-center hover:shadow-xl transition">
              <div className="text-3xl mb-2">🤝</div>
              <h4 className="text-lg font-semibold text-[#0F172A]">300+</h4>
              <p className="text-sm text-gray-500">Happy Clients</p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-5 text-center hover:shadow-xl transition">
              <div className="text-3xl mb-2">⏱️</div>
              <h4 className="text-lg font-semibold text-[#0F172A]">
                10+ Years
              </h4>
              <p className="text-sm text-gray-500">Industry Experience</p>
            </div>
          </div> */}

          <SynerziSection/>
        </div>
      </div>
    </section>
  );
}
