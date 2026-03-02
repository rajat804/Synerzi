import { useEffect, useState, useContext } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../components/AuthComponent";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function UserEditProperty() {
  const { id } = useParams();
  const { token } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const BASE_API = import.meta.env.VITE_BASE_URL;

  const [formData, setFormData] = useState(null);
  const [newImages, setNewImages] = useState([]);
  const [deletedImages, setDeletedImages] = useState([]);

  const amenitiesList = [
    "Borewell",
    "CCTV Surveillance",
    "Centrally Air Conditioned",
    "Corner Plot",
    "Fire NOC",
    "Fully Compliant",
    "Lift",
    "Maintenance Staff",
    "Others",
    "Park Facing",
    "Power Backup",
    "Rain Water Harvesting",
    "Recently Renovated",
    "Reserved Parking",
    "Security Personnel",
    "Security/Fire Alarm",
    "Vastu Compliant",
    "Visitor Parking",
    "Waste Disposal",
    "Water Storage",
    "Wide Road",
    "WiFi",
    "Lift",
    "Gym",
    "Pool",
    "Security",
    "Garden",
  ];

  const purposes = ["Buy", "Sale", "Lease"];
  const categories = [
    "Dareshell",
    "Commercial",
    "Furnished",
    "Industrial Plot",
    "Plot",
    "Shed",
    "Warehouse",
    "Factory",
  ];

  const statusOptions = [
    "Available",
    "Sold",
    "Booked",
    "Hot Offer",
    "New Offer",
  ];

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        const res = await fetch(`${BASE_API}/api/properties/admin/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await res.json();
        setFormData(data);
      } catch (err) {
        alert("Failed to load property");
      }
    };
    fetchProperty();
  }, [id]);

  if (!formData) return <div className="p-6 text-center">Loading...</div>;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleAmenityChange = (amenity) => {
    let updated = formData.amenities || [];
    if (updated.includes(amenity)) {
      updated = updated.filter((a) => a !== amenity);
    } else {
      updated.push(amenity);
    }
    setFormData({ ...formData, amenities: updated });
  };

  const handleDeleteOldImage = (index) => {
    const removed = formData.images[index];
    setDeletedImages([...deletedImages, removed]);
    setFormData({
      ...formData,
      images: formData.images.filter((_, i) => i !== index),
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
setLoading(true);
    try {
      const fd = new FormData();

      Object.keys(formData).forEach((key) => {
        if (!["_id", "__v", "images", "amenities"].includes(key)) {
          fd.append(key, formData[key] ?? "");
        }
      });

      fd.append("amenities", JSON.stringify(formData.amenities || []));
      fd.append("deletedImages", JSON.stringify(deletedImages));

      formData.images?.forEach((img) => fd.append("existingImages", img));

      newImages.forEach((img) => fd.append("images", img));

      const res = await fetch(`${BASE_API}/api/properties/${id}`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: fd,
      });

      const data = await res.json();
      if (!res.ok) return alert(data.message);

      alert("Property updated successfully 🚀");
      navigate("/dashboard");
    } catch (err) {
      alert("Update failed");
    }
  };

  return (
    <div className="p-6 max-w-6xl mx-auto bg-white shadow rounded my-6">
      <div className="flex justify-between mb-6">
        <h2 className="text-2xl font-bold">Edit Property</h2>
        <Link
          to="/dashboard"
          className="bg-gray-600 text-white px-4 py-2 rounded"
        >
          Back
        </Link>
      </div>

      <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-4">
        {/* TITLE */}
        <div className="col-span-full">
          <label>Title</label>
          <input
            name="title"
            value={formData.title || ""}
            onChange={handleChange}
            className="border p-2 w-full rounded"
            required
          />
        </div>

        {/* PRICE */}
        <div>
          <label>Price</label>
          <input
            name="price"
            value={formData.price || ""}
            onChange={handleChange}
            className="border p-2 w-full rounded"
          />
        </div>

        <div>
          <label>Price Label</label>
          <input
            name="priceLabel"
            value={formData.priceLabel || ""}
            onChange={handleChange}
            className="border p-2 w-full rounded"
          />
        </div>

        {/* CATEGORY */}
        <div>
          <label>Category</label>
          <select
            name="category"
            value={formData.category || ""}
            onChange={handleChange}
            className="border p-2 w-full rounded"
          >
            <option value="">Select</option>
            {categories.map((c, i) => (
              <option key={i} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label>Purpose</label>
          <select
            name="purpose"
            value={formData.purpose || ""}
            onChange={handleChange}
            className="border p-2 w-full rounded"
          >
            <option value="">Select</option>
            {purposes.map((p, i) => (
              <option key={i} value={p}>
                {p}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label>Status</label>
          <select
            name="status"
            value={formData.status || ""}
            onChange={handleChange}
            className="border p-2 w-full rounded"
          >
            <option value="">Select</option>
            {statusOptions.map((s, i) => (
              <option key={i} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>

        {/* LOCATION */}
        <div>
          <label>City</label>
          <input
            name="city"
            value={formData.city || ""}
            onChange={handleChange}
            className="border p-2 w-full rounded"
          />
        </div>

        <div>
          <label>Location</label>
          <input
            name="location"
            value={formData.location || ""}
            onChange={handleChange}
            className="border p-2 w-full rounded"
          />
        </div>

        <div>
          <label>Address</label>
          <input
            name="address"
            value={formData.address || ""}
            onChange={handleChange}
            className="border p-2 w-full rounded"
          />
        </div>

        <div>
          <label>Pincode</label>
          <input
            name="pincode"
            value={formData.pincode || ""}
            onChange={handleChange}
            className="border p-2 w-full rounded"
          />
        </div>

        <div>
          <label>Country</label>
          <input
            name="country"
            value={formData.country || ""}
            onChange={handleChange}
            className="border p-2 w-full rounded"
          />
        </div>

        {/* DETAILS */}
        {[
          "size",
          "facing",
          "yearBuilt",
          "builtUpArea",
          "flooring",
          "ownership",
          "possession",
          "structureType",
          "totalFloors",
          "roadWidth",
          "openSides",
        ].map((field) => (
          <div key={field}>
            <label className="capitalize">{field}</label>
            <input
              name={field}
              value={formData[field] || ""}
              onChange={handleChange}
              className="border p-2 w-full rounded"
            />
          </div>
        ))}

        {/* DESCRIPTION */}
        <div className="col-span-full">
          <label className="font-semibold mb-2 block">Description</label>

          <ReactQuill
            theme="snow"
            value={formData.description || ""}
            onChange={(value) =>
              setFormData({ ...formData, description: value })
            }
            className="bg-white [&_.ql-editor]:min-h-[300px]"
          />
        </div>

        {/* AMENITIES */}
        <div className="col-span-full">
          <label>Amenities</label>
          <div className="flex gap-4 flex-wrap">
            {amenitiesList.map((a, i) => (
              <label key={i} className="flex gap-1">
                <input
                  type="checkbox"
                  checked={formData.amenities?.includes(a)}
                  onChange={() => handleAmenityChange(a)}
                />
                {a}
              </label>
            ))}
          </div>
        </div>

        {/* FLAGS */}
        <div className="col-span-full flex gap-6">
          <label>
            <input
              type="checkbox"
              name="isFeatured"
              checked={formData.isFeatured || false}
              onChange={handleChange}
            />{" "}
            Featured
          </label>

          <label>
            <input
              type="checkbox"
              name="isLatest"
              checked={formData.isLatest || false}
              onChange={handleChange}
            />{" "}
            Latest
          </label>
        </div>
        {/* <label>
          <input
            type="checkbox"
            name="isApproved"
            checked={formData.isApproved}
            onChange={handleChange}
          />
          Approve Property
        </label> */}
        {/* OLD IMAGES */}
        {formData.images?.length > 0 && (
          <div className="col-span-full flex gap-3 flex-wrap">
            {formData.images.map((img, i) => (
              <div key={i} className="relative">
                <img src={img} className="w-24 h-24 object-cover rounded" />
                <button
                  type="button"
                  onClick={() => handleDeleteOldImage(i)}
                  className="absolute top-0 right-0 bg-red-500 text-white w-6 h-6 rounded-full"
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        )}

        {/* NEW IMAGES */}
        <div className="col-span-full">
          <label>Upload New Images</label>
          <input
            type="file"
            multiple
            onChange={(e) => setNewImages(Array.from(e.target.files))}
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`col-span-full py-2 rounded text-white flex items-center justify-center gap-2 transition-all duration-300
    ${loading ? "bg-blue-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"}
  `}
        >
          {loading && (
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
          )}

          {loading ? "Updating..." : "Update Property"}
        </button>
      </form>
    </div>
  );
}
