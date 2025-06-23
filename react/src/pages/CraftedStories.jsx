import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const stories = [
  {
    id: 1,
    image: '/insights.webp',
    tag: '#Insights',
    title: 'Why Choosing Pure Leather Over Fake Leather Matters',
    excerpt:
      'Understand the difference between genuine and synthetic leather, and why authenticity makes all the difference in quality and longevity.',
    link: '/crafted-stories/why-choose-leather',
  },
  {
    id: 2,
    image: '/culture.webp',
    tag: '#Culture',
    title: 'The Modern Leather Market in Nepal',
    excerpt:
      'Explore how Nepal’s leather industry is evolving—blending tradition with global trends to shape a new era of craftsmanship.',
    link: '/crafted-stories/leather-market-nepal',
  },
  {
    id: 3,
    image: '/behindthescenes.webp',
    tag: '#BehindTheScenes',
    title: 'The Leather Industry in Nepal: A Journey Through History',
    excerpt:
      'From ancient trade routes to modern ateliers, discover the story of leather in Nepal and its cultural significance.',
    link: '/crafted-stories/leather-history-nepal',
  },
];

const CraftedStories = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="bg-[#f9f5f0] text-gray-900">
      {/* Hero Section */}
      <div
        className="max-w-6xl mx-auto px-6 py-24 text-center"
        data-aos="fade-down"
      >
        <h1 className="text-5xl md:text-6xl font-serif tracking-tight mb-4">
          Crafted Stories
        </h1>
        <p className="text-lg md:text-xl font-light max-w-2xl mx-auto text-gray-700">
          A curated collection of insights, inspirations, and the soul behind every stitch.
        </p>
      </div>

      {/* Story Grid */}
      <div className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {stories.map((story) => (
            <article
              key={story.id}
              className="group"
              data-aos="fade-up"
              data-aos-delay={story.id * 100}
            >
              <Link to={story.link}>
                <div className="overflow-hidden rounded-lg shadow-sm">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="mt-4">
                  <span className="text-xs uppercase tracking-wider text-gray-500">
                    {story.tag}
                  </span>
                  <h2 className="text-xl font-serif text-gray-900 mt-1 group-hover:underline">
                    {story.title}
                  </h2>
                  <p className="text-sm text-gray-600 mt-2 line-clamp-3">
                    {story.excerpt}
                  </p>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CraftedStories;