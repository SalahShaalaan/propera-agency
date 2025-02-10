"use client";
import Link from "next/link";
import { useState } from "react";
import Heading from "../_components/shared/Heading";


const defaultFormState = {
  name: { value: "", error: "" },
  email: { value: "", error: "" },
  message: { value: "", error: "" },
};

export default function Contact () {
  const [formData, setFormData] = useState(defaultFormState);


  const validateForm = () => {
    let isValid = true;
    const newFormData = { ...formData };

    // Name validation
    if (!newFormData.name.value.trim()) {
      newFormData.name.error = "Name is required";
      isValid = false;
    } else {
      newFormData.name.error = "";
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!newFormData.email.value) {
      newFormData.email.error = "Email is required";
      isValid = false;
    } else if (!emailRegex.test(newFormData.email.value)) {
      newFormData.email.error = "Invalid email format";
      isValid = false;
    } else {
      newFormData.email.error = "";
    }

    // Message validation
    if (!newFormData.message.value.trim()) {
      newFormData.message.error = "Message is required";
      isValid = false;
    } else {
      newFormData.message.error = "";
    }

    setFormData(newFormData);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const { name, email, message } = formData;
    const subject = `Contact from ${name.value}`;
    const body = `Name: ${name.value}%0AEmail: ${email.value}%0AMessage: ${message.value}`;

    // Open email client
    window.location.href = `mailto:your@email.com?subject=${encodeURIComponent(
      subject
    )}&body=${body}`;
  };

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: { ...prev[field], value, error: "" },
    }));
  };

  return (
    <div className="max-w-2xl mx-auto py-6">
      <div className="container mx-auto">
      <Heading
          title="Contact Us"
          description="Get in touch with our expert team for personalized real estate assistance. Whether you're buying, selling, or just exploring options, we're here to help."
          titleColor="text-mainGold"
          descriptionColor="text-mainBlack"
          className="mb-12"
        />
      </div>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="Your Name"
            value={formData.name.value}
            onChange={(e) => handleInputChange("name", e.target.value)}
            className={`w-full p-3 bg-transparent border ${
              formData.name.error ? "border-red-500" : "border-[#B89650]"
            } rounded focus:outline-none focus:ring-2 focus:ring-[#B89650]`}
          />
          {formData.name.error && (
            <p className="text-red-500 text-sm mt-1">{formData.name.error}</p>
          )}
        </div>

        <div>
          <input
            type="email"
            placeholder="Your Email"
            value={formData.email.value}
            onChange={(e) => handleInputChange("email", e.target.value)}
            className={`w-full p-3 bg-transparent border ${
              formData.email.error ? "border-red-500" : "border-[#B89650]"
            } rounded focus:outline-none focus:ring-2 focus:ring-[#B89650]`}
          />
          {formData.email.error && (
            <p className="text-red-500 text-sm mt-1">{formData.email.error}</p>
          )}
        </div>

        <div>
          <textarea
            placeholder="Your Message"
            value={formData.message.value}
            onChange={(e) => handleInputChange("message", e.target.value)}
            rows={5}
            className={`w-full p-3 bg-transparent border ${
              formData.message.error ? "border-red-500" : "border-[#B89650]"
            } rounded focus:outline-none focus:ring-2 focus:ring-[#B89650]`}
          />
          {formData.message.error && (
            <p className="text-red-500 text-sm mt-1">
              {formData.message.error}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-[#B89650] text-white py-3 px-6 rounded hover:bg-[#A68547] transition-colors"
        >
          Send via Email
        </button>

        <Link
          href={`https://wa.me/+201064928120?text=Hello! I want to contact you about...`}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full bg-green-600 text-white py-3 px-6 rounded hover:bg-green-700 text-center"
        >
          Message via WhatsApp
        </Link>
      </form>
    </div>
  );
};
