import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../components/AuthComponent";

const UserDashboard = () => {
  const { user, token, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const BASE_API = import.meta.env.VITE_BASE_URL;

  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    } else {
      fetchMyProperties();
    }
  }, [user]);

  const fetchMyProperties = async () => {
    try {
      const res = await fetch(`${BASE_API}/api/properties/my-properties`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

       if (res.status === 401) {
      logout();          // context clear kare
      navigate("/login"); // login page bheje
      return;
    }
      const data = await res.json();
      if (!res.ok) throw new Error(data.message);

      setProperties(data.data);
    } catch (err) {
      alert("Failed to load properties");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete?")) return;

    try {
      const res = await fetch(`${BASE_API}/api/properties/user-delete/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!res.ok) throw new Error("Delete failed");

      setProperties((prev) => prev.filter((p) => p._id !== id));
    } catch (err) {
      alert("Delete failed");
    }
  };

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">
          Welcome {user?.fullName}
        </h1>

        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Logout
        </button>
      </div>

      {/* Content */}
      {loading ? (
        <p>Loading...</p>
      ) : properties.length === 0 ? (
        <p>No properties added yet.</p>
      ) : (
        <div className="overflow-x-auto bg-white shadow rounded">
          <table className="min-w-[2000px] w-full border text-sm">
            <thead className="bg-gray-200">
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
                <th className="border p-2">Approved</th>
                <th className="border p-2">Images</th>
                <th className="border p-2">Actions</th>
              </tr>
            </thead>

            <tbody>
              {properties.map((property, index) => (
                <tr key={property._id} className="border">
                  <td className="border p-2">{index + 1}</td>
                  <td className="border p-2">{property.title}</td>

                  <td className="border p-2 max-w-xs">
                    <div
                      dangerouslySetInnerHTML={{
                        __html:
                          property.description?.slice(0, 100) + "...",
                      }}
                    />
                  </td>

                  <td className="border p-2">₹ {property.price}</td>
                  <td className="border p-2">{property.priceLabel}</td>
                  <td className="border p-2">{property.category}</td>
                  <td className="border p-2">{property.purpose}</td>
                  <td className="border p-2">{property.status}</td>
                  <td className="border p-2">{property.city}</td>
                  <td className="border p-2">{property.location}</td>
                  <td className="border p-2">{property.address}</td>
                  <td className="border p-2">{property.pincode}</td>
                  <td className="border p-2">{property.country}</td>
                  <td className="border p-2">{property.size}</td>
                  <td className="border p-2">{property.facing}</td>
                  <td className="border p-2">{property.yearBuilt}</td>
                  <td className="border p-2">{property.builtUpArea}</td>
                  <td className="border p-2">{property.flooring}</td>
                  <td className="border p-2">{property.ownership}</td>
                  <td className="border p-2">{property.possession}</td>
                  <td className="border p-2">{property.structureType}</td>
                  <td className="border p-2">{property.totalFloors}</td>
                  <td className="border p-2">{property.roadWidth}</td>
                  <td className="border p-2">{property.openSides}</td>

                  <td className="border p-2">
                    {property.amenities?.length > 0
                      ? property.amenities.join(", ")
                      : "N/A"}
                  </td>

                  <td className="border p-2 text-center">
                    {property.isFeatured ? "Yes" : "No"}
                  </td>

                  <td className="border p-2 text-center">
                    {property.isLatest ? "Yes" : "No"}
                  </td>

                  <td className="border p-2 text-center">
                    {property.isApproved ? (
                      <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs">
                        Approved
                      </span>
                    ) : (
                      <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-xs">
                        Pending (24h)
                      </span>
                    )}
                  </td>

                  <td className="border p-2">
                    {property.images?.length > 0 ? (
                      <img
                        src={property.images[0]}
                        alt="property"
                        className="h-12 w-16 object-cover rounded"
                      />
                    ) : (
                      "No Image"
                    )}
                  </td>

                  <td className="border p-2 space-x-2">
                    <button
                      onClick={() =>
                        navigate(`/user-edit-property/${property._id}`)
                      }
                      className="bg-blue-500 text-white px-3 py-1 rounded text-xs"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() => handleDelete(property._id)}
                      className="bg-red-500 text-white px-3 py-1 rounded text-xs"
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
};

export default UserDashboard;