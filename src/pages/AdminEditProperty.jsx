import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function AdminEditProperty() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState(null);
  const [newImages, setNewImages] = useState([]);
  const [deletedImages, setDeletedImages] = useState([]);

  const purposes = ["Sale", "Rent", "Lease", "Investment"]; // replaced type with purpose
  const categories = [
    "Apartment",
    "Villa",
    "Plot",
    "Commercial",
    "Office Space",
  ];

  const parkingOptions = ["Parking", "Available", "Not Available"];

  // Fetch property data
  useEffect(() => {
    const fetchProperty = async () => {
      try {
        const res = await fetch(`https://vercel-synerzi-sbckend.vercel.app/api/properties/${id}`, {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        });
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

  // Delete old image handler
  const handleDeleteOldImage = (index) => {
    const removed = formData.images[index]; // the image to delete
    setDeletedImages((prev) => [...prev, removed]); // add it to deletedImages
    setFormData({
      ...formData,
      images: formData.images.filter((_, i) => i !== index),
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const fd = new FormData();

      Object.keys(formData).forEach((key) => {
        if (key !== "images" && key !== "amenities")
          fd.append(key, formData[key] || "");
      });

      fd.append("amenities", JSON.stringify(formData.amenities || []));

      if (formData.images?.length > 0)
        formData.images.forEach((img) => fd.append("existingImages", img));

      if (newImages.length > 0)
        newImages.forEach((img) => fd.append("images", img));

      // THIS LINE IS NEW — send deleted images
      if (deletedImages.length > 0)
        deletedImages.forEach((img) => fd.append("deletedImages", img));

      const res = await fetch(`https://vercel-synerzi-sbckend.vercel.app/api/properties/${id}`, {
        method: "PUT",
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        body: fd,
      });

      const data = await res.json();
      if (!res.ok) {
        alert(data.message || "Update failed");
        return;
      }

      alert("Property updated successfully 🚀");
      navigate("/admin-listings");
    } catch (err) {
      console.error(err);
      alert("Server error!");
    }
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
        {/* Title & Description */}
        <input
          name="title"
          value={formData.title || ""}
          onChange={handleChange}
          placeholder="Property Title"
          className="border p-2 rounded"
          required
        />
        {/* Price & Area */}
        <input
          name="price"
          value={formData.price || ""}
          onChange={handleChange}
          placeholder="Price"
          className="border p-2 rounded"
        />
        <input
          name="area"
          value={formData.area || ""}
          onChange={handleChange}
          placeholder="Area (sq ft)"
          className="border p-2 rounded"
        />

        {/* Purpose & Category */}
        <select
          name="purpose"
          value={formData.purpose || ""}
          onChange={handleChange}
          className="border p-2 rounded"
        >
          <option value="">Select Purpose</option>
          {purposes.map((p, i) => (
            <option key={i} value={p}>
              {p}
            </option>
          ))}
        </select>
        <select
          name="category"
          value={formData.category || ""}
          onChange={handleChange}
          className="border p-2 rounded"
        >
          <option value="">Select Category</option>
          {categories.map((c, i) => (
            <option key={i} value={c}>
              {c}
            </option>
          ))}
        </select>

        {/* State & City */}
        <input
          name="state"
          value={formData.state || ""}
          onChange={handleChange}
          placeholder="State"
          className="border p-2 rounded"
        />
        <input
          name="city"
          value={formData.city || ""}
          onChange={handleChange}
          placeholder="City"
          className="border p-2 rounded"
          list="cities"
        />

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
        <select
          name="parking"
          value={formData.parking || ""}
          onChange={handleChange}
          className="border p-2 rounded"
        >
          <option value="">Select Parking</option>
          {parkingOptions.map((p, i) => (
            <option key={i} value={p}>
              {p}
            </option>
          ))}
        </select>

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
          className="border p-2 rounded col-span-full"
        />

        {/* Existing Images */}
        {formData.images?.length > 0 && (
          <div className="flex gap-2 flex-wrap col-span-full">
            {formData.images.map((img, idx) => (
              <div key={idx} className="relative">
                <img
                  src={`https://vercel-synerzi-sbckend.vercel.app/${img.startsWith("uploads") ? img : `uploads/${img}`}`}
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
          className="col-span-full"
        />
        <textarea
          name="description"
          value={formData.description || ""}
          onChange={handleChange}
          placeholder="Property Description"
          className="border p-2 rounded"
          rows={4}
        />
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
