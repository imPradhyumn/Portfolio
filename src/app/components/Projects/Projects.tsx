import ProjectCard from "./ProjectCard";
import React from "react";
import "./css/projects.css";
import { projectsList } from "../../data/projectsList";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useInView } from "react-intersection-observer";

function Projects() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    fallbackInView: true,
    threshold: 1,
  });

  return (
    <section className="component-container" id="projects-section">
      <header className="heading">
        <FontAwesomeIcon icon={faLaptopCode} className="heading-icon" />
        <h2>Projects</h2>
      </header>

      <div id="projects-items-container" className="container-shadow" ref={ref}>
        {projectsList.map((project, index) => {
          return inView ? (
            <ProjectCard
              projectName={project.name}
              projectLink={project.link}
              key={project.name}
              imageName={project.imageName}
              bgColor={project.bgColor}
              techStack={project.techStack}
              index={index + 1}
            />
          ) : null;
        })}
      </div>
    </section>
  );
}

export default Projects;
