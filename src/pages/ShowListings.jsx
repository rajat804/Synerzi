import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ShowListings() {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const BASE_API = import.meta.env.VITE_BASE_URL;
  useEffect(() => {
    fetchProperties();
  }, []);

  const fetchProperties = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await fetch(`${BASE_API}/api/properties`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (!res.ok) throw new Error("Failed to fetch properties");

      const data = await res.json();
      setProperties(data);
    } catch (err) {
      console.error(err);
      setError("Failed to load properties from server");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure?")) return;
    try {
      const res = await fetch(`${BASE_API}/api/properties/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      const data = await res.json();
      if (!res.ok) return alert(data.message || "Delete failed");
      alert("Property deleted ✅");
      setProperties((prev) => prev.filter((p) => p._id !== id));
    } catch (err) {
      console.error(err);
      alert("Server error!");
    }
  };

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-700">
        Loading properties...
      </div>
    );

  if (error)
    return (
      <div className="min-h-screen flex items-center justify-center text-red-600">
        {error}
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-3">
        <div>
          <h1 className="text-2xl font-bold">All Property Listings</h1>
          <Link
            to="/admin/add-listing"
            className="inline-block mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            ➕ Add Listing
          </Link>
        </div>
        <span className="font-medium">Total: {properties.length}</span>
      </div>

      {properties.length === 0 ? (
        <p className="text-center text-gray-600 mt-6">No properties found</p>
      ) : (
        <div className="overflow-x-auto bg-white shadow rounded border">
          <table className="min-w-[1500px] w-full text-sm border-collapse">
            <thead className="bg-gray-100 text-gray-700">
              <tr>
                <th className="border p-2">#</th>
                <th className="border p-2">Title</th>
                <th className="border p-2">Description</th>
                <th className="border p-2">Price</th>
                <th className="border p-2">Price Label</th>
                <th className="border p-2">Category</th>
                <th className="border p-2">Purpose</th>
                <th className="border p-2">Status</th>
                <th className="border p-2">City</th>
                <th className="border p-2">Location</th>
                <th className="border p-2">Address</th>
                <th className="border p-2">Pincode</th>
                <th className="border p-2">Country</th>
                <th className="border p-2">Size</th>
                <th className="border p-2">Facing</th>
                <th className="border p-2">Year Built</th>
                <th className="border p-2">Built Up Area</th>
                <th className="border p-2">Flooring</th>
                <th className="border p-2">Ownership</th>
                <th className="border p-2">Possession</th>
                <th className="border p-2">Structure Type</th>
                <th className="border p-2">Total Floors</th>
                <th className="border p-2">Road Width</th>
                <th className="border p-2">Open Sides</th>
                <th className="border p-2">Amenities</th>
                <th className="border p-2">Featured</th>
                <th className="border p-2">Latest</th>
                <th className="border p-2">Images</th>
                <th className="border p-2">Actions</th>
              </tr>
            </thead>

            <tbody>
              {properties.map((p, i) => (
                <tr key={p._id} className="hover:bg-gray-50">
                  <td className="border p-2 text-center">{i + 1}</td>

                  <td className="border p-2">{p.title}</td>
                  <td className="border p-2 max-w-[200px] truncate">
                    {p.description || "—"}
                  </td>
                  <td className="border p-2">{p.price || "—"}</td>
                  <td className="border p-2">{p.priceLabel || "—"}</td>
                  <td className="border p-2">{p.category || "—"}</td>
                  <td className="border p-2">{p.purpose || "—"}</td>
                  <td className="border p-2">{p.status || "—"}</td>
                  <td className="border p-2">{p.city || "—"}</td>
                  <td className="border p-2">{p.location || "—"}</td>
                  <td className="border p-2">{p.address || "—"}</td>
                  <td className="border p-2">{p.pincode || "—"}</td>
                  <td className="border p-2">{p.country || "India"}</td>
                  <td className="border p-2">{p.size || "—"}</td>
                  <td className="border p-2">{p.facing || "—"}</td>
                  <td className="border p-2">{p.yearBuilt || "—"}</td>
                  <td className="border p-2">{p.builtUpArea || "—"}</td>
                  <td className="border p-2">{p.flooring || "—"}</td>
                  <td className="border p-2">{p.ownership || "—"}</td>
                  <td className="border p-2">{p.possession || "—"}</td>
                  <td className="border p-2">{p.structureType || "—"}</td>
                  <td className="border p-2">{p.totalFloors || "—"}</td>
                  <td className="border p-2">{p.roadWidth || "—"}</td>
                  <td className="border p-2">{p.openSides || "—"}</td>
                  <td className="border p-2">
                    {p.amenities?.join(", ") || "—"}
                  </td>
                  <td className="border p-2 text-center">
                    {p.isFeatured ? "Yes" : "No"}
                  </td>
                  <td className="border p-2 text-center">
                    {p.isLatest ? "Yes" : "No"}
                  </td>
                  <td className="border p-2">
                    <div className="flex flex-wrap gap-2">
                      {Array.isArray(p.images) && p.images.length > 0 ? (
                        p.images.map((img, idx) => (
                          <img
                            key={idx}
                            src={img}
                            className="w-12 h-12 object-cover rounded border"
                            alt="property"
                          />
                        ))
                      ) : (
                        <span>—</span>
                      )}
                    </div>
                  </td>
                  <td className="border p-2 flex gap-2 justify-center">
                    <Link
                      to={`/admin-edit-property/${p._id}`}
                      className="px-3 py-1 bg-blue-600 text-white rounded"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => handleDelete(p._id)}
                      className="bg-red-600 text-white px-3 py-1 rounded"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
