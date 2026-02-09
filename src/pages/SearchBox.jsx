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
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 items-end"
    >
      {/* Type */}
      <div>
        <label className="text-sm text-gray-500">Type</label>
        <select
          name="purpose"
          onChange={handleChange}
          className="w-full h-[44px] rounded-lg border px-3"
        >
          <option value="">Buy / Lease / Sale</option>
          <option value="Buy">Buy</option>
          <option value="Lease">Lease</option>
          <option value="Sale">Sale</option>
        </select>
      </div>

      {/* Property Type */}
      <div>
        <label className="text-sm text-gray-500">Property Type</label>
        <select
          name="category"
          onChange={handleChange}
          className="w-full h-[44px] rounded-lg border px-3"
        >
          <option value="">Select Property</option>
          <option value="Commercial">Commercial</option>
          <option value="Office Space">Office Space</option>
          <option value="Retail Shop">Retail Shop</option>
          <option value="Warehouse">Warehouse</option>
          <option value="Residential">Residential</option>
        </select>
      </div>

      {/* City */}
      <div>
        <label className="text-sm text-gray-500">City</label>
        <input
          name="city"
          placeholder="Gurugram"
          onChange={handleChange}
          className="w-full h-[44px] rounded-lg border px-3"
        />
      </div>

      {/* Location */}
      <div>
        <label className="text-sm text-gray-500">Location</label>
        <input
          name="location"
          placeholder="Udyog Vihar Phase 4"
          onChange={handleChange}
          className="w-full h-[44px] rounded-lg border px-3"
        />
      </div>

      {/* Button */}
      <button
        type="submit"
        className="w-full h-[44px] rounded-lg bg-gradient-to-r from-[#06B6D4] to-[#0EA5E9] text-white font-semibold"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBox;
