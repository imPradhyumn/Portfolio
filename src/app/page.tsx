"use client";

import React from "react";
import "./page.css";
import Main from "./components/Main";

export default function Home() {
  return (
    <React.Fragment>
      <div>
        <Main />

        {/* Social Links */}
        <div id="social-icons-container">
          <div data-label="Github">
            <a
              href="https://github.com/imPradhyumn"
              target="_blank"
            >
              <img
                className="social-media-icon"
                src="static/social-icons/github.png"
                alt="git-icon"
                width="30"
                height="30"
              />
            </a>
          </div>

          <div data-label="LinkedIn">
            <a
              href="https://linkedin.com/in/im-pradhyumn"
              target="_blank"
            >
              <img
                className="social-media-icon"
                src="static/social-icons/linkedin.png"
                alt="linkedin-icon"
                width="30"
                height="30"
              />
            </a>
          </div>

          <div data-label="UiVerse">
            <a
              href="https://uiverse.io/profile/imPradhyumn"
              target="_blank"
            >
              <img
                className="social-media-icon"
                src="static/social-icons/uiverse.png"
                alt="uiverse-icon"
                width="20"
                height="20"
              />
            </a>
          </div>

          <div data-label="Instagram">
            <a
              href="https://instagram.com/notorious_proton"
              target="_blank"
            >
              <img
                className="social-media-icon"
                src="static/social-icons/insta.png"
                alt="insta-icon"
                width="30"
                height="30"
              />
            </a>
          </div>
        </div>
      </div>
      <footer>
        <span>&#169;</span>
        <span style={{ display: "inline-block", marginLeft: "0.4rem" }}>
          Copyright 2023 | Made in Love with Programming {"</> | "}
          @Author : Pradhyumn Sharma
        </span>
      </footer>
    </React.Fragment>
  );
}
