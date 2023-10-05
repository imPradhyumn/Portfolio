import React from "react";
import SkillPercentBar from "./SkillPercentBar";
import Image from "next/image";

function BackendSkills({
  imageBasePath,
  inView,
}: {
  imageBasePath: string;
  inView: boolean;
}) {
  const skills: {
    name: string;
    percent: string;
    imgName: string;
  }[] = [
    { name: "Node JS", percent: "75%", imgName: "html.png" },
    { name: "Express JS", percent: "75%", imgName: "html.png" },
    { name: "Flask", percent: "70%", imgName: "html.png" },
    { name: "Spring Boot", percent: "70%", imgName: "html.png" },
  ];

  return (
    <div className="cards-container">
      <div className="skill-card">
        <header>
          <h3>Back-end</h3>
        </header>
        <div>
          {skills.map((skill) => {
            return (
              <div className="skill-item" key={skill.name}>
                <figure>
                  <Image
                    src={`${imageBasePath}/${skill.imgName}`}
                    alt=""
                    width="13"
                    height="13"
                  />
                  <span>{skill.name}</span>
                </figure>
                <span>{skill.percent}</span>
                <SkillPercentBar
                  inView={inView}
                  name={skill.name}
                  percent={skill.percent}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default BackendSkills;
