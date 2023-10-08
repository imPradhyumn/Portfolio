import React from "react";
import SkillPercentBar from "./SkillPercentBar";
import Image from "next/image";

function FrontendSkills({
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
  }[] = [
    { name: "React JS", percent: "75%", imgName: "reactjs.png" },
    {
      name: "Next JS",
      percent: "75%",
      imgName: "nextjs1.svg",
      style: { filter: "invert(1)" },
    },
    { name: "HTML/CSS", percent: "70%", imgName: "html.png" },
    { name: "Tailwind", percent: "70%", imgName: "tailwind.png" },
  ];

  return (
    <div className="cards-container">
      <div className="skill-card">
        <header>
          <h3>Front-end</h3>
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

export default FrontendSkills;
