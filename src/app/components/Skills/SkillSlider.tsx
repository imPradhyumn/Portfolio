import React from "react";
import "./css/skill-carousel.css";
import Image from "next/image";

function SkillSlider() {
  let images = [
    "html-logo.png",
    "css.svg",
    "js.png",
    "python.png",
    "react.png",
    "java.png",
    "tailwind.png",
  ];

  images = [...images, ...images];
  const basePath = "/static/skill-logos/carousel";

  return (
    <div id="carousel-container">
      <div id="slider-track">
        {images.map((imgName, index) => {
          return (
            <Image
              src={`${basePath}/${imgName}`}
              alt="img"
              width="60"
              height="60"
              key={imgName + index}
            />
          );
        })}
      </div>
    </div>
  );
}

export default SkillSlider;
