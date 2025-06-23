import React from "react";

const featuredItems = [
  {
    id: 1,
    title: "The Artisan Satchel",
    image: "/featured-1.webp",
    badge: "New",
  },
  {
    id: 2,
    title: "Heritage Wallet",
    image: "/featured-2.webp",
    badge: "Limited",
  },
  {
    id: 3,
    title: "Classic Belt",
    image: "/featured-3.webp",
    badge: "Bestseller",
  },
];

const FeaturedCollection = () => {
  return (
    <section className="bg-[#fdfaf6] dark:bg-black py-24 px-6 md:px-16">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-serif text-black dark:text-white mb-4">
          Featured Drop
        </h2>
        <p className="text-neutral-700 dark:text-gray-300 text-lg">
          A curated selection of our most loved pieces—crafted to stand out.
        </p>
      </div>

      <div className="grid gap-12 md:grid-cols-3">
        {featuredItems.map((item) => (
          <div key={item.id} className="group relative overflow-hidden">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-96 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute top-4 left-4 bg-black text-white text-xs uppercase px-3 py-1 tracking-widest">
              {item.badge}
            </div>
            <div className="mt-4 text-center">
              <h3 className="text-xl font-medium text-black dark:text-white">
                {item.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedCollection;