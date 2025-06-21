import React from "react";
import Hero from "../components/Hero";
import FeaturedCollection from "../components/FeaturedCollection";
import NewsletterSignup from "../components/NewsletterSignup";
import ShopTheLook from "../components/ShopTheLook";
import TestimonialStrip from "../components/TestimonialStrip.jsx";

const HomePage = () => {
  return (
    <>
      <Hero />
      <FeaturedCollection />
      <TestimonialStrip />
      <NewsletterSignup />
      <ShopTheLook />
    </>
  );
};

export default HomePage;