import React from "react";
import Card from "./Card";

export default function Projects() {
  const projects = [
    {
      name: "Rawaz Ali",
      description: "My portfolio website",
      image: "portfolio.png",
      technologies: ["Next.js", "TailwindCSS", "react-icons"],
      github: "https://github.com/rawazali999/portfolio",
      link: "https://rawazali.netlify.app/",
    },
    {
      name: "Online Store",
      description: "E-commerce website",
      image: "online-store.png",
      technologies: [
        "React.js",
        "Redux.js",
        "axios",
        "TailwindCSS",

        "react-router-dom",
        "MaterialUi",
      ],
      github: "https://github.com/rawazali999/online-store",
      link: "https://online-store-rawaz.netlify.app/",
    },
    {
      name: "12th grade platform",
      description: "12th grade e-learning platform",
      image: "12th-grade-elearning-platform.png",
      technologies: ["Next.js", "TailwindCSS", "MongoDB"],
      github: "https://github.com/rawazali999/12-grade-elearning-platform",
      link: "https://12-grade-platform.netlify.app/",
    },
    {
      name: "Filmify",
      description: "Movie and Tv Show information website",
      image: "filmify.png",
      technologies: ["Next.js", "TailwindCSS"],
      github: "https://github.com/rawazali999/filmify",
      link: "https://filmify-app.netlify.app/",
    },
    {
      name: "Todo App",
      description: "Todo application",
      image: "todo.png",
      technologies: ["React.js", "TailwindCSS", "useContext", "Local Storage"],
      github: "https://github.com/rawazali999/todo-list-app",
      link: "https://todo-list-app-rawaz.netlify.app/",
    },
    {
      name: "Weather App",
      description: "Weather application",
      image: "weather.png",
      technologies: ["React.js", "TailwindCSS"],
      github: "https://github.com/rawazali999/weather-app",
      link: "https://weather-app-rawaz.netlify.app/",
    },
    {
      name: "Calculator App",
      description: "Calculator application",
      image: "calculator.png",
      technologies: ["React.js", "TailwindCSS"],
      github: "https://github.com/rawazali999/calculator",
      link: "https://calculator-rawaz.netlify.app/",
    },
  ];

  return (
    <section>
      <h2
        id="projects"
        className="my-4  pt-20 text-center text-4xl tracking-wider"
      >
        Projects
      </h2>

      <div
        id="projects"
        className="mx-4 grid grid-cols-1 gap-4  sm:grid-cols-2 md:grid-cols-3"
      >
        {projects.map((project, index) => (
          <Card key={index} project={project} />
        ))}
      </div>
    </section>
  );
}
