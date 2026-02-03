// src/pages/GoogleSuccess.jsx
import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const GoogleSuccess = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const token = params.get("token");
    const user = params.get("user");

    if (token && user) {
      localStorage.setItem("token", token);
      localStorage.setItem("user", user); // already JSON string
      navigate("/dashboard");
    } else {
      navigate("/login");
    }
  }, [location, navigate]);

  return <div className="p-6 text-center">Logging in with Google...</div>;
};

export default GoogleSuccess;
