import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function AdminEditProperty() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState(null);
  const [newImages, setNewImages] = useState([]);
  const [deletedImages, setDeletedImages] = useState([]);
  const allAmenities = ["Lift", "Gym", "Pool", "Security", "Garden", "CCTV"];

  const purposes = ["Sale", "Lease", "Buy"]; // replaced type with purpose
  const categories = [
    "Commercial",
    "Office Space",
    "Retail Shop",
    "Warehouse",
    "Residential",
  ];

  const parkingOptions = ["Parking", "Available", "Not Available"];

  // Fetch property data
  useEffect(() => {
    const fetchProperty = async () => {
      try {
        const res = await fetch(
          `https://vercel-synerzi-sbckend.vercel.app/api/properties/${id}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          },
        );
        const data = await res.json();
        setFormData(data);
      } catch (err) {
        console.error(err);
        alert("Failed to fetch property data!");
      }
    };
    fetchProperty();
  }, [id]);

  if (!formData)
    return <div className="p-6 text-center">Loading property...</div>;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleDeleteOldImage = (index) => {
    const removed = formData.images[index];
    setDeletedImages((prev) => [...prev, removed]); // mark for deletion
    setFormData({
      ...formData,
      images: formData.images.filter((_, i) => i !== index),
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const fd = new FormData();

      // 1️⃣ Add all normal fields
      Object.keys(formData).forEach((key) => {
        if (!["_id", "__v", "images", "amenities"].includes(key)) {
          fd.append(key, formData[key] || "");
        }
      });

      // 2️⃣ Add amenities
      fd.append("amenities", JSON.stringify(formData.amenities || []));

      // 3️⃣ Add existing images (old images that were not deleted)
      formData.images?.forEach((img) => fd.append("existingImages", img));

      // 4️⃣ Add newly uploaded images
      newImages.forEach((img) => fd.append("images", img));

      // 5️⃣ Add images to delete (if any)
      fd.append("deletedImages", JSON.stringify(deletedImages));

      const res = await fetch(
        `https://vercel-synerzi-sbckend.vercel.app/api/properties/${id}`,
        {
          method: "PUT",
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
          body: fd,
        },
      );

      const data = await res.json();
      if (!res.ok) return alert(data.message || "Update failed");

      alert("Property updated successfully 🚀");
      navigate("/admin-listings");
    } catch (err) {
      console.error(err);
      alert("Server error!");
    }
  };
  const handleAmenityChange = (amenity) => {
    let updatedAmenities = formData.amenities || [];
    if (updatedAmenities.includes(amenity)) {
      updatedAmenities = updatedAmenities.filter((a) => a !== amenity);
    } else {
      updatedAmenities.push(amenity);
    }
    setFormData({ ...formData, amenities: updatedAmenities });
  };
  return (
    <div className="p-6 max-w-5xl mx-auto bg-white rounded shadow my-5">
      <div className="flex flex-col md:flex-row items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Edit Property</h2>
        <Link
          to="/admin-dashboard"
          className="mt-3 md:mt-0 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Go Dashboard
        </Link>
      </div>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        {/* Title */}
        <div className="col-span-full">
          <label className="block mb-1 font-semibold">Property Title</label>
          <input
            name="title"
            value={formData.title || ""}
            onChange={handleChange}
            placeholder="Property Title"
            className="border p-2 rounded w-full"
            required
          />
        </div>

        {/* Price & Area */}
        <div>
          <label className="block mb-1 font-semibold">Price</label>
          <input
            name="price"
            value={formData.price || ""}
            onChange={handleChange}
            placeholder="Price"
            className="border p-2 rounded w-full"
          />
        </div>
        <div>
          <label className="block mb-1 font-semibold">Area (sq ft)</label>
          <input
            name="area"
            value={formData.area || ""}
            onChange={handleChange}
            placeholder="Area"
            className="border p-2 rounded w-full"
          />
        </div>

        {/* Purpose & Category */}
        <div>
          <label className="block mb-1 font-semibold">Purpose</label>
          <select
            name="purpose"
            value={formData.purpose || ""}
            onChange={handleChange}
            className="border p-2 rounded w-full"
          >
            <option value="">Select Purpose</option>
            {purposes.map((p, i) => (
              <option key={i} value={p}>
                {p}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block mb-1 font-semibold">Category</label>
          <select
            name="category"
            value={formData.category || ""}
            onChange={handleChange}
            className="border p-2 rounded w-full"
          >
            <option value="">Select Category</option>
            {categories.map((c, i) => (
              <option key={i} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>

        {/* State & City */}
        <div>
          <label className="block mb-1 font-semibold">State</label>
          <input
            name="state"
            value={formData.state || ""}
            onChange={handleChange}
            placeholder="State"
            className="border p-2 rounded w-full"
          />
        </div>
        <div>
          <label className="block mb-1 font-semibold">City</label>
          <input
            name="city"
            value={formData.city || ""}
            onChange={handleChange}
            placeholder="City"
            className="border p-2 rounded w-full"
            list="cities"
          />
        </div>
        <div>
          <label className="block mb-1 font-semibold">Location</label>
          <input
            name="location"
            value={formData.location || ""}
            onChange={handleChange}
            placeholder="Location"
            className="border p-2 rounded w-full"
          />
        </div>

        {/* BHK & Bathrooms */}
        <div>
          <label className="block mb-1 font-semibold">BHK</label>
          <input
            name="bhk"
            type="number"
            value={formData.bhk || ""}
            onChange={handleChange}
            placeholder="BHK"
            className="border p-2 rounded w-full"
          />
        </div>
        <div>
          <label className="block mb-1 font-semibold">Bathrooms</label>
          <input
            name="bathrooms"
            type="number"
            value={formData.bathrooms || ""}
            onChange={handleChange}
            placeholder="Bathrooms"
            className="border p-2 rounded w-full"
          />
        </div>

        {/* Balconies & Total Floors */}
        <div>
          <label className="block mb-1 font-semibold">Balconies</label>
          <input
            name="balconies"
            type="number"
            value={formData.balconies || ""}
            onChange={handleChange}
            placeholder="Balconies"
            className="border p-2 rounded w-full"
          />
        </div>
        <div>
          <label className="block mb-1 font-semibold">Total Floors</label>
          <input
            name="totalFloors"
            type="number"
            value={formData.totalFloors || ""}
            onChange={handleChange}
            placeholder="Total Floors"
            className="border p-2 rounded w-full"
          />
        </div>

        {/* Facing & Parking */}
        <div>
          <label className="block mb-1 font-semibold">Facing</label>
          <input
            name="facing"
            value={formData.facing || ""}
            onChange={handleChange}
            placeholder="Facing"
            className="border p-2 rounded w-full"
          />
        </div>
        <div>
          <label className="block mb-1 font-semibold">Parking</label>
          <select
            name="parking"
            value={formData.parking || ""}
            onChange={handleChange}
            className="border p-2 rounded w-full"
          >
            <option value="">Select Parking</option>
            {parkingOptions.map((p, i) => (
              <option key={i} value={p}>
                {p}
              </option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          {/* FEATURED */}
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={formData.isFeatured}
              onChange={(e) =>
                setFormData({ ...formData, isFeatured: e.target.checked })
              }
              className="w-5 h-5 accent-[#06B6D4]"
            />
            <span className="text-gray-700 font-medium">Featured Property</span>
          </label>

          {/* LATEST */}
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={formData.isLatest}
              onChange={(e) =>
                setFormData({ ...formData, isLatest: e.target.checked })
              }
              className="w-5 h-5 accent-[#0EA5E9]"
            />
            <span className="text-gray-700 font-medium">Latest Property</span>
          </label>
        </div>

        {/* Amenities */}
        <div className="col-span-full">
          <label className="block mb-1 font-semibold">Amenities</label>
          <div className="flex flex-wrap gap-4">
            {allAmenities.map((amenity, idx) => (
              <label key={idx} className="flex items-center gap-1">
                <input
                  type="checkbox"
                  checked={formData.amenities?.includes(amenity)}
                  onChange={() => handleAmenityChange(amenity)}
                />
                {amenity}
              </label>
            ))}
          </div>
        </div>

        {/* Existing Images */}
        {formData.images?.length > 0 && (
          <div className="col-span-full flex gap-2 flex-wrap">
            {formData.images.map((img, idx) => (
              <div key={idx} className="relative">
                <img src={img} className="w-24 h-24 object-cover rounded" />
                <button
                  type="button"
                  onClick={() => handleDeleteOldImage(idx)}
                  className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center"
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Upload New Images */}
        <div className="col-span-full">
          <label className="block mb-1 font-semibold">Upload New Images</label>
          <input
            type="file"
            multiple
            onChange={(e) => setNewImages(Array.from(e.target.files))}
            className="w-full"
          />
        </div>

        {/* Description */}
        <div className="col-span-full">
          <label className="block mb-1 font-semibold">
            Property Description
          </label>
          <textarea
            name="description"
            value={formData.description || ""}
            onChange={handleChange}
            placeholder="Property Description"
            className="border p-2 rounded w-full"
            rows={4}
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white py-2 rounded mt-2 col-span-full"
        >
          Update Property
        </button>
      </form>
    </div>
  );
}
