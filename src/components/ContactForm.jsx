import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    city: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappNumber = "919896707022"; // country code ke sath

    const whatsappMessage = `
        Hello SRM 👋
        I am interested in your property.

        Name: ${formData.name}
        Phone: ${formData.phone}
        City: ${formData.city}
        Email: ${formData.email}
        Message: ${formData.message}
    `;

    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      whatsappMessage,
    )}`;

    window.open(whatsappURL, "_blank");

    // RESET FORM AFTER SEND
    setFormData({
      name: "",
      phone: "",
      city: "",
      email: "",
      message: "",
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-xl shadow-xl p-8 grid grid-cols-1 md:grid-cols-2 gap-5"
    >
      <input
        type="text"
        name="name"
        placeholder="Full Name"
        value={formData.name}
        onChange={handleChange}
        className="border rounded-md px-4 py-3 focus:ring-2 focus:ring-[#06B6D4]"
        required
      />

      <input
        type="tel"
        name="phone"
        placeholder="Mobile Number"
        value={formData.phone}
        onChange={handleChange}
        className="border rounded-md px-4 py-3 focus:ring-2 focus:ring-[#06B6D4]"
        required
      />

      <input
        type="text"
        name="city"
        placeholder="City"
        value={formData.city}
        onChange={handleChange}
        className="border rounded-md px-4 py-3 focus:ring-2 focus:ring-[#06B6D4]"
      />

      <input
        type="email"
        name="email"
        placeholder="Email Address"
        value={formData.email}
        onChange={handleChange}
        className="border rounded-md px-4 py-3 focus:ring-2 focus:ring-[#06B6D4]"
        required
      />

      <textarea
        name="message"
        placeholder="Your Message"
        rows="4"
        value={formData.message}
        onChange={handleChange}
        className="md:col-span-2 border rounded-md px-4 py-3 focus:ring-2 focus:ring-[#06B6D4]"
      ></textarea>

      <button
        type="submit"
        className="md:col-span-2 bg-gradient-to-r from-[#06B6D4] to-[#0EA5E9] text-white py-3 rounded-md font-semibold shadow hover:scale-[1.02] transition"
      >
        Send on WhatsApp
      </button>
    </form>
  );
};

export default ContactForm;
