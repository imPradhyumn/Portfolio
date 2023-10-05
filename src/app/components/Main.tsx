import React, { lazy } from "react";
import AboutMe from "./AboutMe/AboutMe";
import Contact from "./Contact/Contact";
import Intro from "./Intro/Intro";
import Projects from "./Projects/Projects";
import Skills from "./Skills/Skills";

// const AboutMe = lazy(() => import("./AboutMe/AboutMe"));
// const Contact = lazy(() => import("./Contact/Contact"));
// const Intro = lazy(() => import("./Intro/Intro"));
// const Projects = lazy(() => import("./Projects/Projects"));
// const Skills = lazy(() => import("./Skills/Skills"));

function Main() {
  return (
    <React.Fragment>
      <Intro />
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
    </React.Fragment>
  );
}

export default Main;
