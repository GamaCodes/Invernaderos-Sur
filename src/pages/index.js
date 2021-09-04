import React from "react";
import AnimationRevealPage from "../helpers/AnimationRevealPage";
import Hero from "../components/Hero";
import About from "../components/About";
import Target from "../components/Target";
import Service from "../components/Service";
import Politics from "../components/Politics.js";
import Email from "../components/Email";
import Footer from "../components/Footer";

export default function index() {
  return (
    <>
      <AnimationRevealPage>
        <Hero />
        <About />
        <Target />
        <Service textOnLeft={true} />
        <Politics />
        <Email />
        <Footer />
      </AnimationRevealPage>
    </>
  );
}
