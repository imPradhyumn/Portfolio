import "./css/skills.css";
import Languages from "./Languages";
import FrontendSkills from "./FrontendSkills";
import BackendSkills from "./BackendSkills";
import SkillSlider from "./SkillSlider";
import { useInView } from "react-intersection-observer";
import React from "react";

function Skills() {
  const imageBasePath = "/static/skill-logos";

  const { ref, inView } = useInView({
    triggerOnce: true,
    fallbackInView: true,
    threshold: 1,
  });

  return (
    <section className="component-container" id="skills-section">
      <header className="heading">
        <h2>{"</> "}Skills</h2>
      </header>

      <SkillSlider />

      <div ref={ref} id="skills-items-container" className="container-shadow">
        {inView ? (
          <React.Fragment>
            <Languages imageBasePath={imageBasePath} inView={inView} />
            <FrontendSkills imageBasePath={imageBasePath} inView={inView} />
            <BackendSkills imageBasePath={imageBasePath} inView={inView} />
          </React.Fragment>
        ) : null}
      </div>
    </section>
  );
}

export default Skills;
