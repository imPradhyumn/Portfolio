"use client";

import "./page.css";
import Main from "./components/Main";

export default function Home() {
  return (
    <div>
      <Main />
      <div id="social-icons-container">
        <div data-label="Github">
          <a href="https://github.com/imPradhyumn" target="_blank">
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
          <a href="https://linkedin.com/in/im-pradhyumn" target="_blank">
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
          <a href="https://uiverse.io/profile/imPradhyumn" target="_blank">
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
          <a href="https://instagram.com/notorious_proton" target="_blank">
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
  );
}
