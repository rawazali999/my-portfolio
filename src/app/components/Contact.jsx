"use client";
import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: formData.fullName,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (response.ok) {
        alert("Email sent successfully!");
      } else {
        alert("Failed to send email");
      }
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  return (
    <section
      id="contact"
      className="flex w-full flex-col items-center justify-center"
    >
      <div className="m-4 flex w-full flex-col rounded-lg px-6 shadow-lg sm:w-3/4 lg:w-1/2 ">
        <h2 className="mb-6 text-center text-xl font-bold leading-tight lg:text-4xl ">
          Contact Me ! 📧
        </h2>
        <form onSubmit={handleSubmit}>
          <div>
            <span className="text-sm font-bold uppercase ">Full Name</span>
            <input
              className="focus:shadow-outline mt-2 w-full rounded-lg bg-gray-200 p-3 text-gray-900 focus:outline-none"
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mt-8">
            <span className="text-sm font-bold uppercase ">Email</span>
            <input
              className="focus:shadow-outline mt-2 w-full rounded-lg bg-gray-200 p-3 text-gray-900 focus:outline-none"
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mt-8">
            <span className="text-sm font-bold uppercase ">Message</span>
            <textarea
              className="focus:shadow-outline mt-2 h-32 w-full rounded-lg bg-gray-200 p-3 text-gray-900 focus:outline-none"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mt-8">
            <button
              type="submit"
              className="focus:shadow-outline my-2 w-full rounded-lg bg-gradient-to-br from-sky-500 to-cyan-400 p-3 text-sm font-bold uppercase tracking-wide text-gray-100 focus:outline-none"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
