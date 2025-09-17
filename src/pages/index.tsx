import React, { useState } from "react";

import Link from "next/link";

import Home from "@/components/home/Home";
import About from "@/components/about/About";
import Navbar from "@/components/navbar/Navbar";
import Skills from "@/components/skills/Skills";
// import Contact from "@/components/contact/Contact";
import Sidebar from "@/components/sidebar/Sidebar";
import Services from "@/components/services/Services";
// import Portfolio from "@/components/portfolio/Portfolio";
// import Testimonial from "@/components/testimonial/Testimonial";

const MyPortfolio = () => {

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div>
      <Navbar
        homeClick={() => scrollToSection("home")}
        aboutClick={() => scrollToSection("about")}
        skillsClick={() => scrollToSection("skills")}
        sidebarOpenClick={() => setIsSidebarOpen(true)}
        servicesClick={() => scrollToSection("services")}
        portfolioClick={() => scrollToSection("portfolio")}
      />
      <Sidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        homeClick={() => { scrollToSection("home"); setIsSidebarOpen(false); }}
        aboutClick={() => { scrollToSection("about"); setIsSidebarOpen(false); }}
        skillsClick={() => { scrollToSection("skills"); setIsSidebarOpen(false); }}
        servicesClick={() => { scrollToSection("services"); setIsSidebarOpen(false); }}
        portfolioClick={() => { scrollToSection("portfolio"); setIsSidebarOpen(false); }}
      />
      <div className="bg-[#1D1D1D]">
        <div id="home" className="scroll-mt-[110px]">
          <Home contactClick={() => scrollToSection("contact")} />
        </div>
        <div id="about" className="scroll-mt-[110px]">
          <About />
        </div>
        <div id="services" className="scroll-mt-[110px]">
          <Services/>
        </div>
        <div id="skills">
          <Skills/>
        </div>
        <div id="portfolio">
          {/* <Portfolio/> */}
        </div>
        <div id="contact">
          {/* <Contact/> */}
        </div>
      </div>
    </div>
  );
};

export default MyPortfolio;