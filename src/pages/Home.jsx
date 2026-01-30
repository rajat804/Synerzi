import { useState } from "react";
const innerImage =
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80";
import PropertyByArea from "../components/PropertybyArea";

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
      {/* inner image */}
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
            <button className="px-7 py-3 rounded-full bg-gradient-to-r from-[#06B6D4] to-[#0EA5E9] text-[#0F172A] font-semibold hover:scale-105 transition">
              Explore Properties
            </button>
          </div>
        </section>
      </div>

      <div className="w-full px-4">
        <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl p-5 sm:p-6 md:p-8 -mt-20 sm:-mt-24 relative z-20 ">
          {/* Tabs */}
          <div className="flex overflow-x-auto gap-3 justify-start sm:justify-center mb-6 scrollbar-hide">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`whitespace-nowrap px-5 py-2 rounded-full text-sm sm:text-base font-semibold transition-all ${
                  activeTab === tab
                    ? "bg-gradient-to-r from-[#06B6D4] to-[#0EA5E9] text-white shadow"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Form */}
          <form className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4">
            {/* Location */}
            <div className="lg:col-span-3">
              <label className="text-sm text-gray-500">Location</label>
              <select
                value={location}
                onChange={(e) => {
                  setLocation(e.target.value);
                  setArea(""); // reset area when location changes
                }}
                className="w-full h-[44px] rounded-lg border px-3"
              >
                <option value="">Select Location</option>
                {Object.keys(locationAreaMap).map((loc) => (
                  <option key={loc} value={loc}>
                    {loc}
                  </option>
                ))}
              </select>
            </div>

            {/* Area */}
            <div className="lg:col-span-3">
              <label className="text-sm text-gray-500">Area</label>
              <select
                value={area}
                onChange={(e) => setArea(e.target.value)}
                disabled={!location}
                className="w-full h-[44px] rounded-lg border px-3 disabled:bg-gray-100"
              >
                <option value="">
                  {location ? "Select Area" : "Select Location First"}
                </option>
                {areas.map((ar) => (
                  <option key={ar} value={ar}>
                    {ar}
                  </option>
                ))}
              </select>
            </div>

            {/* Type */}
            <div className="w-full lg:col-span-3">
              <label className=" block text-xs sm:text-sm font-medium text-gray-600 mb-1">
                Type
              </label>
              <select className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:ring-[#06B6D4] focus:outline-none">
                <option>Select Type</option>
                <option>Invest</option>
                <option>Lease</option>
                <option>Sales</option>
              </select>
            </div>

            {/* Hidden Active Tab */}
            <input type="hidden" value={activeTab} />

            {/* Button */}
            <div className=" lg:col-span-2 flex items-end">
              <button
                type="submit"
                className="
      w-full
      h-[44px]
      mt-1
      rounded-lg
      bg-gradient-to-r from-[#06B6D4] to-[#0EA5E9]
      text-white
      text-sm sm:text-base
      font-semibold
      shadow-md
      hover:scale-[1.03]
      transition-transform duration-300
      flex items-center justify-center
    "
              >
                Search {activeTab}
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Property by area */}
      <PropertyByArea />
    </>
  );
};

export default Home;
