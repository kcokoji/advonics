import React from "react";
import Navbar from "../components/navbar";
import HeroSection from "@/components/hero-section";
import Footer from "@/components/footer";
import AboutUs from "@/components/about-us";
import Services from "@/components/services";
import ContactUs from "@/components/contact-us";

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <AboutUs />
      <Services />
      <ContactUs />
      <Footer />
    </div>
  );
}
