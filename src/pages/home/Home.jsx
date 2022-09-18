import React from "react";
import Topbar from "../../components/topbar/Topbar";
import "./home.css";
import Hero from "../../components/hero/Hero";
import Services from "../../components/services/Services";
import About from "../../components/about/About";
import Contact from "../../components/contact/Contact";
import Footer from "../../components/footer/Footer";

const Home = () => {
  return (
    <div>
      <Topbar />
      <Hero />
      <Services />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
