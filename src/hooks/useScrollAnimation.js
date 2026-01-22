import { useEffect } from "react";

export const useScrollAnimation = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        } else {
          // Remove 'visible' class when section leaves viewport
          entry.target.classList.remove("visible");
        }
      });
    }, observerOptions);

    // Automatically observe all sections
    const sections = document.querySelectorAll(
      "section, .hero-container, .about-container, .expertise-container, .portfolio-container, .contact-container"
    );

    sections.forEach((section) => {
      section.classList.add("scroll-animate");
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);
};
