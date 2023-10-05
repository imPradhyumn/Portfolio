"use client";

import "react-circular-progressbar/dist/styles.css";
import { useEffect } from "react";
import "./css/skill-percent-bar.css";

function SkillPercentBar({
  name,
  inView,
  percent,
}: {
  name: string;
  inView: boolean;
  percent: string;
}) {
  let interval: number;

  useEffect(() => {
    interval = window.setInterval(increaseWidth, 1000);
  }, []);

  function increaseWidth() {
    const bar = document.getElementById(name) as HTMLElement;
    if (bar) {
      bar.style.width = percent;
      clearInterval(interval);
    }
  }

  return inView ? (
    <div className="percent-bar-container item-break">
      <div id={name} className="percent-bar" style={{ width: "0%" }}></div>
    </div>
  ) : null;
}

export default SkillPercentBar;
