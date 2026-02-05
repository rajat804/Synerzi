// src/pages/UserDashboard.jsx
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const UserDashboard = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (!userData) {
      navigate("/login");
    } else {
      setUser(JSON.parse(userData));
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div className="p-6 min-h-screen bg-gradient-to-r from-purple-50 to-indigo-50">
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
        Welcome {user?.fullName || "Guest"}
      </h1>

      <button
        onClick={handleLogout}
        className="
          px-5 py-2 
          bg-gradient-to-r from-purple-500 to-indigo-500
          text-white font-semibold rounded-lg
          shadow-md hover:scale-105 hover:from-indigo-500 hover:to-purple-500
          transition-transform duration-300
        "
      >
        Logout
      </button>
    </div>
  );
};

export default UserDashboard;
