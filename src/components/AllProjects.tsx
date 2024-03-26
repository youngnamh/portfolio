import Project from "./Project";
import project1 from "../assets/images/splendor.jpeg";
import project2 from "../assets/images/TaskBully.jpeg";
import project3 from "../assets/images/kuritaCo.jpeg";
import project4 from "../assets/images/spacePong.png";

const projectArray = [
  {
    image: project1,
    title: "Splendor",
    category: "Boardgame",
    description:
      "Online version of the popular board game where players take turns taking gems, and buying cards until someone reaches 15 points. Implemented with all 4 extensions playable.",
    preview: "",
    repo: "https://github.com/COMP361/f2022-hexanome-08",
    toolsArray: ["Java", "JavaFX", "Springboot", "Maven", "Docker"],
    demo: "",
  },
  {
    image: project3,
    title: "Kurita Co.",
    category: "Online Store",
    description:
      "A multipage, front end store built with React Router. The website uses the Fake Store API to fetch product data. Users can browse, add, and remove items to and from the cart.",
    preview: "",
    repo: "https://github.com/youngnamh/shopping-cart",
    toolsArray: [
      "Javascript",
      "React",
      "React Router",
      "HTML",
      "CSS",
      "TailwindCSS",
    ],
    demo: "https://shopp-a4bb6.web.app/",
  },
  {
    image: project4,
    title: "Space Pong",
    category: "Single Player Game",
    description:
      "Developed during a 24 hour game challenge. The classic game with many new twists such as powerups, custom sounds, and the fate of the universe in your hands.",
    preview: "",
    repo: "https://github.com/youngnamh/Pong",
    toolsArray: ["Unity", "WebGL"],
    demo: "https://youngnamh.itch.io/space-pong",
  },
  {
    image: project2,
    title: "Task Bully",
    category: "Taskmanager",
    description:
      "Co-developed an award-winning iOS To-Do list application using Swift and SwiftUI. It detects and combats procrastination through personalized push notifications. Fight procrastination with our 3 effective modes: Encouraging, Passive Aggressive, and Bully",
    preview: "",
    repo: "https://github.com/fjborrell/TaskBully",
    toolsArray: ["Swift", "SwiftUI"],
    demo: "",
  },
];

export default function AllProjects() {
  const generateProjects = () => {
    const projects = projectArray.map((project, index) => (
      <Project
        image={project.image}
        title={project.title}
        category={project.category}
        description={project.description}
        preview={project.preview}
        repo={project.repo}
        key={index}
        toolsArray={project.toolsArray}
        demo={project.demo}
      />
    ));
    return projects;
  };

  return (
    <div>
      <div className="column">
        <div className="contact-item" style={{ width: "70%" }}>
          Below, you will find some of the different projects I have completed.
          For a more extensive list of the things I have worked on or am
          currently working on, you can check out my{" "}
          <a
            className="strava"
            href="https://github.com/youngnamh"
            target="_blank"
          >
            Github
          </a>
          , or just ask me!
        </div>
      </div>

      {generateProjects()}
    </div>
  );
}
