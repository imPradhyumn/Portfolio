import React, { useState } from "react";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./css/about-me.css";
import { useInView } from "react-intersection-observer";

function AboutMe() {
  const [isParaExpanded, setIsParaExpanded] = useState(false);
  const expandParagraph = (e: any) => {
    const paragraphDiv: any = document.getElementById(
      "about-me-para-container"
    );
    if (e.target.value == "read-more") {
      setIsParaExpanded(true);
      if (screen.width <= 700) paragraphDiv.style.height = "840px";
      else paragraphDiv.style.height = "420px";
    } else {
      setIsParaExpanded(false);
      paragraphDiv.style.height = "200px";
    }
  };

  const { ref, inView } = useInView({
    triggerOnce: true,
    fallbackInView: true,
    threshold: 1,
  });

  return (
    <section
      className="component-container"
      id="about-me-section"
    >
      <header className="heading">
        <FontAwesomeIcon
          icon={faLaptopCode}
          className="heading-icon"
        />
        <h2>About Me</h2>
      </header>

      <div id="about-me-container">
        <div id="about-me-para-container">
          <p>
            {
              "Motto : \"It's better to light a candle than to curse the darkness\
            && \"Failures aren't opposite of success they're the part of it\""
            }
          </p>
          <br />
          <p>
            {
              "A passionate, persistent, purpose driven person always keen and\
            ready to learn new things. Completed my degree with honors in\
            Computer Science from Jodhpur Institute of Engineering & Technology,\
            Jodhpur, Rajasthan."
            }
          </p>
          <br />
          <p>
            {
              "During my college time span I grew a ample interest in programming &\
            learning new tech-stacks which pushed me to work on different\
            projects and gain practical skill-set. In the 3rd year I attended a\
            2months training for Machine Learning with Python and gained a basic\
            understanding of the same and later YouTube and others learning\
            platforms helped me gain more knowledge on it and I built few\
            projects implementing Machine Learning with Python."
            }
          </p>
          <br />
          <p>
            {
              "I was also a active participant in extra-curricular activities such\
            as Sports and Technical Events which helped me become a good team\
            worker and improved my soft skills part."
            }
          </p>
          <br />
          <p>
            {
              "At present, I am working in an MNC at the position of Full Stack\
            Developer and I love my job. I love when my fingers run on keyboard\
            to write code, I love when my brain is busy finding out the solution\
            of the bug. Here, in my current company, I have learned a lot, met\
            new people, networked with them and gained a lot of new skills."
            }
            \
          </p>
        </div>

        {!isParaExpanded ? (
          <button
            id="read-more-btn"
            value="read-more"
            type="button"
            onClick={expandParagraph}
          >
            Read More...
          </button>
        ) : (
          <button
            id="read-more-btn"
            value="close"
            type="button"
            onClick={expandParagraph}
          >
            Close
          </button>
        )}
      </div>

      <div
        ref={ref}
        id="about-me-items-container"
      >
        {inView ? (
          <React.Fragment>
            <div className="about-me-items-card">
              <h2>Education</h2>
              <ul id="education-list">
                <li className="education-item">
                  <h3>Bachelor of Technology</h3>
                  <h5>- Jodhpur Institue of Engineering & Technology</h5>
                  <h5>- 2016-2020</h5>
                </li>

                <li className="education-item">
                  <h3>Senior Secondary</h3>
                  <h5>- Evergreen Public School, Bhilwara</h5>
                  <h5>- 2016</h5>
                </li>
              </ul>
            </div>

            <div className="about-me-items-card">
              <h2>Experience</h2>
              <ul id="experience-list">
                <li>
                  <h3>Frontend Developer</h3>
                  <h5>- Capgemini India Private Limited</h5>
                  <h5>- 2021-Current</h5>
                </li>
              </ul>
            </div>
          </React.Fragment>
        ) : null}
      </div>
    </section>
  );
}

export default AboutMe;
