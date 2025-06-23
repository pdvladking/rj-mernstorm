import React from 'react';
import { useNavigate } from 'react-router-dom';

const SingleStory = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-[#fdfaf7] text-gray-900 font-serif">
      {/* Hero */}
      <div className="relative w-full h-[60vh] overflow-hidden">
        <img
          src="/look-1.webp"
          alt="The Modern Leather Market in Nepal"
          className="w-full h-full object-cover brightness-90"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-center items-center text-center text-white px-4">
          <span className="text-sm tracking-widest uppercase">#Culture</span>
          <h1 className="text-4xl md:text-5xl font-semibold mt-2">
            The Modern Leather Market in Nepal
          </h1>
          <p className="text-sm mt-2 opacity-75">August 13, 2024 · by Rawhide</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 py-16 space-y-8 leading-relaxed text-[1.07rem] text-gray-800">
        <p>
          Nepal’s leather market has evolved far beyond its traditional roots—embracing modern practices while staying grounded in artisanal heritage.
        </p>

        <h2 className="text-xl font-semibold">Current Trends in the Leather Market</h2>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Diversification of Products:</strong> From classic belts to modern bags and décor, Nepalese leather now speaks to global tastes.</li>
          <li><strong>Sustainability & Eco-Friendliness:</strong> Vegetable tanning, ethical practices, and greener alternatives are reshaping industry norms.</li>
          <li><strong>Technological Integration:</strong> Automation, digital design tools, and precision equipment enhance quality and efficiency.</li>
          <li><strong>Growing Export Market:</strong> Europe, North America, and Asia are increasingly drawn to handcrafted Nepalese goods.</li>
          <li><strong>Craftsmanship as a Core Value:</strong> Despite industrialization, fine detailing and durability remain central to the Nepalese identity.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-10">Opportunities Ahead</h2>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>International Expansion:</strong> There’s untapped potential in emerging markets hungry for artisanal authenticity.</li>
          <li><strong>Brand Identity:</strong> Building distinct, story-driven brands can elevate Nepalese leather to luxury status.</li>
          <li><strong>Tourist Appeal:</strong> Souvenirs with soul—leather that captures place and tradition.</li>
          <li><strong>Government Support:</strong> With the right infrastructure and policy push, the sector can scale sustainably.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-10">Ongoing Challenges</h2>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Environmental Risks:</strong> Sustainable transformation is still in motion and needs acceleration.</li>
          <li><strong>Quality Control:</strong> Small producers must standardize without losing their handmade essence.</li>
          <li><strong>Global Competition:</strong> Nepal must differentiate through design and story.</li>
          <li><strong>Skill Gap:</strong> A new generation of craftsmen trained in both tradition and tech is essential.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-10">Looking Forward</h2>
        <p>
          The future of Nepal’s leather market is stitched with promise. With every hide crafted and every stitch perfected, the industry carves out a global identity steeped in care, craft, and culture.
        </p>

        <p className="italic text-gray-700">
          At Rawhide, we believe in bridging tradition and innovation—offering pieces that don’t just carry belongings, but carry stories.
        </p>
      </div>

      {/* Back Link */}
      <div className="max-w-3xl mx-auto px-6 pb-24">
        <button
          onClick={() => navigate(-1)}
          className="text-sm text-amber-800 hover:underline font-medium"
        >
          ← Back to Crafted Stories
        </button>
      </div>
    </section>
  );
};

export default SingleStory;