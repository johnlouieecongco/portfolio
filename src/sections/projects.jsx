import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { FaFolder } from "react-icons/fa";
import "../styles/section/project.css";
import { projects } from "../data/project";
const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [showAll, setShowAll] = useState(false);
  const filters = [
    "All",
    "Full Stack Web Application",
    "Full Stack Development",
    "Enterprise Application",
    "Data Analysis & Visualization",
    "Database Application",
    "Project Management Software",
    "Natural Language Processing",
    "Financial Software",
    "Educational Platform",
  ];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  const displayedProjects = showAll
    ? filteredProjects
    : filteredProjects.slice(0, 4);

  return (
    <div id="projects" className="portfolio-container">
      <div className="portfolio-wrapper">
        {/* Header */}
        <div className="portfolio-header">
          <h1 className="portfolio-title"><FaFolder className="section-icon" /> My Projects</h1>
          <p className="portfolio-subtitle">
            Explore a collection of my latest design projects, each crafted to
            deliver seamless, user-centric experiences.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="filter-container">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => {
                setActiveFilter(filter);
                setShowAll(false);
              }}
              className={`filter-button ${
                activeFilter === filter ? "active" : ""
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {displayedProjects.length === 0 ? (
            <div className="empty-state">
              <div className="empty-icon">💼</div>
              <p className="empty-text">No projects found in this category.</p>
            </div>
          ) : (
            displayedProjects.map((project) => {
              const Icon = project.icon;
              return (
                <div key={project.id} className="project-card">
                  <div className={`project-icon-area ${project.gradient}`}>
                    <div className="icon-pattern"></div>
                    <div className="project-icon">
                      <Icon />
                    </div>
                    <div className="tags-overlay">
                      <div className="tags-container">
                        {project.tags.map((tag, idx) => (
                          <span key={idx} className="project-tag">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="project-content">
                    <div className="project-category">
                      <FaFolder /> {project.category}
                    </div>
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-description">{project.description}</p>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {filteredProjects.length > 4 && (
          <div className="button-container">
            <div className="line-wrapper">
              <div className="horizontal-line left-line"></div>
              <button
                className="expand-button"
                onClick={() => setShowAll(!showAll)}
              >
                {showAll ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
              </button>
              <div className="horizontal-line right-line"></div>
            </div>
            <div className="button-text">
              {showAll ? "Show Less" : "View All Projects"}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default Projects;
