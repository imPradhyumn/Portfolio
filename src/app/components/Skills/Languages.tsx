import React from "react";
import SkillPercentBar from "./SkillPercentBar";
import Image from "next/image";

function Languages({
  imageBasePath,
  inView,
}: {
  imageBasePath: string;
  inView: boolean;
}) {
  const languages: {
    name: string;
    percent: string;
    imgName: string;
  }[] = [
    { name: "Python", percent: "75%", imgName: "html.png" },
    { name: "Java", percent: "75%", imgName: "html.png" },
    { name: "C/C++", percent: "70%", imgName: "html.png" },
    { name: "Javascript", percent: "70%", imgName: "html.png" },
  ];

  return (
    <div className="cards-container">
      <div className="skill-card">
        <header>
          <h3>Languages</h3>
        </header>

        <div>
          {languages.map((skill) => {
            return (
              <div className="skill-item" key={skill.name}>
                <figure>
                  <Image
                    loading="lazy"
                    src={`${imageBasePath}/${skill.imgName}`}
                    alt=""
                    width="13"
                    height="13"
                  />
                  <span>{skill.name}</span>
                </figure>
                <span>{skill.percent}</span>

                <SkillPercentBar
                  name={skill.name}
                  inView={inView}
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

export default Languages;
