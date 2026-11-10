import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import PoetGrid from "../components/PoetGrid";

const Home = () => {
  return (
    <div className="home">
      <Navbar />

      <Hero />

      <section className="poets-section">

        <PoetGrid />
      </section>

      <footer className="home-footer">
        <div>❦</div>
        <p>SOME WORDS NEVER FADE</p>
      </footer>
    </div>
  );
};

export default Home;