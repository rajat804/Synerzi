import { useEffect, useState, useContext } from "react";
import { jwtDecode } from "jwt-decode";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { AuthContext } from "../components/AuthComponent";

const initialFormState = {
  title: "",
  description: "",
  price: "",
  priceLabel: "",
  category: "",
  purpose: "",
  status: "",
  city: "",
  state: "",
  location: "",
  address: "",
  pincode: "",
  country: "India",
  size: "",
  facing: "",
  yearBuilt: "",
  builtUpArea: "",
  flooring: "",
  ownership: "",
  possession: "",
  structureType: "",
  totalFloors: "",
  roadWidth: "",
  openSides: "",
  area: "",
  bhk: "",
  parking: "",
  amenities: [],
  isFeatured: false,
  isLatest: false,
};

export default function UserAddListing() {
  const [formData, setFormData] = useState(initialFormState);
  const [images, setImages] = useState([]);
  const [previewImages, setPreviewImages] = useState([]);
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const BASE_API = import.meta.env.VITE_BASE_URL;
  const [showLoginModal, setShowLoginModal] = useState(false);
  const { user, token } = useContext(AuthContext);

  /* ================= INPUT CHANGE ================= */
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  /* ================= CHECKBOX (isFeatured, isLatest) ================= */
  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  /* ================= AMENITIES ================= */
  const handleAmenityChange = (amenity) => {
    setFormData((prev) => ({
      ...prev,
      amenities: prev.amenities.includes(amenity)
        ? prev.amenities.filter((a) => a !== amenity)
        : [...prev.amenities, amenity],
    }));
  };

  /* ================= IMAGE CHANGE ================= */
  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);

    setImages(files);

    const previews = files.map((file) => URL.createObjectURL(file));
    setPreviewImages(previews);
  };

  const removeImage = (index) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
    setPreviewImages((prev) => prev.filter((_, i) => i !== index));
  };

  /* ================= SUBMIT ================= */
  const handleSubmit = async () => {
    if (step !== 5) return;

    if (!user || !token) {
      setShowLoginModal(true);
      return;
    }

    if (!images.length) {
      alert("Upload at least one image");
      return;
    }

    try {
      setLoading(true);
      const data = new FormData();

      Object.entries(formData).forEach(([key, value]) => {
        if (value === "" || value === null || value === undefined) return;

        if (Array.isArray(value)) {
          data.append(key, JSON.stringify(value));
        } else if (typeof value === "boolean") {
          data.append(key, value.toString());
        } else {
          data.append(key, value || "");
        }
      });

      images.forEach((img) => {
        data.append("images", img);
      });

      const res = await fetch(`${BASE_API}/api/properties/add`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: data,
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.message || "Failed to add property");
      }

      alert("Property Added Successfully 🚀");

      setFormData(initialFormState);
      setImages([]);
      setPreviewImages([]);
      setStep(1);
    } catch (err) {
      alert(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  /* ================= UI ================= */

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <>
            <h2 className="text-xl font-semibold mb-6">Property Description</h2>

            {/* Title */}
            <div className="mb-6">
              <label className="block text-sm font-medium mb-1">Title *</label>
              <input
                name="title"
                placeholder="Enter Property Title"
                value={formData.title}
                onChange={handleChange}
                className="border p-2 rounded w-full"
                required
              />
            </div>

            {/* Description */}
            <div className="mb-8">
              <label className="block text-sm font-medium mb-2">
                Description
              </label>

              <ReactQuill
                theme="snow"
                value={formData.description}
                onChange={(value) =>
                  setFormData({ ...formData, description: value })
                }
                className="bg-white [&_.ql-editor]:min-h-[300px]"
              />
            </div>
            {/* Featured & Latest */}
            <h3 className="text-lg font-semibold mb-4">Highlight Options</h3>
            <div className="flex gap-6 mb-8">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="isFeatured"
                  checked={formData.isFeatured}
                  onChange={handleCheckboxChange}
                />
                Featured Property
              </label>

              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="isLatest"
                  checked={formData.isLatest}
                  onChange={handleCheckboxChange}
                />
                Latest Property
              </label>
            </div>
            {/* Property Price Section */}
            <h3 className="text-lg font-semibold mb-4">Property Price</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Price (₹ only numbers)
                </label>
                <input
                  name="price"
                  placeholder="Enter Price"
                  value={formData.price}
                  onChange={handleChange}
                  className="border p-2 rounded w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  After Price Label (ex: "/month")
                </label>
                <input
                  name="priceLabel"
                  placeholder="/month"
                  value={formData.priceLabel || ""}
                  onChange={handleChange}
                  className="border p-2 rounded w-full"
                />
              </div>
            </div>

            {/* Select Categories */}
            <h3 className="text-lg font-semibold mb-4">Select Categories</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Category
                </label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="border p-2 rounded w-full"
                >
                  <option value="">None</option>
                  <option>Dareshell</option>
                  <option>Commercial</option>
                  <option>Furnished</option>
                  <option>Industrial Plot</option>
                  <option>Plot</option>
                  <option>Shed</option>
                  <option>Warehouse</option>
                  <option>Factory</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Listed In
                </label>
                <select
                  name="purpose"
                  value={formData.purpose}
                  onChange={handleChange}
                  className="border p-2 rounded w-full"
                >
                  <option value="">None</option>
                  <option>Buy</option>
                  <option>Lease</option>
                  <option>Sale</option>
                </select>
              </div>
            </div>

            {/* Select Property Status */}
            <h3 className="text-lg font-semibold mb-4">
              Select Property Status
            </h3>

            <div className="mb-6">
              <label className="block text-sm font-medium mb-1">
                Property Status
              </label>
              <select
                name="status"
                value={formData.status || ""}
                onChange={handleChange}
                className="border p-2 rounded w-full"
              >
                <option value="">No Status</option>
                <option>Hot Offer</option>
                <option>New Offer</option>
              </select>
            </div>
          </>
        );

      case 2:
        return (
          <>
            <h2 className="text-xl font-semibold mb-4">Media</h2>

            <input
              type="file"
              multiple
              accept="image/*"
              onChange={handleImageChange}
              className="border p-2 rounded w-full mb-4"
            />

            {/* Image Preview */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {previewImages.map((img, index) => (
                <div key={index} className="relative">
                  <img
                    src={img}
                    alt="preview"
                    className="h-32 w-full object-cover rounded"
                  />
                  <button
                    type="button"
                    onClick={() => removeImage(index)}
                    className="absolute top-1 right-1 bg-red-600 text-white text-xs px-2 py-1 rounded"
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>
          </>
        );

      case 3:
        return (
          <>
            <h2 className="text-xl font-semibold mb-6">Listing Location</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Address */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-1">
                  Address
                </label>
                <input
                  name="address"
                  placeholder="Enter Full Address"
                  value={formData.address || ""}
                  onChange={handleChange}
                  className="border p-2 rounded w-full"
                />
              </div>

              {/* City Dropdown */}
              <div>
                <label className="block text-sm font-medium mb-1">City</label>
                <select
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="border p-2 rounded w-full"
                >
                  <option value="">Select City</option>
                  <option>Udyog Vihar</option>
                  <option>Manesar</option>
                  <option>Dharuhera</option>
                  <option>Bawal</option>
                  <option>Bhiwadi</option>
                  <option>Neemrana</option>
                  <option>Khushkhera</option>
                  <option>Sohna</option>
                  <option>Faridabad</option>
                  <option>Met City (Reliance)</option>
                  <option>Kharkhoda</option>
                  <option>Bahadurgarh</option>
                </select>
              </div>

              {/* Location */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Location
                </label>
                <input
                  name="location"
                  placeholder="Enter Area / Sector"
                  value={formData.location}
                  onChange={handleChange}
                  className="border p-2 rounded w-full"
                />
              </div>

              {/* Pincode */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Pincode
                </label>
                <input
                  name="pincode"
                  placeholder="Enter Pincode"
                  value={formData.pincode || ""}
                  onChange={handleChange}
                  className="border p-2 rounded w-full"
                />
              </div>

              {/* Country */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Country
                </label>
                <input
                  name="country"
                  placeholder="Country"
                  value={formData.country || "India"}
                  onChange={handleChange}
                  className="border p-2 rounded w-full"
                />
              </div>
            </div>
          </>
        );

      case 4:
        return (
          <>
            <h2 className="text-xl font-semibold mb-2">
              Amenities and Features
            </h2>

            <p className="text-sm text-gray-500 mb-6">Other Features</p>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {[
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
              ].map((feature) => (
                <label
                  key={feature}
                  className="flex items-center gap-2 border rounded px-3 py-2 cursor-pointer hover:bg-gray-100 transition"
                >
                  <input
                    type="checkbox"
                    name="amenities"
                    value={feature}
                    checked={formData.amenities.includes(feature)}
                    onChange={(e) => {
                      e.stopPropagation();
                      handleAmenityChange(feature);
                    }}
                  />
                  <span className="text-sm">{feature}</span>
                </label>
              ))}
            </div>
          </>
        );

      case 5:
        return (
          <>
            <h2 className="text-xl font-semibold mb-6">Listing Details</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Size */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Size in m² (Only Numbers)
                </label>
                <input
                  type="number"
                  name="size"
                  placeholder="Enter Size"
                  value={formData.size || ""}
                  onChange={handleChange}
                  className="border p-2 rounded w-full"
                />
              </div>

              {/* Facing */}
              <div>
                <label className="block text-sm font-medium mb-1">Facing</label>
                <input
                  name="facing"
                  placeholder="East / West / North / South"
                  value={formData.facing || ""}
                  onChange={handleChange}
                  className="border p-2 rounded w-full"
                />
              </div>

              {/* Year Built */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Year Built (Numeric)
                </label>
                <input
                  type="number"
                  name="yearBuilt"
                  placeholder="e.g. 2018"
                  value={formData.yearBuilt || ""}
                  onChange={handleChange}
                  className="border p-2 rounded w-full"
                />
              </div>

              {/* Built Up Area */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Built Up Area
                </label>
                <input
                  name="builtUpArea"
                  placeholder="e.g. 5000 sqft"
                  value={formData.builtUpArea || ""}
                  onChange={handleChange}
                  className="border p-2 rounded w-full"
                />
              </div>

              {/* Flooring */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Flooring
                </label>
                <select
                  name="flooring"
                  value={formData.flooring || ""}
                  onChange={handleChange}
                  className="border p-2 rounded w-full"
                >
                  <option value="">Not Available</option>
                  <option>Tiled</option>
                  <option>Kotastoned</option>
                  <option>Plain Flooring</option>
                </select>
              </div>

              {/* Property Ownership */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Property Ownership
                </label>
                <select
                  name="ownership"
                  value={formData.ownership || ""}
                  onChange={handleChange}
                  className="border p-2 rounded w-full"
                >
                  <option value="">Not Available</option>
                  <option>Freehold</option>
                  <option>Leasehold</option>
                  <option>Individual Transfer</option>
                  <option>Company Transfer</option>
                </select>
              </div>

              {/* Possession */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Possession
                </label>
                <select
                  name="possession"
                  value={formData.possession || ""}
                  onChange={handleChange}
                  className="border p-2 rounded w-full"
                >
                  <option value="">Not Available</option>
                  <option>Immediate</option>
                  <option>Under Construction</option>
                  <option>Empty</option>
                </select>
              </div>

              {/* Structure Type */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Structure Type
                </label>
                <select
                  name="structureType"
                  value={formData.structureType || ""}
                  onChange={handleChange}
                  className="border p-2 rounded w-full"
                >
                  <option value="">Not Available</option>
                  <option>RCC</option>
                  <option>Shed</option>
                  <option>IT</option>
                  <option>RCC + Shed</option>
                </select>
              </div>

              {/* Total Floors */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Total Floors
                </label>
                <input
                  type="number"
                  name="totalFloors"
                  placeholder="Enter Total Floors"
                  value={formData.totalFloors || ""}
                  onChange={handleChange}
                  className="border p-2 rounded w-full"
                />
              </div>

              {/* Facing Road Width */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Facing Road Width
                </label>
                <input
                  name="roadWidth"
                  placeholder="e.g. 60 ft"
                  value={formData.roadWidth || ""}
                  onChange={handleChange}
                  className="border p-2 rounded w-full"
                />
              </div>

              {/* No. of Open Sides */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  No. of Open Sides
                </label>
                <select
                  name="openSides"
                  value={formData.openSides || ""}
                  onChange={handleChange}
                  className="border p-2 rounded w-full"
                >
                  <option value="">Not Available</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>5+</option>
                </select>
              </div>
            </div>
          </>
        );

      default:
        return null;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <div className="flex-1 p-6">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded shadow">
          {/* STEP TABS */}
          <div className="flex justify-between mb-8 text-sm font-medium">
            {["Description", "Media", "Location", "Amenities", "Details"].map(
              (label, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setStep(index + 1)}
                  className={`px-3 py-2 rounded ${
                    step === index + 1
                      ? "bg-blue-600 text-white"
                      : "bg-gray-200"
                  }`}
                >
                  {index + 1}. {label}
                </button>
              ),
            )}
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            {renderStep()}

            <div className="flex justify-between mt-8">
              {step > 1 && (
                <button
                  type="button"
                  onClick={() => setStep((prev) => prev - 1)}
                  className="bg-gray-400 text-white px-4 py-2 rounded"
                >
                  Back
                </button>
              )}

              {step < 5 ? (
                <button
                  type="button"
                  onClick={() => setStep((prev) => prev + 1)}
                  className="bg-blue-600 text-white px-6 py-2 rounded"
                >
                  Next Step
                </button>
              ) : (
                <button
                  disabled={loading}
                  type="button" // 🔥 changed from submit to button
                  onClick={handleSubmit} // 🔥 manual control
                  className="bg-green-600 text-white px-6 py-2 rounded"
                >
                  {loading ? "Publishing..." : "Publish Property"}
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
      {showLoginModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white w-full max-w-md p-6 rounded-lg shadow-lg relative">
            <button
              onClick={() => setShowLoginModal(false)}
              className="absolute top-2 right-3 text-gray-500 text-xl"
            >
              ✕
            </button>

            <h2 className="text-xl font-semibold mb-4 text-center">
              Login Required
            </h2>

            <p className="text-sm text-gray-600 text-center mb-6">
              Please login to publish your property.
            </p>

            <button
              onClick={() => (window.location.href = "/login")}
              className="w-full bg-blue-600 text-white py-2 rounded"
            >
              Go To Login
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
