import { useNavigate } from "react-router-dom";
import { useState } from "react";

const SearchBox = () => {
  const navigate = useNavigate();

  const [filters, setFilters] = useState({
    purpose: "",
    category: "",
    city: "",
    location: "",
  });

  // ✅ Complete Property Data (Category → City → Location)
  const propertyData = {
    "Industrial Plot": {
      Gurugram: [
        "Udyog Vihar PH 1",
        "Udyog Vihar PH 2",
        "Udyog Vihar PH 3",
        "Udyog Vihar PH 4",
        "Udyog Vihar PH 5",
        "Pace City 1",
        "Pace City 2",
      ],
      "IMT Manesar": [
        "Sector 2",
        "Sector 2A",
        "Sector 3",
        "Sector 4",
        "Sector 5",
        "Sector 6",
        "Sector 7",
        "Sector 8",
        "Sector 9",
        "Sector 10",
        "Sector 11",
      ],
      "Dharuhera HSIIDC": [
        "Sector 8 Old Industries",
        "Sector 15 New HSIIDC",
        "Sector 16 New HSIIDC",
        "Sector 17 New HSIIDC",
      ],
      "Bhiwadi RIICO": [
        "Bhiwadi",
        "Chaupanki",
        "Pathredi",
        "Tapukara",
        "Khushkhera",
      ],
      "Bawal HSIIDC": [
        "Sector 3",
        "Sector 4",
        "Sector 5",
        "Sector 6",
        "Sector 7",
        "Sector 8",
        "Sector 9",
        "Sector 10",
        "Sector 11",
        "Sector 12",
        "Sector 13",
        "Sector 14",
        "Sector 15",
      ],
      "Gilot RIICO": ["Gilot"],
      "Neemrana RIICO": ["Neemrana"],
      "Sohna HSIIDC": [
        "Sector 19",
        "Sector 19A",
        "Sector 20",
        "Sector 20A",
        "Sector 21",
        "Sector 21A",
        "Rozka Meo",
      ],
      "Faridabad HSIIDC": ["Sector 68", "Sector 69"],
      Jhajjar: ["Reliance MET City"],
      "Kharkhoda HSIIDC": ["Kharkhoda"],
      "Bahadurgarh HSIIDC": ["Bahadurgarh"],
      "Kundli HSIIDC": ["Kundli"],
      "Rai HSIIDC": ["Rai"],
    },

    Factory: {},

    Warehouse: {
      Bilaspur: ["Towards Hailey Mandi", "Towards Tauru"],
      Sohna: ["Sohna"],
      Farukhnagar: ["Farukhnagar", "Horizon Industrial Park"],
      Indospace: [
        "Badli",
        "Bhaproda",
        "Luhari I",
        "Luhari II",
        "Luhari III",
        "Luhari IV",
        "Tauru",
        "Tauru II",
        "Farukhnagar",
        "Sohna",
        "Bilaspur",
      ],
    },

    Commercial: {
      Gurugram: ["Gurugram"],
    },

    Residential: {
      Gurugram: ["Gurugram"],
    },
  };

  // Factory same as Industrial Plot
  propertyData.Factory = propertyData["Industrial Plot"];

  // ✅ Dynamic city list
  const cities = filters.category
    ? Object.keys(propertyData[filters.category] || {})
    : [];

  // ✅ Dynamic location list
  const locations =
    filters.category && filters.city
      ? propertyData[filters.category][filters.city] || []
      : [];

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "category") {
      setFilters({
        ...filters,
        category: value,
        city: "",
        location: "",
      });
    } else if (name === "city") {
      setFilters({
        ...filters,
        city: value,
        location: "",
      });
    } else {
      setFilters({
        ...filters,
        [name]: value,
      });
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const query = new URLSearchParams(filters).toString();
    navigate(`/search?${query}`);
  };

  return (
    <form
      onSubmit={handleSearch}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 items-end"
    >
      {/* PURPOSE */}
      <div>
        <label className="text-xs font-semibold text-gray-500 mb-1 block">
          Transaction Type
        </label>
        <select
          name="purpose"
          value={filters.purpose}
          onChange={handleChange}
          className="w-full h-[48px] rounded-xl border border-gray-200 px-4 focus:ring-2 focus:ring-[#06B6D4]"
        >
          <option value="">Buy / Sale / Lease</option>
          <option value="Buy">Buy</option>
          <option value="Sale">Sale</option>
          <option value="Lease">Lease</option>
        </select>
      </div>

      {/* CATEGORY */}
      <div>
        <label className="text-xs font-semibold text-gray-500 mb-1 block">
          Property Type
        </label>
        <select
          name="category"
          value={filters.category}
          onChange={handleChange}
          className="w-full h-[48px] rounded-xl border border-gray-200 px-4 focus:ring-2 focus:ring-[#06B6D4]"
        >
          <option value="">Select Property</option>
          <option value="Industrial Plot">Industrial Plot</option>
          <option value="Factory">Factory</option>
          <option value="Warehouse">Warehouse</option>
          <option value="Commercial">Commercial</option>
          <option value="Residential">Residential</option>
        </select>
      </div>

      {/* CITY */}
      <div>
        <label className="text-xs font-semibold text-gray-500 mb-1 block">
          City
        </label>
        <select
          name="city"
          value={filters.city}
          onChange={handleChange}
          disabled={!filters.category}
          className="w-full h-[48px] rounded-xl border border-gray-200 px-4 focus:ring-2 focus:ring-[#06B6D4] disabled:bg-gray-100"
        >
          <option value="">
            {filters.category ? "Select City" : "Select Property First"}
          </option>

          {cities.map((city, index) => (
            <option key={index} value={city}>
              {city}
            </option>
          ))}
        </select>
      </div>

      {/* LOCATION */}
      <div>
        <label className="text-xs font-semibold text-gray-500 mb-1 block">
          Location
        </label>
        <select
          name="location"
          value={filters.location}
          onChange={handleChange}
          disabled={!filters.city}
          className="w-full h-[48px] rounded-xl border border-gray-200 px-4 focus:ring-2 focus:ring-[#06B6D4] disabled:bg-gray-100"
        >
          <option value="">
            {filters.city ? "Select Location" : "Select City First"}
          </option>

          {locations.map((loc, index) => (
            <option key={index} value={loc}>
              {loc}
            </option>
          ))}
        </select>
      </div>

      {/* BUTTON */}
      <button
        type="submit"
        className="h-[48px] rounded-xl font-semibold text-white bg-gradient-to-r from-[#06B6D4] to-[#0EA5E9] shadow-md hover:shadow-xl hover:scale-[1.03] transition-all duration-300"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBox;
