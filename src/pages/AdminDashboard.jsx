import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { Link } from "react-router-dom";

const initialFormState = {
  propertyType: "",
  bhk: "",
  bathrooms: "",
  balconies: "",
  floorNo: "",
  totalFloors: "",
  facing: "",
  parking: "",
  amenities: [],
};

export default function AdminDashboard() {
  const [admin, setAdmin] = useState(null);
  const [activePage, setActivePage] = useState("dashboard");
  const [images, setImages] = useState([]);
  const [formData, setFormData] = useState(initialFormState);
  const [properties, setProperties] = useState([]);
  const [showListBtn, setShowListBtn] = useState(false);

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
        return;
      }
      setAdmin(decoded);
    } catch {
      localStorage.removeItem("token");
      window.location.href = "/admin-login";
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/admin-login";
  };

  /* ================= FORM HANDLERS ================= */
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

  const fetchProperties = async () => {
    try {
      const res = await fetch("https://synerzi-backend.vercel.app/api/properties");
      const data = await res.json();
      setProperties(data);
      setShowListBtn(data.length > 0);
    } catch (err) {
      console.error("Failed to fetch properties");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (images.length === 0) {
      alert("Please select at least one image");
      return;
    }

    const data = new FormData();
    data.append("propertyType", formData.propertyType);
    data.append("bhk", formData.bhk);
    data.append("bathrooms", formData.bathrooms);
    data.append("balconies", formData.balconies);
    data.append("floorNumber", formData.floorNo);
    data.append("totalFloors", formData.totalFloors);
    data.append("facing", formData.facing);
    data.append("parking", formData.parking);
    data.append("amenities", JSON.stringify(formData.amenities));
    images.forEach((img) => data.append("images", img));

    const token = localStorage.getItem("token");

    const res = await fetch("https://synerzi-backend.vercel.app/api/properties/add", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: data,
    });

    const text = await res.text();
    let result;
    try {
      result = JSON.parse(text);
    } catch {
      alert("Backend error — check server logs");
      return;
    }

    if (!res.ok) {
      alert(result.message || "Failed to add property");
      return;
    }

    alert("Property added successfully 🚀");
    // 🔥 RESET FORM
    setFormData(initialFormState);
    setImages([]);
    document.getElementById("imagesInput").value = "";
  };

  if (!admin) return <div className="p-8">Loading...</div>;

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* SIDEBAR */}
      <aside className="w-64 bg-slate-900 text-white hidden md:block">
        <div className="p-6 text-xl font-bold border-b border-slate-700">Admin Panel</div>
        <nav className="p-4 space-y-2">
          <button
            onClick={() => setActivePage("dashboard")}
            className={`w-full text-left px-4 py-2 rounded ${
              activePage === "dashboard" ? "bg-slate-700" : "hover:bg-slate-800"
            }`}
          >
            Dashboard
          </button>
          <button
            onClick={() => setActivePage("add-listing")}
            className={`w-full text-left px-4 py-2 rounded ${
              activePage === "add-listing" ? "bg-slate-700" : "hover:bg-slate-800"
            }`}
          >
            Add Listing
          </button>
        </nav>
      </aside>

      {/* MAIN */}
      <div className="flex-1 flex flex-col">
        {/* HEADER */}
        <header className="bg-white shadow px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-semibold">
            {activePage === "dashboard" ? "Dashboard" : "Add Listing"}
          </h1>
          <div className="flex items-center gap-4">
            <span className="font-medium text-gray-700">{admin.fullName}</span>
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
            >
              Logout
            </button>
          </div>
        </header>

        {/* CONTENT */}
        <main className="p-6">
          {activePage === "dashboard" && (
            <div className="bg-white p-6 rounded shadow">
              <h2 className="text-2xl font-bold mb-4"> Welcome, {admin.fullName} 👋 </h2>
              <p>Email: {admin.email}</p>
              <p>Role: {admin.role}</p>
              <Link
                to={"/admin-listings"}
                className="mt-4 bg-green-600 text-white py-3 rounded"
                style={{ display: "inline-block" }}
              >
                Show Listings
              </Link>
            </div>
          )}

          {activePage === "add-listing" && (
            <div className="bg-white p-6 rounded shadow max-w-3xl">
              <h2 className="text-2xl font-bold mb-6">Add Property Listing</h2>
              <form
                onSubmit={handleSubmit}
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
              >
                {/* IMAGES */}
                <div className="md:col-span-2">
                  <label className="font-medium">Property Images</label>
                  <input
                    id="imagesInput"
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={(e) => setImages(Array.from(e.target.files))}
                    className="w-full border p-2 rounded"
                  />
                </div>

                {/* PROPERTY TYPE */}
                <select
                  name="propertyType"
                  value={formData.propertyType}
                  onChange={handleChange}
                  className="w-full border p-2 rounded"
                  required
                >
                  <option value="">Property Type</option>
                  <option>Flat</option>
                  <option>Villa</option>
                  <option>Plot</option>
                  <option>Commercial</option>
                </select>

                {/* BHK */}
                <select
                  name="bhk"
                  value={formData.bhk}
                  onChange={handleChange}
                  className="w-full border p-2 rounded"
                  required
                >
                  <option value="">BHK</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5+</option>
                </select>

                <input
                  type="number"
                  name="bathrooms"
                  placeholder="Bathrooms"
                  value={formData.bathrooms}
                  onChange={handleChange}
                  className="border p-2 rounded"
                />
                <input
                  type="number"
                  name="balconies"
                  placeholder="Balconies"
                  value={formData.balconies}
                  onChange={handleChange}
                  className="border p-2 rounded"
                />
                <input
                  type="number"
                  name="floorNo"
                  placeholder="Floor Number"
                  value={formData.floorNo}
                  onChange={handleChange}
                  className="border p-2 rounded"
                />
                <input
                  type="number"
                  name="totalFloors"
                  placeholder="Total Floors"
                  value={formData.totalFloors}
                  onChange={handleChange}
                  className="border p-2 rounded"
                />

                <select
                  name="facing"
                  value={formData.facing}
                  onChange={handleChange}
                  className="border p-2 rounded"
                >
                  <option value="">Facing</option>
                  <option>East</option>
                  <option>West</option>
                  <option>North</option>
                  <option>South</option>
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

                {/* AMENITIES */}
                <div className="md:col-span-2">
                  <label className="font-medium">Amenities</label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-2">
                    {[
                      "Lift",
                      "Power Backup",
                      "Gym",
                      "Swimming Pool",
                      "Security",
                      "Garden",
                      "Club House",
                      "CCTV",
                    ].map((a) => (
                      <label key={a} className="flex gap-2">
                        <input
                          type="checkbox"
                          checked={formData.amenities.includes(a)}
                          onChange={() => handleAmenityChange(a)}
                        />
                        {a}
                      </label>
                    ))}
                  </div>
                </div>

                <button
                  type="submit"
                  className="md:col-span-2 bg-blue-600 text-white py-3 rounded hover:bg-blue-700"
                >
                  Publish Property
                </button>
              </form>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
