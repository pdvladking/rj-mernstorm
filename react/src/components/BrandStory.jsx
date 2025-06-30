import React from "react";

const BrandStory = () => {
  return (
    <section className="bg-white dark:bg-black pt-12 pb-24 px-6 md:px-16">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        <div className="w-60 md:w-72 md:max-w-xl mx-auto">
          <img
            src="/public/bubbles.svg"
            alt="Leather artisan at work"
            className="w-full h-auto object-contain"
          />
        </div>


        <div>
          <h2 className="text-3xl md:text-5xl font-serif mb-6 text-black dark:text-white">
            Where Craft Meets Legacy
          </h2>
          <p className="text-neutral-700 dark:text-gray-300 text-lg leading-relaxed mb-6">
            In a world of fast fashion and fleeting trends, we return to the roots—where every cut of leather, every stitch, and every burnish is a quiet act of devotion. Our story begins not in a factory, but in the hands of artisans who believe in making things that last.
          </p>
          <p className="text-neutral-700 dark:text-gray-300 text-lg leading-relaxed">
            We don’t just craft products—we preserve tradition. Each piece is a chapter in a legacy that values patience, precision, and purpose. This is leather, the way it was meant to be.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;