import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ShowListings() {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchProperties();
  }, []);

  const fetchProperties = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await fetch(
        "https://vercel-synerzi-sbckend.vercel.app/api/properties",
        {
          headers: { Authorization: `Bearer ${token}` },
        },
      );

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
    if (!window.confirm("Are you sure you want to delete this property?"))
      return;

    try {
      const token = localStorage.getItem("token");

      const res = await fetch(
        `https://vercel-synerzi-sbckend.vercel.app/api/properties/${id}`,
        {
          method: "DELETE",
          headers: { Authorization: `Bearer ${token}` },
        },
      );

      const data = await res.json();

      if (!res.ok) return alert(data.message || "Delete failed");

      setProperties((prev) => prev.filter((p) => p._id !== id));
      alert("Property deleted successfully ✅");
    } catch (err) {
      console.error(err);
      alert("Server error while deleting property");
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
                <th className="border p-2">Category</th>
                <th className="border p-2">Purpose</th>
                <th className="border p-2">Price</th>
                <th className="border p-2">City</th>
                <th className="border p-2">State</th>
                <th className="border p-2">Location</th>
                <th className="border p-2">Area (sq ft)</th>
                <th className="border p-2">BHK</th>
                <th className="border p-2">Bathrooms</th>
                <th className="border p-2">Balconies</th>
                <th className="border p-2">Floor No</th>
                <th className="border p-2">Total Floors</th>
                <th className="border p-2">Facing</th>
                <th className="border p-2">Parking</th>
                <th className="border p-2">Description</th>
                <th className="border p-2">Amenities</th>
                <th className="border p-2">Images</th>
                <th className="border p-2">Actions</th>
              </tr>
            </thead>

            <tbody>
              {properties.map((p, i) => (
                <tr key={p._id} className="hover:bg-gray-50">
                  <td className="border p-2 text-center">{i + 1}</td>
                  <td className="border p-2">{p.title}</td>
                  <td className="border p-2">{p.category}</td>
                  <td className="border p-2">{p.purpose || "—"}</td>
                  <td className="border p-2">{p.price}</td>
                  <td className="border p-2">{p.city}</td>
                  <td className="border p-2">{p.state}</td>
                  <td className="border p-2">{p.location || "—"}</td>
                  <td className="border p-2">{p.area}</td>
                  <td className="border p-2">{p.bhk}</td>
                  <td className="border p-2">{p.bathrooms}</td>
                  <td className="border p-2">{p.balconies}</td>
                  <td className="border p-2">{p.floorNo}</td>
                  <td className="border p-2">{p.totalFloors}</td>
                  <td className="border p-2">{p.facing || "—"}</td>
                  <td className="border p-2">{p.parking || "—"}</td>
                  <td className="border p-2">{p.description || "—"}</td>
                  <td className="border p-2">
                    {p.amenities?.join(", ") || "—"}
                  </td>
                  <td className="border p-2">
                    <div className="flex flex-wrap gap-2">
                      {Array.isArray(p.images) &&
                        p.images.filter(Boolean).map((img, idx) => {
                          const imageUrl = img.startsWith("http")
                            ? img // ✅ Cloudinary
                            : `https://vercel-synerzi-sbckend.vercel.app/${img.startsWith("uploads") ? img : `uploads/${img}`}`;

                          return (
                            <img
                              key={idx}
                              src={imageUrl}
                              className="w-12 h-12 object-cover rounded border"
                              alt={`property-${idx}`}
                            />
                          );
                        })}
                    </div>
                  </td>
                  <td className="border p-2 flex flex-wrap gap-2 justify-center">
                    <Link
                      to={`/admin-edit-property/${p._id}`}
                      className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => handleDelete(p._id)}
                      className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 transition"
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
