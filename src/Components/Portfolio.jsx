/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/cupntable.jpg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "GUI Python Based C++ Compiler",
    description:
      "A complete Python Coded C++ Compiler including Lexing, Parsing, Analyzing and ASKII generator",
    url: "https://github.com/oreo925/C-Compiler-Python-Based-",
  },
  {
    title: "CPU Scheduling Algorithm Test",
    description:
      "A C++ based CPU Scheduling Algorithm Test to test the response time of various Algorithm under one roof",
    url: "https://github.com/oreo925/CPU-Scheduling-Algorithm-Tester-C-",
  },
  {
    title: "C++ based Postal Management System",
    description:
      "A complete detailed and fully functional Postal Management System",
    url: "https://github.com/oreo925/Postal-Management-System-C-",
  },
  {
    title: "Projects achieved as IEEE SB Chair",
    description:
      "As a chair of IEEE Student Branch, I was involved in achieveing Prominent and Extremely Impactful events in my community",
    url: "https://www.instagram.com/_ieeenumlrwp?utm_source=ig_web_button_share_sheet&igsh=OGQ5ZDc2ODk2ZA==",
  },
  {
    title: "C Based Spell Checker usign Hash",
    description:
      "By using Hash Map convulance and file handeling concepts this project is able to depict and identify misspelled words",
    url: "https://github.com/oreo925/Spell-Checker-Hash-Ca-",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
