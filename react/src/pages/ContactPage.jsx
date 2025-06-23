// src/pages/ContactPage.jsx

import React, { useState } from "react";

const ContactPage = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Contact Form Submitted:", form);
    setSubmitted(true);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6 text-center">Contact Me</h2>

        {submitted && (
          <p className="bg-green-100 text-green-700 px-4 py-2 rounded mb-4 text-center">
            Thanks for reaching out! I’ll get back to you soon.
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="w-full px-4 py-2 border rounded"
          />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            className="w-full px-4 py-2 border rounded"
          />
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your Message"
            required
            rows="5"
            className="w-full px-4 py-2 border rounded resize-none"
          />

          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition"
          >
            Send Message
          </button>
        </form>

        <div className="mt-8 text-center text-gray-600">
          <p> Let’s connect:</p>
          <div className="mt-2 flex justify-center gap-4">
            <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer" className="underline">
              GitHub
            </a>
            <a href="https://linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer" className="underline">
              LinkedIn
            </a>
            <a href="mailto:youremail@example.com" className="underline">Email</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;