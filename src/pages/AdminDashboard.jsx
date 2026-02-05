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

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return (window.location.href = "/admin-login");

    try {
      const decoded = jwtDecode(token);
      if (decoded.role !== "admin") {
        localStorage.removeItem("token");
        return (window.location.href = "/admin-login");
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
    if (!images.length) return alert("Please select at least one image");

    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (key === "amenities") data.append(key, JSON.stringify(value));
      else data.append(key, value);
    });
    images.forEach((img) => data.append("images", img));

    const token = localStorage.getItem("token");
    const res = await fetch("https://synerzi-backend.vercel.app/api/properties/add", {
      method: "POST",
      headers: { Authorization: `Bearer ${token}` },
      body: data,
    });

    const text = await res.text();
    let result;
    try {
      result = JSON.parse(text);
    } catch {
      return alert("Backend error — check server logs");
    }
    if (!res.ok) return alert(result.message || "Failed to add property");

    alert("Property added successfully 🚀");
    setFormData(initialFormState);
    setImages([]);
    document.getElementById("imagesInput").value = "";
  };

  if (!admin) return <div className="p-8">Loading...</div>;

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* SIDEBAR */}
      <aside className="w-64 bg-gradient-to-b from-slate-900 to-slate-800 text-white hidden md:block">
        <div className="p-6 text-xl font-bold border-b border-slate-700">
          Admin Panel
        </div>
        <nav className="p-4 space-y-2">
          {[
            { id: "dashboard", label: "Dashboard" },
            { id: "add-listing", label: "Add Listing" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActivePage(item.id)}
              className={`w-full text-left px-4 py-2 rounded transition-all duration-300 font-medium ${
                activePage === item.id
                  ? "bg-cyan-500 text-white shadow-md"
                  : "hover:bg-cyan-600 hover:shadow-sm"
              }`}
            >
              {item.label}
            </button>
          ))}
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
              className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-blue-500 hover:to-cyan-500 text-white rounded shadow-md hover:shadow-lg transition-all"
            >
              Logout
            </button>
          </div>
        </header>

        {/* CONTENT */}
        <main className="p-6">
          {activePage === "dashboard" && (
            <div className="bg-white p-6 rounded shadow hover:shadow-2xl transition-all duration-300">
              <h2 className="text-2xl font-bold mb-4">Welcome, {admin.fullName} 👋</h2>
              <p>Email: {admin.email}</p>
              <p>Role: {admin.role}</p>
              <Link
                to={"/admin-listings"}
                className="mt-4 inline-block bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-blue-500 hover:to-cyan-500 text-white py-3 px-6 rounded shadow-md hover:shadow-lg transition-all"
              >
                Show Listings
              </Link>
            </div>
          )}

          {activePage === "add-listing" && (
            <div className="bg-white p-6 rounded shadow max-w-3xl hover:shadow-2xl transition-all duration-300">
              <h2 className="text-2xl font-bold mb-6">Add Property Listing</h2>
              <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* IMAGES */}
                <div className="md:col-span-2">
                  <label className="font-medium">Property Images</label>
                  <input
                    id="imagesInput"
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={(e) => setImages(Array.from(e.target.files))}
                    className="w-full border p-2 rounded hover:shadow-md transition"
                  />
                </div>

                {/* PROPERTY TYPE */}
                <select
                  name="propertyType"
                  value={formData.propertyType}
                  onChange={handleChange}
                  className="w-full border p-2 rounded hover:shadow-md transition"
                  required
                >
                  <option value="">Property Type</option>
                  <option>Flat</option>
                  <option>Villa</option>
                  <option>Plot</option>
                  <option>Commercial</option>
                </select>

                <select
                  name="bhk"
                  value={formData.bhk}
                  onChange={handleChange}
                  className="w-full border p-2 rounded hover:shadow-md transition"
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
                  className="border p-2 rounded hover:shadow-md transition"
                />
                <input
                  type="number"
                  name="balconies"
                  placeholder="Balconies"
                  value={formData.balconies}
                  onChange={handleChange}
                  className="border p-2 rounded hover:shadow-md transition"
                />
                <input
                  type="number"
                  name="floorNo"
                  placeholder="Floor Number"
                  value={formData.floorNo}
                  onChange={handleChange}
                  className="border p-2 rounded hover:shadow-md transition"
                />
                <input
                  type="number"
                  name="totalFloors"
                  placeholder="Total Floors"
                  value={formData.totalFloors}
                  onChange={handleChange}
                  className="border p-2 rounded hover:shadow-md transition"
                />

                <select
                  name="facing"
                  value={formData.facing}
                  onChange={handleChange}
                  className="border p-2 rounded hover:shadow-md transition"
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
                  className="border p-2 rounded hover:shadow-md transition"
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
                      <label key={a} className="flex gap-2 items-center hover:text-cyan-500 transition">
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
                  className="md:col-span-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-blue-500 hover:to-cyan-500 text-white py-3 rounded shadow-md hover:shadow-lg transition-all"
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
