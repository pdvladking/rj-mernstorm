import React from "react";
import { useNavigate } from "react-router-dom";

const trends = [
  {
    title: "Urban Nomad",
    description: "Rawhide leather meets street silhouettes.",
    image: "/trends-1.webp",
    path: "/shop?trend=urban-nomad"
  },
  {
    title: "Earthbound Neutrals",
    description: "Minimalist tan and stone tones.",
    image: "/product-3.webp",
    path: "/shop?trend=neutrals"
  },
  {
    title: "Ritual Craft",
    description: "Hand-stitched pieces inspired by tradition.",
    image: "/product-9.webp",
    path: "/shop?trend=ritual-craft"
  }
];

const TrendsPage = () => {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen bg-[#fefcf8] px-6 py-16 text-gray-800 font-serif">
      {/* Hero */}
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">This Season's Trends</h1>
        <p className="text-lg text-gray-600">
          Crafted with intention, worn with story. Explore the tones, textures, and silhouettes shaping the season ahead.
        </p>
      </div>

      {/* Trend Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {trends.map(({ title, description, image, path }) => (
          <div
            key={title}
            onClick={() => navigate(path)}
            className="group cursor-pointer overflow-hidden rounded shadow hover:shadow-md transition duration-300"
          >
            <img
              src={image}
              alt={title}
              className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
            <div className="p-4 bg-white">
              <h2 className="text-xl font-semibold mb-1 group-hover:underline">{title}</h2>
              <p className="text-sm text-gray-500">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrendsPage;