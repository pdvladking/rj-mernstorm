import React from "react";

const AboutUs = () => {
  return (
    <div className="px-6 py-12 max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row items-center gap-10">
        <img
          src="/public/equipments.svg"
          alt="Behind the scenes"
          className="w-full md:w-1/2 rounded-xl shadow-lg"
        />
        <div className="md:w-1/2">
          <h1 className="text-3xl font-bold mb-4">Our Story</h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            From long nights and big dreams to fabric swatches and pixel grids—
            our journey started with a passion to build something timeless.
            We’re not just selling pieces. We’re weaving purpose into every interaction.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;