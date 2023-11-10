import React from "react";
import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import OurServices from "../../components/OurServices";
import Testimonial from "../../components/Testimonial";
import WhyUs from "../../components/WhyUs";
import FAQ from "../../components/FAQ";
import Footer from "../../components/Footer";

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <OurServices />
      <WhyUs />
      <Testimonial />
      <FAQ />
      <Footer />
    </>
  );
};

export default LandingPage;
