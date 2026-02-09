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

  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const query = new URLSearchParams(filters).toString();
    navigate(`/search?${query}`);
  };

  return (
    <form
      onSubmit={handleSearch}
      className="
                 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 items-end"
    >
      {/* PURPOSE */}
      <div>
        <label className="text-xs font-semibold text-gray-500 mb-1 block">
          Type
        </label>
        <select
          name="purpose"
          onChange={handleChange}
          className="w-full h-[48px] rounded-xl border border-gray-200 px-4
                     focus:ring-2 focus:ring-[#06B6D4] focus:border-[#06B6D4]
                     hover:border-[#06B6D4] transition outline-none"
        >
          <option value="">Buy / Lease / Sale</option>
          <option value="Buy">Buy</option>
          <option value="Lease">Lease</option>
          <option value="Sale">Sale</option>
        </select>
      </div>

      {/* CATEGORY */}
      <div>
        <label className="text-xs font-semibold text-gray-500 mb-1 block">
          Property Type
        </label>
        <select
          name="category"
          onChange={handleChange}
          className="w-full h-[48px] rounded-xl border border-gray-200 px-4
                     focus:ring-2 focus:ring-[#06B6D4] focus:border-[#06B6D4]
                     hover:border-[#06B6D4] transition outline-none"
        >
          <option value="">Select Property</option>
          <option value="Commercial">Commercial</option>
          <option value="Office Space">Office Space</option>
          <option value="Retail Shop">Retail Shop</option>
          <option value="Warehouse">Warehouse</option>
          <option value="Residential">Residential</option>
        </select>
      </div>

      {/* CITY */}
      <div>
        <label className="text-xs font-semibold text-gray-500 mb-1 block">
          City
        </label>
        <input
          name="city"
          placeholder="Gurugram"
          onChange={handleChange}
          className="w-full h-[48px] rounded-xl border border-gray-200 px-4
                     focus:ring-2 focus:ring-[#06B6D4] focus:border-[#06B6D4]
                     hover:border-[#06B6D4] transition outline-none"
        />
      </div>

      {/* LOCATION */}
      <div>
        <label className="text-xs font-semibold text-gray-500 mb-1 block">
          Location
        </label>
        <input
          name="location"
          placeholder="Udyog Vihar Phase 4"
          onChange={handleChange}
          className="w-full h-[48px] rounded-xl border border-gray-200 px-4
                     focus:ring-2 focus:ring-[#06B6D4] focus:border-[#06B6D4]
                     hover:border-[#06B6D4] transition outline-none"
        />
      </div>

      {/* BUTTON */}
      <button
        type="submit"
        className="h-[48px] rounded-xl font-semibold text-white
                   bg-gradient-to-r from-[#06B6D4] to-[#0EA5E9]
                   shadow-md hover:shadow-xl hover:scale-[1.03]
                   transition-all duration-300"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBox;
