"use client";

import { useState } from "react";


import AboutSection from "../components/portifolio/AboutSection";
import ContactSection from "../components/portifolio/ContactSection";
import Footer from "../components/portifolio/Footer";
import StackSection from "../components/portifolio/Stacksection";
import ProjectsSection from "../components/portifolio/Projectsection";
import HeroSection from "../components/portifolio/HeroSection";
import MobileMenu from "../components/portifolio/MobileMenu";
import Navbar from "../components/portifolio/Navbar";

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth", block: "center" });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen text-white">
      <Navbar
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        scrollToSection={scrollToSection}
      />

      <MobileMenu
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        scrollToSection={scrollToSection}
      />

      <HeroSection />
      <StackSection />
      <ProjectsSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
}