import React from "react";

const NewsletterSignup = () => {
  return (
    <section className="bg-[#fdfaf6] dark:bg-black py-24 px-6 md:px-16">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-serif text-black dark:text-white mb-6">
          Stay in the Loop
        </h2>
        <p className="text-neutral-700 dark:text-gray-300 mb-8 text-lg">
          Be the first to know about new drops, insider exclusives, and more. No clutter—just essentials.
        </p>

        <form className="flex flex-col md:flex-row gap-4 justify-center">
          <input
            type="email"
            placeholder="Your email address"
            className="w-full md:w-2/3 px-6 py-3 border border-neutral-300 dark:border-gray-700 text-black dark:text-white bg-white dark:bg-neutral-900 focus:outline-none"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-black text-white hover:bg-neutral-800 transition"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default NewsletterSignup;