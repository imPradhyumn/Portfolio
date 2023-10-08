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
    style?: {};
    width?: number;
    height?: number;
  }[] = [
    { name: "Node JS", percent: "75%", imgName: "nodejs.png" },
    {
      name: "Express JS",
      percent: "75%",
      imgName: "expressjs.png",
      height: 15,
      width: 15,
    },
    {
      name: "Flask",
      percent: "70%",
      imgName: "flask.png",
      style: { filter: "invert(1)" },
    },
    { name: "Spring Boot", percent: "70%", imgName: "spring-boot.png" },
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
                    width={skill.width ?? 13}
                    height={skill.height ?? 13}
                    style={skill.style}
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
