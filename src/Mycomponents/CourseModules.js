import React from "react";
import "./CourseModules.css";
import trainone from './images/trainone.jpeg';


const modules = [
  {
    title: "BASIC COMPUETR SKILLS",
    duration: "3 weeks",
    points: [
      "Computer Fundamentals,File & Folder Management,Microsoft Office or Google Workspace,Internet & Web Browsing,"],
    color: "#dbeafe", // Light blue
  },
  {
    title: "MS OFFICE",
    duration: "2 weeks",
    points: ["includes a variety of applications such as:MS Word – for creating and formatting documents MS Excel – for data entry, calculations, and analysisMSPowerPoint – for designing professional presentations"],
    color: "#fef3c7", // Yellow
  },
  {
    title: "C++",
    duration: "1.5 weeks",
    points: ["C++ is a powerful general-purpose programming language that supports both procedural and object-oriented programming (OOP).Foundation for Learning Programming,Widely Used in System-Level Programming,Object-Oriented Programming (OOP"],
    color: "#fde68a", // Gold
  },
  {
    title: "C",
    duration: "2 weeks",
    points: ["Foundation of Programming Concepts,System-Level Programming,Performance and Efficiency,Portable and Flexible,Base for Other Languages."],
    color: "#c7d2fe",
  },
  {
    title: "JAVA",
    duration: "4 weeks",
    points: ["Java is a high-level, object-oriented, class-based programming language designed to have as few implementation dependencies as possible. It is known for its Write Once, Run Anywhere (WORA) capability, meaning compiled Java code can run on any platform that supports Java without recompilation."],
    color: "#fbcfe8",
  },
  {
    title: "PYTHON",
    duration: "1.5 weeks",
    points: ["Python is a high-level, interpreted, and general-purpose programming language known for its simple syntax, readability, and versatility.Beginner-Friendly and Easy to Learn.Versatile and Widely Used.Strong Support for Libraries and Frameworks.In-Demand for Jobs and Freelancing."],
    color: "#a7f3d0",
  },
  {
    title: "REACT",
    duration: "1 week",
    points: ["React is a JavaScript library developed by Facebook for building user interfaces (UIs), especially for single-page applications (SPAs). Component-Based Architecture.Fast and Efficient.Popular and In-Demand.Strong Community and Ecosystem.Great for Modern Web Apps."],
    color: "#fca5a5",
  },
  {
    title: "DJANGO",
    duration: "1.5 weeks",
    points: ["Django is a high-level Python web framework that enables rapid development of secure and maintainable websites.Fast Development.Secure by Default.Scalable and Robust.Perfect for Full-Stack Web Development."],
    color: "#fcd34d",
  },
  {
    title: "HTML",
    duration: "2 weeks",
    points: ["HTML stands for HyperText Markup Language. It is the standard language used to create the structure of web pages.Foundation of Web Development.Easy to Learn and Use.Compatible with All Browsers."],
    color: "#e9d5ff",
  },
  {
    title: "CSS",
    duration: "1 week",
    points: ["CSS is what makes a website visually appealing by adding colors, layouts, fonts, spacing, and design effects. Enables Responsive Web Design. Reduces Code Repetition. Essential for Frontend Development."],
    color: "#bae6fd",
  },
  {
    title: "JAVASCRIPT",
    duration: "1 week",
    points: ["JavaScript (JS) is a high-level, interpreted programming language used to create interactive and dynamic content on websites. It is one of the core technologies of the web, alongside HTML and CSS. Client-side scripting. Lightweight & fast."],
    color: "#ddd6fe",
  },
  {
    title: "INTERVIEWSKILLS",
    duration: "2 weeks",
    points: ["Interview skills are the combination of communication, presentation, behavioral, and thinking skills you need to effectively showcase your qualifications and personality during job interviews.They help you make a strong impression, answer questions confidently, and increase your chances of getting hired."],
    color: "#fdba74",
  },
];

const CourseModules = () => {
  return (
    <div className="img-section-left">
        <img src={trainone} alt="./images/trainone.jpeg" className="img-section"/>
     
    <div className="outer-box">
      <div className="scroll-box">
        {modules.map((mod, index) => (
          <div
            className="module-box"
            key={index}
            style={{ backgroundColor: mod.color }}
          >
            <h3>Module {index + 1}</h3>
            <h2>{mod.title}</h2>
            <p className="duration">Time: {mod.duration}</p>
            <ul>
              {mod.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      
  </div>
  </div>
  );
};

export default CourseModules;

