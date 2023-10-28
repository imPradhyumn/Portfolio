"use client";

import React, { useState } from "react";
import "./navbar.css";
import Link from "next/link";
import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faDownload,
  faClose,
  faHome,
  faAtom,
  faLaptopCode,
  faContactCard,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const navLinks = [
    { title: "About", link: "#about-me-section", icon: faUser },
    { title: "Skills", link: "#skills-section", icon: faAtom },
    { title: "Projects", link: "#projects-section", icon: faLaptopCode },
    { title: "Contact", link: "#contact-section", icon: faContactCard },
  ];

  const [isDropDownVisible, setIsDropDownVisible] = useState(false);

  const dropdownMenuRef = useRef<any>();

  function toggleDropdownMenu(e: any): void {
    let ele = dropdownMenuRef.current;
    console.log(isDropDownVisible);
    if (isDropDownVisible) {
      ele.style.height = "0";
      setIsDropDownVisible(false);
    } else {
      setIsDropDownVisible(true);
      ele.style.height = "147px";
    }
  }

  function downloadResume(): void {
    const host: string = window.location.href;
    window.open(`${host}/Pradhyumn_Sharma_Frontend_Resume_Wo.pdf`, "_blank");
  }

  return (
    <nav className="d-flex align-center justify-content-between">
      <h2 id="nav-title">imPradhyumn</h2>

      {/* Navigation Section */}
      <section id="nav-links-container">
        <div id="nav-links">
          {navLinks.map((item) => {
            return (
              <Link
                href={item.link}
                className="nav-link"
                key={item.title}
              >
                <FontAwesomeIcon
                  icon={item.icon}
                  className="nav-link-icon"
                />
                {item.title}
              </Link>
            );
          })}
        </div>

        {/* Nav-Menu for Smaller Screen */}
        <button
          id="nav-dropdown-btn"
          onClick={toggleDropdownMenu}
        >
          {!isDropDownVisible ? (
            <FontAwesomeIcon
              icon={faBars}
              className="btn-icon"
              id="fa-bar"
            />
          ) : (
            <FontAwesomeIcon
              icon={faClose}
              className="btn-icon"
              id="fa-close"
            />
          )}
        </button>
        <div
          id="nav-dropdown-list"
          ref={dropdownMenuRef}
        >
          <ul>
            {navLinks.map((item) => {
              return (
                <li
                  className="nav-dropdown-link"
                  key={item.title}
                >
                  <Link href={item.link}>
                    <FontAwesomeIcon icon={item.icon} />
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Download Button */}

        <a
          href="http://localhost:3000/readme.pdf"
          download={"Pradhyumn_Sharma_Resume"}
        >
          <button
            id="download-btn"
            onClick={downloadResume}
          >
            <span>Download CV</span>
            <FontAwesomeIcon icon={faDownload} />
          </button>
        </a>
      </section>
    </nav>
  );
}

export default Navbar;
