import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function AdminEditProperty() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState(null);
  const [newImages, setNewImages] = useState([]);

  const types = ["For Sale", "For Rent"];
  const cities = ["Mumbai", "Pune", "Bangalore", "Ahmedabad", "Jaipur", "Hyderabad", "Noida", "Surat"];

  // Fetch property data
  useEffect(() => {
    fetch(`https://synerzi-backend.vercel.app/api/properties/${id}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    })
      .then((res) => res.json())
      .then((data) => setFormData(data))
      .catch((err) => console.error(err));
  }, [id]);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Delete an old image
  const handleDeleteOldImage = (index) => {
    setFormData({
      ...formData,
      images: formData.images.filter((_, i) => i !== index),
    });
  };

  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();

    const fd = new FormData();

    // Add basic fields except images/amenities
    Object.keys(formData).forEach((key) => {
      if (key !== "images" && key !== "amenities") {
        fd.append(key, formData[key]);
      }
    });

    // Amenities
    fd.append("amenities", JSON.stringify(formData.amenities || []));

    // Existing images
    if (formData.images && formData.images.length > 0) {
      formData.images.forEach((img) => fd.append("existingImages", img));
    }

    // New images
    if (newImages.length > 0) {
      newImages.forEach((img) => fd.append("images", img));
    }

    try {
      const res = await fetch(`https://synerzi-backend.vercel.app/api/properties/${id}`, {
        method: "PUT",
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        body: fd,
      });

      const data = await res.json();
      if (!res.ok) {
        alert(data.message);
        return;
      }

      alert("Property updated successfully 🚀");
      navigate("/admin-listings");
    } catch (err) {
      console.error(err);
      alert("Something went wrong!");
    }
  };

  if (!formData) return <div className="p-6 text-center">Loading...</div>;

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Edit Property</h2>

      <form onSubmit={handleSubmit} className="grid gap-4">
        {/* Title */}
        <input
          name="title"
          value={formData.title || ""}
          onChange={handleChange}
          placeholder="Property Name"
          className="border p-2 rounded"
        />

        {/* Price */}
        <input
          name="price"
          value={formData.price || ""}
          onChange={handleChange}
          placeholder="Price (₹)"
          className="border p-2 rounded"
        />

        {/* Type */}
        <select
          name="type"
          value={formData.type || ""}
          onChange={handleChange}
          className="border p-2 rounded"
        >
          <option value="">Select Type</option>
          {types.map((t, i) => (
            <option key={i} value={t}>
              {t}
            </option>
          ))}
        </select>

        {/* Category (manual input) */}
        <input
          name="category"
          value={formData.category || ""}
          onChange={handleChange}
          placeholder="Category (e.g., Apartment)"
          className="border p-2 rounded"
        />

        {/* State (manual input) */}
        <input
          name="state"
          value={formData.state || ""}
          onChange={handleChange}
          placeholder="State (e.g., Maharashtra)"
          className="border p-2 rounded"
        />

        {/* City */}
        <input
          name="city"
          value={formData.city || ""}
          onChange={handleChange}
          placeholder="City"
          className="border p-2 rounded"
          list="cities"
        />
        <datalist id="cities">
          {cities.map((c, i) => (
            <option key={i} value={c} />
          ))}
        </datalist>

        {/* Numeric Fields */}
        <input
          name="bhk"
          type="number"
          value={formData.bhk || ""}
          onChange={handleChange}
          placeholder="BHK"
          className="border p-2 rounded"
        />
        <input
          name="bathrooms"
          type="number"
          value={formData.bathrooms || ""}
          onChange={handleChange}
          placeholder="Bathrooms"
          className="border p-2 rounded"
        />
        <input
          name="balconies"
          type="number"
          value={formData.balconies || ""}
          onChange={handleChange}
          placeholder="Balconies"
          className="border p-2 rounded"
        />
        <input
          name="floorNumber"
          type="number"
          value={formData.floorNumber || ""}
          onChange={handleChange}
          placeholder="Floor Number"
          className="border p-2 rounded"
        />
        <input
          name="totalFloors"
          type="number"
          value={formData.totalFloors || ""}
          onChange={handleChange}
          placeholder="Total Floors"
          className="border p-2 rounded"
        />

        {/* Facing & Parking */}
        <input
          name="facing"
          value={formData.facing || ""}
          onChange={handleChange}
          placeholder="Facing"
          className="border p-2 rounded"
        />
        <input
          name="parking"
          value={formData.parking || ""}
          onChange={handleChange}
          placeholder="Parking"
          className="border p-2 rounded"
        />

        {/* Amenities */}
        <input
          name="amenities"
          value={formData.amenities?.join(", ") || ""}
          onChange={(e) =>
            setFormData({
              ...formData,
              amenities: e.target.value.split(",").map((a) => a.trim()),
            })
          }
          placeholder="Amenities (comma separated)"
          className="border p-2 rounded"
        />

        {/* Existing Images */}
        {formData.images && formData.images.length > 0 && (
          <div className="flex gap-2 flex-wrap mb-2">
            {formData.images.map((img, idx) => (
              <div key={idx} className="relative">
                <img
                  src={`https://synerzi-backend.vercel.app/${img}`}
                  alt="property"
                  className="w-24 h-24 object-cover rounded"
                />
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
        <input
          type="file"
          multiple
          onChange={(e) => setNewImages(Array.from(e.target.files))}
        />

        <button className="bg-blue-600 text-white py-2 rounded mt-2">
          Update Property
        </button>
      </form>
    </div>
  );
}
