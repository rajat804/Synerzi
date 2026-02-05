import { useState, useEffect } from "react";

const testimonials = [
  {
    name: "Amit Sharma",
    role: "Investor, Delhi",
    text: "Synerzi helped me find the best commercial property with excellent ROI.",
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
    <section className="py-16 bg-gradient-to-b from-[#F0F4F8] to-[#E5E7EB]">
      <div className="text-center mb-[50px]">
        <h2 className="text-3xl font-bold text-gray-900">
          Testimonials
        </h2>
      </div>
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

        {/* LEFT - YOUTUBE */}
        <div className="aspect-video rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-500">
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
          <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-indigo-500 hover:shadow-2xl transition-all duration-500">
            <div className="flex items-center gap-4">
              <img
                src={testimonials[index].image}
                alt={testimonials[index].name}
                className="w-16 h-16 rounded-full object-cover border-2 border-indigo-500"
              />
              <div>
                <h4 className="font-semibold text-gray-800">
                  {testimonials[index].name}
                </h4>
                <p className="text-sm text-gray-600">
                  {testimonials[index].role}
                </p>
              </div>
            </div>

            <p className="mt-4 text-gray-700 italic">
              “{testimonials[index].text}”
            </p>

            {/* DOTS */}
            <div className="flex gap-2 mt-4 justify-center">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`h-3 w-3 rounded-full transition-all duration-300
                    ${i === index ? "bg-indigo-500 w-4" : "bg-gray-300"}`}
                />
              ))}
            </div>
          </div>

          {/* COMPANY LOGOS - RIGHT SIDE */}
          <div className="overflow-hidden bg-white py-4 rounded-xl shadow hover:shadow-2xl transition-shadow">
            <div className="flex gap-10 animate-scroll px-6">
              {logos.concat(logos).map((logo, i) => (
                <img
                  key={i}
                  src={logo}
                  alt="Company Logo"
                  className="h-8 w-auto object-contain grayscale hover:grayscale-0 hover:scale-110 hover:shadow-lg transition-all duration-500"
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
