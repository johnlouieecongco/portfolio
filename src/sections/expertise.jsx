import React from "react";
import "../styles/section/expertise.css";
import { 
  FaReact, 
  FaNode, 
  FaDatabase, 
  FaJava, 
  FaJs,
  FaPython,
  FaHtml5,
  FaCss3,
  FaGitAlt,
  FaLinux,
  FaDocker,
  FaAws,
  FaLightbulb
} from "react-icons/fa";
import { SiExpress, SiTailwindcss, SiMongodb } from "react-icons/si";

const skills = [
  { name: "ReactJS", icon: FaReact, color: "#61DAFB", level: 45 },
  { name: "Node.js", icon: FaNode, color: "#68A063", level: 40 },
  { name: "MongoDB", icon: SiMongodb, color: "#13AA52", level: 38 },
  { name: "Express.js", icon: SiExpress, color: "#000000", level: 35 },
  { name: "JavaScript", icon: FaJs, color: "#F7DF1E", level: 50 },
  { name: "Python", icon: FaPython, color: "#3776AB", level: 42 },
  { name: "HTML5", icon: FaHtml5, color: "#E34C26", level: 48 },
  { name: "CSS3", icon: FaCss3, color: "#1572B6", level: 45 },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4", level: 40 },
  { name: "MySQL", icon: FaDatabase, color: "#00758F", level: 38 },
  { name: "Java", icon: FaJava, color: "#007396", level: 35 },
  { name: "Git", icon: FaGitAlt, color: "#F1502F", level: 43 },
];

const Expertise = () => {
  return (
    <section id="expertise" className="expertise-container">
      <div className="expertise-content">
        <div className="expertise-header">
          <h2 className="expertise-title"><FaLightbulb className="section-icon" /> Skills & <span>Abilities</span></h2>
        </div>

        <div className="skills-grid">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div key={index} className="skill-card">
                <div 
                  className="skill-bar-background" 
                  style={{ 
                    height: `${skill.level}%`,
                    backgroundColor: skill.color
                  }}
                ></div>
                <div className="skill-content">
                  <div className="skill-icon" style={{ color: skill.color }}>
                    <Icon />
                  </div>
                  <p className="skill-name">{skill.name}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
