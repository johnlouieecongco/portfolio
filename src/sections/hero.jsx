import React, { useState, useEffect } from "react";
import "../styles/section/hero.css";
import image1 from "../assets/image2.jpg";
import { FaGithub, FaFacebook } from "react-icons/fa";
const TypingSwap = ({ texts, typingSpeed = 100, pause = 1500 }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = texts[currentIndex];
    let timer;

    if (!isDeleting) {
      timer = setTimeout(() => {
        setDisplayedText(fullText.slice(0, displayedText.length + 1));
        if (displayedText.length + 1 === fullText.length) {
          setTimeout(() => setIsDeleting(true), pause); // Wait before deleting
        }
      }, typingSpeed);
    } else {
      timer = setTimeout(() => {
        setDisplayedText(fullText.slice(0, displayedText.length - 1));
        if (displayedText.length - 1 === 0) {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % texts.length); // Next phrase
        }
      }, typingSpeed / 2);
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentIndex, texts, typingSpeed, pause]);

  return <h2>{displayedText}</h2>;
};

export default function Hero() {
  return (
    <div className="hero-wrapper">
      {/* Navigation */}
      <nav className="nav">
        <div className="logo"></div>
        <ul className="nav-links">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#expertise">Expertise</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact Me</a>
          </li>
          <li>
            <a href="mailto:cosettealsado123@gmail.com" className="btn-talk">
              Let's Talk
            </a>
          </li>
        </ul>
      </nav>

      <section className="hero">
        <div className="bg-circle"></div>
        <div className="bg-circle2"></div>

        <div className="hero-content">
          <div className="hero-text-section">
            <h1>Hi there,</h1>
            <h1>
              Johnlouie <span className="name-highlight">Congco</span>
            </h1>
          </div>

          <div className="hero-typing-section">
            <h2 className="typing-label">I'm a</h2>
            <div className="typingSwap">
              <TypingSwap
                texts={["UI/UX Designer", "Tech Solutions Builder"]}
                typingSpeed={100}
                pause={1500}
              />
            </div>
          </div>

          <div className="hero-buttons">
            <a href="#about">
              <button className="btn-primary">About Me</button>
            </a>
          </div>
          <div className="floating-card social-card">
            <a
              href="https://www.facebook.com/JLCongco"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon facebook"
            >
              <FaFacebook />
            </a>
            <a
              href="https://github.com/johnlouieecongco"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon Github"
            >
              <FaGithub />
            </a>
          </div>
        </div>

        <div className="hero-image">
          <div className="image-container">
            <img src={image1} alt="Designer" className="main-image" />
          </div>
        </div>
      </section>
    </div>
  );
}
