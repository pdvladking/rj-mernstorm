import React from "react";

const products = [
  {
    id: 1,
    name: "Heritage Satchel",
    price: "$249",
    image: "/public/look.svg",
    badge: "Bestseller",
  },
  {
    id: 2,
    name: "Signature Bifold Wallet",
    price: "$89",
    image: "/public/look2.svg",
  },
  {
    id: 3,
    name: "Sculpted Leather Belt",
    price: "$79",
    image: "/public/p2.svg",
    badge: "New",
  },
  {
    id: 4,
    name: "Legacy Travel Duffle",
    price: "$329",
    image: "/public/p1.svg",
  },
];

const ProductGrid = () => {
  return (
    <section className="bg-neutral-100 dark:bg-black py-24 px-6 md:px-16">

      <h2 className="text-3xl md:text-5xl font-serif text-center mb-6 text-black dark:text-white">
        Crafted Icons
      </h2>
      <p className="text-center text-neutral-700 dark:text-gray-400 max-w-2xl mx-auto mb-16 text-lg">
        A curated selection of our most iconic pieces—each one a testament to
        timeless design and enduring craftsmanship.
      </p>


      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {products.map((product) => (
          <div
            key={product.id}
            className="group relative bg-white dark:bg-neutral-900 rounded shadow hover:shadow-xl transition overflow-hidden"
          >
            {product.badge && (
              <span className="absolute top-4 left-4 bg-black text-white text-xs uppercase px-3 py-1 rounded-full tracking-wide z-10">
                {product.badge}
              </span>
            )}
            <div className="overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300 ease-in-out"
              />
            </div>
            <div className="p-5 flex flex-col gap-2">
              <h3 className="text-lg font-medium text-black dark:text-white">
                {product.name}
              </h3>
              <p className="text-neutral-600 dark:text-gray-400">{product.price}</p>
              <button className="mt-auto w-full py-2 px-4 bg-black text-white dark:bg-white dark:text-black rounded hover:opacity-90 transition">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;