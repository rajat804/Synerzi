import { useState } from "react";

export default function AdminRegister() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  // Local + live backend support
  // const BASE_URL = import.meta.env.VITE_API_BASE_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = { fullName, email, password };

    try {
      const response = await fetch(
        "https://synerzi-backend.vercel.app/api/admin/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        alert(data.message || "Registration failed");
      } else {
        alert(data.message || "Admin registered successfully");
        setFullName("");
        setEmail("");
        setPassword("");
        window.location.href = "/admin-login";
      }
    } catch (err) {
      console.error(err);
      alert("Server error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="p-8 bg-white shadow-lg rounded-lg w-96 flex flex-col"
      >
        <h1 className="text-2xl font-bold mb-6 text-center">Register Admin</h1>

        <input
          type="text"
          placeholder="Full Name"
          className="mb-4 p-2 border rounded"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
        />

        <input
          type="email"
          placeholder="Email"
          className="mb-4 p-2 border rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="mb-6 p-2 border rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button
          type="submit"
          className={`py-2 text-white rounded ${
            loading ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700"
          } transition`}
          disabled={loading}
        >
          {loading ? "Registering..." : "Register"}
        </button>
      </form>
    </div>
  );
}
