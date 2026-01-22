import React, { useState, useRef } from "react";
import "../styles/section/about.css";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";
import { FaUser } from "react-icons/fa";

const About = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const imageCardRef = useRef(null);

  const handleImageMouseMove = (e) => {
    if (!imageCardRef.current) return;

    const card = imageCardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const moveX = (x - rect.width / 2) * 0.15;
    const moveY = (y - rect.height / 2) * 0.15;

    setCursorPos({ x: moveX, y: moveY });
  };

  const handleImageMouseEnter = () => {
    setIsHovering(true);
  };

  const handleImageMouseLeave = () => {
    setIsHovering(false);
    setCursorPos({ x: 0, y: 0 });
  };

  return (
    <div id="about" className="about-container">
      <div className="about-header">
        <h1 className="about-title"><FaUser className="section-icon" /> About Me</h1>
        <div className="about-title-underline"></div>
      </div>

      <div className="about-content">
        <div className="about-image">
          <div
            className="image-card"
            ref={imageCardRef}
            onMouseMove={handleImageMouseMove}
            onMouseEnter={handleImageMouseEnter}
            onMouseLeave={handleImageMouseLeave}
            style={{
              transform: `translate(${cursorPos.x}px, ${cursorPos.y}px)`,
            }}
          >
            <img src={isHovering ? image2 : image3} alt="Person" />
          </div>
        </div>

        <div className="about-details">
          <div className="about-intro">
            <h2 className="about-name">I'm Johnlouie</h2>
            <p className="about-title-role">Computer Science Student</p>
          </div>

          <p className="about-description">
            Highly motivated Fourth-year Computer Science student with a solid
            foundation in programming languages, including Python, Java, C++,
            and C. Adept at problem-solving and analytical thinking, with
            experience in group projects and technical presentations.
          </p>

          <div className="about-contact-info">
            <div className="contact-item">
              <span className="contact-label">Email :</span>
              <a href="mailto:contact@example.com" className="contact-value">
                contact@example.com
              </a>
            </div>
            <div className="contact-item">
              <span className="contact-label">Location :</span>
              <span className="contact-value">
                Philippines
              </span>
            </div>
          </div>

          <a href="/Resume/resume.pdf" download className="btn-resume">
            Resume <span>›</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
