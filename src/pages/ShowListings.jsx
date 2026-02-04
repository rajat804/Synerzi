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
      const res = await fetch("https://synerzi-backend.vercel.app/api/properties");
      if (!res.ok) throw new Error("Failed to fetch");

      const data = await res.json();
      setProperties(data);
    } catch (err) {
      console.error(err);
      setError("Failed to load properties");
    } finally {
      setLoading(false);
    }
  };

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center text-lg">
        Loading properties...
      </div>
    );

  if (error)
    return (
      <div className="min-h-screen flex items-center justify-center text-red-600">
        {error}
      </div>
    );

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this property?")) return;

    try {
      const token = localStorage.getItem("token");

      const res = await fetch(`https://synerzi-backend.vercel.app/api/properties/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message || "Delete failed");
        return;
      }

      alert("Property deleted ✅");
      setProperties((prev) => prev.filter((p) => p._id !== id));
    } catch (err) {
      alert("Server error");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold">All Property Listings</h1>
          <br />
          <Link
            to={"/admin-dashboard"}
            className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 my-5"
          >
            Add Listing
          </Link>
        </div>
        <span className="text-gray-600">Total: {properties.length}</span>
      </div>

      {properties.length === 0 ? (
        <p className="text-center text-gray-600">No properties found</p>
      ) : (
        <div className="overflow-x-auto bg-white shadow rounded">
          <table className="min-w-[1200px] w-full text-sm border">
            <thead className="bg-gray-100">
              <tr>
                <th className="border p-2">#</th>
                <th className="border p-2">Title</th>
                <th className="border p-2">Price</th>
                <th className="border p-2">Type</th>
                <th className="border p-2">Category</th>
                <th className="border p-2">State</th>
                <th className="border p-2">City</th>
                <th className="border p-2">BHK</th>
                <th className="border p-2">Bathrooms</th>
                <th className="border p-2">Balconies</th>
                <th className="border p-2">Floor</th>
                <th className="border p-2">Facing</th>
                <th className="border p-2">Amenities</th>
                <th className="border p-2">Images</th>
                <th className="border p-2">Actions</th>
              </tr>
            </thead>

            <tbody>
              {properties.map((p, i) => (
                <tr key={p._id || i} className="text-center">
                  <td className="border p-2">{i + 1}</td>
                  <td className="border p-2">{p.title}</td>
                  <td className="border p-2">{p.price}</td>
                  <td className="border p-2">{p.type}</td>
                  <td className="border p-2">{p.category}</td>
                  <td className="border p-2">{p.state}</td>
                  <td className="border p-2">{p.city}</td>
                  <td className="border p-2">{p.bhk}</td>
                  <td className="border p-2">{p.bathrooms}</td>
                  <td className="border p-2">{p.balconies}</td>
                  <td className="border p-2">{p.floorNumber}</td>
                  <td className="border p-2">{p.facing}</td>
                  <td className="border p-2 max-w-xs">
                    {p.amenities?.length ? p.amenities.join(", ") : "—"}
                  </td>

                  <td className="border p-2">
                    <div className="flex gap-2 justify-center flex-wrap">
                      {p.images?.length ? (
                        p.images.map((img, idx) => (
                          <img
                            key={idx}
                            src={`https://synerzi-backend.vercel.app/${img}`}
                            alt="property"
                            className="w-12 h-12 rounded object-cover border"
                          />
                        ))
                      ) : (
                        <span className="text-gray-400">No Image</span>
                      )}
                    </div>
                  </td>

                  <td className="border p-2">
                    <div className="flex gap-2 justify-center flex-wrap">
                      <Link
                        to={`/admin-edit-property/${p._id}`}
                        className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
                      >
                        Edit
                      </Link>
                      <button
                        onClick={() => handleDelete(p._id)}
                        className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
                      >
                        Delete
                      </button>
                      <Link
                        to="/admin-dashboard"
                        className="px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700"
                      >
                        Add
                      </Link>
                    </div>
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
