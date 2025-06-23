import React from 'react';
import { useNavigate } from 'react-router-dom';

const SingleStory3 = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-[#fdfaf7] text-gray-900 font-serif">
      {/* Hero */}
      <div className="relative w-full h-[60vh] overflow-hidden">
        <img
          src="/equipments.webp"
          alt="The Leather Industry in Nepal"
          className="w-full h-full object-cover brightness-90"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-center items-center text-center text-white px-4">
          <span className="text-sm tracking-widest uppercase">#BehindTheScenes</span>
          <h1 className="text-4xl md:text-5xl font-semibold mt-2">
            The Leather Industry in Nepal
          </h1>
          <p className="text-sm mt-2 opacity-75">August 13, 2024 · by Rawhide</p>
        </div>
      </div>

      {/* Body */}
      <div className="max-w-3xl mx-auto px-6 py-16 leading-relaxed text-[1.07rem] text-gray-800 space-y-8">
        <p>
          Nestled in the Himalayas, Nepal’s leather industry traces a lineage of craftsmanship woven into its cultural fabric. More than commerce, it’s a story of heritage.
        </p>

        <h2 className="text-xl font-semibold">A Historical Perspective</h2>
        <p>
          Leatherwork in Nepal dates back centuries. Traditional artisans crafted goods from hides using natural, plant-based tannins—producing shoes, belts, ritual items, and clothing passed down through generations.
        </p>

        <h2 className="text-xl font-semibold">The Evolution of the Industry</h2>
        <p>
          By the 20th century, industrialization brought new tools and global influence. Post-WWII factories and the formation of the Nepal Leather Industry Association in the late 1980s marked major milestones, opening new global channels.
        </p>

        <h2 className="text-xl font-semibold">The Current Landscape</h2>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Product Diversity:</strong> From bags to jackets, Nepalese leather goods now meet both local demand and export standards.</li>
          <li><strong>Sustainable Practices:</strong> A shift toward eco-conscious tanning and ethical production is on the rise.</li>
          <li><strong>Export Growth:</strong> Countries across Europe, Asia, and North America are turning to Nepal for authentic, handcrafted goods.</li>
          <li><strong>Challenges:</strong> Quality control, tech gaps, and environmental issues still need addressing.</li>
          <li><strong>Support Systems:</strong> Institutional aid, training programs, and financial backing are beginning to empower industry-wide transformation.</li>
        </ul>

        <h2 className="text-xl font-semibold">Looking Ahead</h2>
        <p>
          Nepal stands on the edge of a leather renaissance. By preserving tradition while adopting innovation, the industry has the potential to not just thrive—but redefine itself on the global stage.
        </p>

        <p className="italic text-gray-700">
          At Rawhide, we see leather as more than a material—it’s a living archive of heritage, skill, and intention.
        </p>
      </div>

      {/* Back link */}
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

export default SingleStory3;