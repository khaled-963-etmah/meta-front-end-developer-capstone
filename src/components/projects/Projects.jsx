import React from "react";
import ProjectsCard from "./ProjectCard";
import "./Projects.css";
function Projects() {
  const projectData = [
    {
      title: "Project 1",
      description: "Description of Project 1.",
      image:
        "https://www.teamly.com/blog/wp-content/uploads/2022/01/Small-Projects.png", // Path to your project image
      link: "https://github.com/yourusername/project1", // Link to the project
    },
    {
      title: "Project 2",
      description: "Description of Project 2.",
      image:
        "https://www.teamly.com/blog/wp-content/uploads/2022/01/Small-Projects.png",
      link: "https://github.com/yourusername/project2",
    },
    {
      title: "Project 3",
      description: "Description of Project 3.",
      image:
        "https://www.teamly.com/blog/wp-content/uploads/2022/01/Small-Projects.png",
      link: "https://github.com/yourusername/project3",
    },
    {
      title: "Project 4",
      description: "Description of Project 4.",
      image:
        "https://www.teamly.com/blog/wp-content/uploads/2022/01/Small-Projects.png",
      link: "https://github.com/yourusername/project4",
    },
  ];

  return (
    <section id="projects">
      <h2 style={{textAlign:"center"}}>My Last Projects </h2>
      <div className="projects">
        {projectData.map((project, index) => (
          <ProjectsCard
            key={index}
            title={project.title}
            description={project.description}
            image={project.image}
            link={project.link}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;
