import React from "react";
import Hero from "../sections/hero";
import About from "../sections/about";
import Expertise from "../sections/expertise";
import Projects from "../sections/projects";
import Contact from "../sections/contact";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import "../styles/section/animation.css";

export default function Home() {
  useScrollAnimation();

  return (
    <>
      <Hero />
      <About />
      <Expertise />
      <Projects />
      <Contact />
    </>
  );
}
