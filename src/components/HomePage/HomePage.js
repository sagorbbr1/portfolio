import React from "react";
import About from "../../components/About/About";
import Skills from "../../components/Skills/Skills";
import Home from "../../components/Home/Home";
import Services from "../../components/Services/Services";
import Certification from "../../components/Certification/Certification";
import Testimonials from "../../components/Testimonials/Testimonials";
import Contact from "../../components/Contact/Contact";
import Portfolio from "../../components/Portfolio/Portfolio";
const HomePage = () => {
  return (
    <main className="main">
      <Home />
      <About />
      <Skills />
      <Services />
      <Certification />
      <Portfolio />
      <Testimonials />
      <Contact />
    </main>
  );
};

export default HomePage;
