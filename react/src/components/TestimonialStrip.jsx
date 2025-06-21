import React from "react";

const testimonials = [
  {
    quote: "Absolutely love the quality. Every detail feels like it was made just for me.",
    name: "Aanya R.",
  },
  {
    quote: "I’ve never received so many compliments. This brand knows aesthetic.",
    name: "Ravi M.",
  },
  {
    quote: "Elegant, comfortable, and built to last. I’m already planning my next order.",
    name: "Simran K.",
  },
];

const TestimonialStrip = () => {
  return (
    <section className="bg-white dark:bg-black py-24 px-6 md:px-16">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-serif text-black dark:text-white mb-12">
          What Our Customers Say
        </h2>
        <div className="grid gap-12 md:grid-cols-3">
          {testimonials.map((t, index) => (
            <div key={index} className="text-left">
              <p className="italic text-neutral-700 dark:text-gray-300 mb-4">
                “{t.quote}”
              </p>
              <p className="text-sm font-semibold text-black dark:text-white">
                — {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialStrip;