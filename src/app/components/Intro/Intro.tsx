import Image from "next/image";
import ReactTyped from "react-typed";
import ProfilePic from "../../../../public/img3.jpg";
import "./intro.css";

function Intro() {
  const strings: string[] = [
    "Frontend Developer",
    "Python Developer",
    "Coding Enthusiast",
    "Open-source Contributor",
    "Book Lover",
  ];

  return (
    <div id="home-container">
      <div id="intro-details-container">
        <h2 id="greet-text">{"Hello World, I'm"}</h2>
        <h1 id="name-text">{"Pradhyumn Sharma"}</h1>
        <h2 id="profession-text">
          A{" "}
          <ReactTyped
            strings={strings}
            typeSpeed={50}
            loop
          />
        </h2>

        <div id="intro-para-container">
          <p>
            {
              "An innovative, purpose-driven engineer contributed my learning into\
            building web applications & solutions for enterprises. Seeking to\
            work in a professional ambiance that provides a space to contribute\
            my skills towards the growth of the organization."
            }
          </p>
        </div>
      </div>
      <div id="img-container">
        <Image
          src={ProfilePic}
          alt="profile-image"
        />
      </div>
    </div>
  );
}

export default Intro;
