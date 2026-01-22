import {
  FaBriefcase,
  FaDatabase,
  FaBullseye,
  FaUsers,
  FaRobot,
  FaBuilding,
  FaLeaf,
  FaFish,
  FaMoneyBillWave,
  FaTshirt,
  FaMusic,
} from "react-icons/fa";
export const skills = [
  {
    name: "Basic Knowledge of HTML, CSS",
    level: 85,
    color: "var(--color-skill-2)",
  },
  { name: "Problem-Solving", level: 88, color: "var(--color-skill-3)" },
  { name: "Adaptability", level: 85, color: "var(--color-skill-4)" },
  { name: "Project Management", level: 80, color: "var(--color-skill-5)" },
  {
    name: "Basic Knowledge of Python, Java, C++",
    level: 82,
    color: "var(--color-skill-1)",
  },
  { name: "Database Management", level: 80, color: "var(--color-skill-2)" },
  { name: "Collaborative", level: 90, color: "var(--color-skill-3)" },
  { name: "Dance & Choreography", level: 88, color: "var(--color-skill-4)" },
];

export const services = [
  {
    icon: FaBriefcase,
    title: "Data Entry & Documentation",
    description:
      "Comprehensive data entry services with meticulous attention to detail. Experienced in maintaining documentation and ensuring data integrity across systems.",
  },
  {
    icon: FaDatabase,
    title: "Database Management",
    description:
      "Proficient in database management with MySQL. Skilled in organizing, maintaining, and optimizing database systems for efficient data retrieval and storage.",
  },
  {
    icon: FaBullseye,
    title: "Problem-Solving & Adaptability",
    description:
      "Strong analytical thinking and problem-solving capabilities. Quick learner with excellent adaptability to new technologies and innovative solutions.",
  },
  {
    icon: FaUsers,
    title: "Project Management & Collaboration",
    description:
      "Experienced in managing projects and working collaboratively in team environments. Strong communication skills with proven ability to lead and coordinate effectively.",
  },
  {
    icon: FaMusic,
    title: "Dance & Choreography",
    description:
      "Passionate dancer with experience in various dance styles. Skilled in choreography, performance, and creative expression through movement.",
  },
];

export const projects = [
  {
    id: 1,
    title: "Student Management System",
    category: "Full Stack Web Application",
    description:
      "Comprehensive student information management system with enrollment, grading, and attendance tracking",
    icon: FaUsers,
    gradient: "gradient-navy",
    tags: ["Database", "Web App", "System Design"],
  },
  {
    id: 2,
    title: "E-commerce Platform",
    category: "Full Stack Development",
    description:
      "Complete online shopping platform with product catalog, shopping cart, payment processing, and admin dashboard",
    icon: FaBriefcase,
    gradient: "gradient-coral",
    tags: ["React", "Node.js", "Payment API"],
  },
  {
    id: 3,
    title: "Hospital Management System",
    category: "Enterprise Application",
    description:
      "Integrated healthcare management system for patient records, appointment scheduling, billing, and staff management",
    icon: FaBuilding,
    gradient: "gradient-bright",
    tags: ["Database", "Healthcare", "Full Stack"],
  },
  {
    id: 4,
    title: "Weather Forecasting Application",
    category: "Data Analysis & Visualization",
    description:
      "Real-time weather prediction system using machine learning algorithms and data visualization",
    icon: FaRobot,
    gradient: "gradient-teal",
    tags: ["ML", "APIs", "Visualization"],
  },
  {
    id: 5,
    title: "Library Management System",
    category: "Database Application",
    description:
      "Complete library information system with book catalog, member management, borrowing, and return operations",
    icon: FaDatabase,
    gradient: "gradient-orange",
    tags: ["Database", "Desktop App", "Inventory"],
  },
  {
    id: 6,
    title: "Social Media Platform",
    category: "Full Stack Web Application",
    description:
      "Interactive social networking platform with user profiles, messaging, feed, and real-time notifications",
    icon: FaUsers,
    gradient: "gradient-dark",
    tags: ["Socket.io", "React", "Node.js"],
  },
  {
    id: 7,
    title: "Task Management & Collaboration Tool",
    category: "Project Management Software",
    description:
      "Team productivity application with task tracking, project management, collaboration features, and analytics",
    icon: FaBullseye,
    gradient: "gradient-navy",
    tags: ["Agile", "Collaboration", "Dashboard"],
  },
  {
    id: 8,
    title: "Sentiment Analysis System",
    category: "Natural Language Processing",
    description:
      "AI-powered sentiment analysis tool that classifies text emotions using machine learning and NLP techniques",
    icon: FaRobot,
    gradient: "gradient-coral",
    tags: ["NLP", "ML", "AI"],
  },
  {
    id: 9,
    title: "Banking Management System",
    category: "Financial Software",
    description:
      "Secure banking application with account management, transaction processing, security features, and reporting",
    icon: FaMoneyBillWave,
    gradient: "gradient-bright",
    tags: ["Security", "Database", "Finance"],
  },
  {
    id: 10,
    title: "Learning Management System (LMS)",
    category: "Educational Platform",
    description:
      "Online education platform featuring course management, student enrollment, assignments, grading, and progress tracking",
    icon: FaBriefcase,
    gradient: "gradient-teal",
    tags: ["Education", "Full Stack", "Web App"],
  },
];
