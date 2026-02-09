import { useState } from "react";
import SynerziSection from "../components/SynerziSection";
import PropertyArea from "../components/PropertyArea";
import CompanyOverview from "../components/CompanyOurView";
import Testimonials from "../components/Testimonials";
import ContactUs from "../components/ContactUs";

const innerImage =
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80";

const Home = () => {
  const tabs = ["Invest", "Lease", "Sales"];
  const [activeTab, setActiveTab] = useState("Invest");

  const locationAreaMap = {
    Delhi: ["South Delhi", "North Delhi", "Dwarka", "Rohini", "Saket"],
    Mumbai: ["Andheri", "Bandra", "Borivali", "Powai"],
    Bangalore: ["Whitefield", "Indiranagar", "Electronic City"],
  };

  const [location, setLocation] = useState("");
  const [area, setArea] = useState("");
  const areas = locationAreaMap[location] || [];

  return (
    <>
      {/* Inner image */}
      <div className="">
        <section
          className="w-full min-h-[75vh] md:min-h-[85vh] relative flex items-center"
          style={{
            backgroundImage: `url(${innerImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>

          {/* Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Find the Perfect Property
            </h1>
            <p className="text-base sm:text-lg md:text-xl max-w-2xl text-gray-200 mb-6">
              Invest, Lease & Buy premium properties in top locations
            </p>
          </div>
        </section>
      </div>

      <div className="w-full px-4">
        <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-xl p-5 sm:p-6 md:p-8 -mt-20 sm:-mt-24 relative z-20">
          <form className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 items-end">
            {/* Type */}
            <div>
              <label className="text-sm text-gray-500">Type</label>
              <select className="w-full h-[44px] rounded-lg border px-3 text-gray-600 focus:ring-2 focus:ring-[#06B6D4] outline-none">
                <option>Select Buy/Lease/Sale</option>
                {/* <option>Rent</option> */}
                <option>Lease</option>
                <option>Buy</option>
                <option>Sale</option>
              </select>
            </div>
            {/* Property Type */}
            <div>
              <label className="text-sm text-gray-500">Property Type</label>
              <select className="w-full h-[44px] rounded-lg border px-3 text-gray-600 focus:ring-2 focus:ring-[#06B6D4] outline-none">
                <option>Select Property</option>
                <option>Commercial</option>
                <option>Office Space</option>
                <option>Retail Shop</option>
                <option>Warehouse</option>
                <option>Residential</option>
              </select>
            </div>
            {/* Location */}
            <div>
              <label className="text-sm text-gray-500">Location</label>
              <input
                type="text"
                placeholder="Enter Location"
                className="w-full h-[44px] rounded-lg border px-3 focus:ring-2 focus:ring-[#06B6D4] outline-none"
              />
            </div>

            {/* Area */}
            <div>
              <label className="text-sm text-gray-500">Area</label>
              <input
                type="text"
                placeholder="Enter Area"
                className="w-full h-[44px] rounded-lg border px-3 focus:ring-2 focus:ring-[#06B6D4] outline-none"
              />
            </div>

            {/* Button */}
            <div>
              <button
                type="submit"
                className="w-full h-[44px] rounded-lg bg-gradient-to-r from-[#06B6D4] to-[#0EA5E9] text-white font-semibold shadow-md hover:scale-[1.03] transition"
              >
                Search
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Property by area */}
      <PropertyArea />

      {/* Synerzi Section */}
      <SynerziSection />

      {/* Our company overview */}
      <CompanyOverview />

      {/* Testimonials */}
      <Testimonials />

      {/* Contact us */}
      <ContactUs />

      {/* Footer */}
    </>
  );
};

export default Home;
