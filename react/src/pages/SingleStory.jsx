import React from 'react';
import { useNavigate } from 'react-router-dom';

const SingleStory = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-[#fdfaf7] text-gray-900 font-serif">
      {/* Hero Image */}
      <div className="relative w-full h-[60vh] overflow-hidden">
        <img
          src="/product-3.webp"
          alt="Pure Leather vs Fake"
          className="w-full h-full object-cover brightness-90"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col items-center justify-center text-center px-4 text-white">
          <span className="text-sm tracking-widest uppercase mb-1">#Insights</span>
          <h1 className="text-4xl md:text-5xl font-semibold">
            Why Choosing Pure Leather Over Fake Leather Matters
          </h1>
          <p className="text-sm mt-2 opacity-75">August 13, 2024 · by Rawhide</p>
        </div>
      </div>

      {/* Body */}
      <div className="max-w-3xl mx-auto px-6 py-16 leading-relaxed space-y-8 text-[1.07rem] text-gray-800">
        <p>
          When selecting leather products, many of us face the age-old dilemma: pure or synthetic? While both have their place, understanding the unmatched value of genuine leather can completely shift your mindset.
        </p>

        <h2 className="text-xl font-semibold">The Benefits of Pure Leather</h2>

        <p>
          <strong className="font-semibold">Durability and Longevity:</strong> Properly cared-for leather can last decades, aging gracefully with a rich patina that tells your story.
        </p>

        <p>
          <strong className="font-semibold">Comfort & Flexibility:</strong> Genuine leather breathes, adapts, and feels better against the skin—whether it’s a jacket, bag, or belt.
        </p>

        <p>
          <strong className="font-semibold">Environmental Awareness:</strong> While both natural and synthetic leathers have environmental footprints, responsibly sourced leather can be the more sustainable choice.
        </p>

        <p>
          <strong className="font-semibold">Visual Appeal:</strong> Real leather’s texture, scent, and evolving beauty simply can’t be faked.
        </p>

        <p>
          <strong className="font-semibold">Resale Value:</strong> Premium leather pieces tend to hold their value—making them both a style and financial investment.
        </p>

        <h2 className="text-xl font-semibold mt-10">How to Identify Genuine Leather</h2>

        <ul className="list-disc list-inside space-y-2">
          <li><strong>Check the label:</strong> Look for phrases like “full-grain,” “top-grain,” or “genuine leather.”</li>
          <li><strong>Use your senses:</strong> Real leather smells earthy, not chemical. It feels organic, imperfect, alive.</li>
          <li><strong>Inspect the stitching:</strong> Craftsmanship reveals authenticity. Messy seams? Likely fake.</li>
          <li><strong>Stretch and observe:</strong> Genuine leather stretches without deforming. Variations = real.</li>
          <li><strong>Consider the price:</strong> If it seems suspiciously cheap, it probably is.</li>
          <li><strong>Ask the seller:</strong> A reputable source will gladly explain the material’s origin and process.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-10">Final Thoughts</h2>
        <p>
          Choosing pure leather is about honoring durability, design, and craftsmanship. And when you know what to look for, you’re not just making a purchase—you’re making a legacy.
        </p>

        <p className="italic text-gray-700">
          For premium genuine leather that speaks for itself, explore our collection at Rawhide Leathers. Let authenticity be your signature.
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

export default SingleStory;