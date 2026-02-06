import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import AdminLeftBar from "../components/AdminLeftBar";

const initialFormState = {
  title: "",
  category: "Apartment",
  purpose: "For Sale",
  price: "",
  city: "",
  state: "",
  location: "",
  area: "",
  bhk: "",
  parking: "",
  description: "",
  amenities: [],
};

export default function AddListing() {
  const [formData, setFormData] = useState(initialFormState);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  /* ================= AUTH CHECK ================= */
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      window.location.href = "/admin-login";
      return;
    }

    try {
      const decoded = jwtDecode(token);
      if (decoded.role !== "admin") {
        localStorage.removeItem("token");
        window.location.href = "/admin-login";
      }
    } catch {
      localStorage.removeItem("token");
      window.location.href = "/admin-login";
    }
  }, []);

  /* ================= HANDLERS ================= */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAmenityChange = (amenity) => {
    setFormData((prev) => ({
      ...prev,
      amenities: prev.amenities.includes(amenity)
        ? prev.amenities.filter((a) => a !== amenity)
        : [...prev.amenities, amenity],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!images.length) {
      alert("Please upload at least one image");
      return;
    }

    setLoading(true);

    const data = new FormData();

    Object.entries(formData).forEach(([key, value]) => {
      if (key === "amenities") {
        data.append(key, JSON.stringify(value));
      } else {
        data.append(key, value);
      }
    });

    images.forEach((img) => data.append("images", img));

    try {
      const res = await fetch(
        "https://vercel-synerzi-sbckend.vercel.app/api/properties/add",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: data,
        },
      );

      const result = await res.json();
      if (!res.ok) throw new Error(result.message || "Failed to add property");

      alert("Property added successfully 🚀");

      setFormData(initialFormState);
      setImages([]);
      document.getElementById("imagesInput").value = "";
    } catch (err) {
      alert(err.message || "Server error");
    } finally {
      setLoading(false);
    }
  };

  /* ================= UI ================= */
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* LEFT SIDEBAR */}
      <AdminLeftBar />

      {/* MAIN CONTENT */}
      <div className="flex-1 p-6 md:p-10">
        <div className="max-w-5xl mx-auto bg-white p-8 rounded-lg shadow">
          <h1 className="text-2xl font-bold mb-6 text-gray-800">
            ➕ Add Property Listing
          </h1>

          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            <input
              name="title"
              placeholder="Property Title"
              value={formData.title}
              onChange={handleChange}
              className="border p-2 rounded"
              required
            />

            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="border p-2 rounded"
            >
              <option>Apartment</option>
              <option>Villa</option>
              <option>Plot</option>
              <option>Commercial</option>
            </select>

            <select
              name="purpose"
              value={formData.purpose}
              onChange={handleChange}
              className="border p-2 rounded"
            >
              <option>Sale</option>
              <option>Rent</option>
              <option>Lease</option>
              <option>Investment</option>
            </select>

            <input
              name="price"
              placeholder="Price"
              value={formData.price}
              onChange={handleChange}
              className="border p-2 rounded"
              required
            />

            <input
              name="city"
              placeholder="City"
              value={formData.city}
              onChange={handleChange}
              className="border p-2 rounded"
              required
            />

            <input
              name="state"
              placeholder="State"
              value={formData.state}
              onChange={handleChange}
              className="border p-2 rounded"
              required
            />

            <input
              name="location"
              placeholder="Location"
              value={formData.location}
              onChange={handleChange}
              className="border p-2 rounded"
            />

            <input
              name="area"
              placeholder="Area (sqft)"
              value={formData.area}
              onChange={handleChange}
              className="border p-2 rounded"
            />

            <select
              name="bhk"
              value={formData.bhk}
              onChange={handleChange}
              className="border p-2 rounded"
            >
              <option value="">BHK</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5+</option>
            </select>

            <select
              name="parking"
              value={formData.parking}
              onChange={handleChange}
              className="border p-2 rounded"
            >
              <option value="">Parking</option>
              <option>Available</option>
              <option>Not Available</option>
            </select>

            <textarea
              name="description"
              placeholder="Property Description"
              value={formData.description}
              onChange={handleChange}
              rows="4"
              className="border p-2 rounded md:col-span-2"
            />

            {/* Amenities */}
            <div className="md:col-span-2">
              <p className="font-semibold mb-2">Amenities</p>
              <div className="grid grid-cols-2 md:grid-cols-6 gap-2">
                {["Lift", "Gym", "Pool", "Security", "Garden", "CCTV"].map(
                  (amenity) => (
                    <label
                      key={amenity}
                      className="flex items-center gap-2 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        checked={formData.amenities?.includes(amenity) || false}
                        onChange={() => handleAmenityChange(amenity)}
                        className="w-4 h-4 accent-blue-600"
                      />
                      <span className="select-none">{amenity}</span>
                    </label>
                  ),
                )}
              </div>
            </div>

            {/* Images */}
            <div className="md:col-span-2">
              <input
                id="imagesInput"
                type="file"
                multiple
                accept="image/*"
                onChange={(e) => setImages([...e.target.files])}
                className="w-full border p-2 rounded"
              />
            </div>

            <button
              disabled={loading}
              type="submit"
              className="md:col-span-2 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded font-semibold"
            >
              {loading ? "Publishing..." : "Publish Property"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
