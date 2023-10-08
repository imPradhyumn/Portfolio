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
    height: number;
    width: number;
  }[] = [
    {
      name: "Python",
      percent: "75%",
      imgName: "python.png",
      height: 13,
      width: 13,
    },
    {
      name: "Java",
      percent: "75%",
      imgName: "java.png",
      height: 18,
      width: 18,
    },
    {
      name: "C/C++",
      percent: "70%",
      imgName: "c++.png",
      height: 16,
      width: 16,
    },
    {
      name: "Javascript",
      percent: "70%",
      imgName: "javascript.png",
      height: 12,
      width: 12,
    },
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
                    width={skill.width}
                    height={skill.height}
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
